/* ============================================================
   CartContext - Shopify cart state, persisted in localStorage
   ============================================================ */

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import {
  addLineToCart,
  createCart,
  getCart,
  isShopifyConfigured,
  removeLineFromCart,
  type ShopifyCart,
} from "@/lib/shopify";

const CART_ID_STORAGE_KEY = "midnightzoo.cart_id";

interface CartContextValue {
  cart: ShopifyCart | null;
  loading: boolean;
  /** Add a Shopify variant ID to the cart. Returns the updated cart. */
  addItem: (variantId: string, quantity?: number) => Promise<ShopifyCart | null>;
  /** Remove a single line from the cart. */
  removeItem: (lineId: string) => Promise<void>;
  /** Whether Shopify env vars are present. False means fall back to "coming soon" UX. */
  shopifyEnabled: boolean;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<ShopifyCart | null>(null);
  const [loading, setLoading] = useState(false);
  const shopifyEnabled = isShopifyConfigured();

  // Restore cart from localStorage on mount
  useEffect(() => {
    if (!shopifyEnabled) return;
    const storedId = localStorage.getItem(CART_ID_STORAGE_KEY);
    if (!storedId) return;

    let cancelled = false;
    setLoading(true);
    getCart(storedId)
      .then((c) => {
        if (cancelled) return;
        if (c) {
          setCart(c);
        } else {
          // Cart expired or was completed - clear it
          localStorage.removeItem(CART_ID_STORAGE_KEY);
        }
      })
      .catch((err) => {
        console.error("Cart restore failed:", err);
        localStorage.removeItem(CART_ID_STORAGE_KEY);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [shopifyEnabled]);

  const addItem = useCallback(
    async (variantId: string, quantity = 1): Promise<ShopifyCart | null> => {
      if (!shopifyEnabled) return null;
      setLoading(true);
      try {
        let updated: ShopifyCart;
        if (cart) {
          updated = await addLineToCart(cart.id, variantId, quantity);
        } else {
          updated = await createCart(variantId, quantity);
          localStorage.setItem(CART_ID_STORAGE_KEY, updated.id);
        }
        setCart(updated);
        return updated;
      } finally {
        setLoading(false);
      }
    },
    [cart, shopifyEnabled],
  );

  const removeItem = useCallback(
    async (lineId: string) => {
      if (!cart || !shopifyEnabled) return;
      setLoading(true);
      try {
        const updated = await removeLineFromCart(cart.id, lineId);
        setCart(updated);
      } finally {
        setLoading(false);
      }
    },
    [cart, shopifyEnabled],
  );

  return (
    <CartContext.Provider value={{ cart, loading, addItem, removeItem, shopifyEnabled }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within CartProvider");
  }
  return ctx;
}
