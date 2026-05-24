/* ============================================================
   Online Store - Midnight Zoo
   ============================================================
   COMING SOON MODE — the page currently renders the ComingSoon
   placeholder below. The full Store component (Shopify Storefront
   API integration, cart, fallback catalog) is preserved intact as
   StoreFull() further down; nothing was deleted.

   This page will be rebuilt around the live Shopify Storefront API.
   The preserved code is the Manus-era starting point to work from.

   TO GO LIVE LATER:
     1. Remove (or rename) the ComingSoon function below.
     2. Rename "function StoreFull()" back to
        "export default function Store()".
   ============================================================ */

import { useEffect, useMemo, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ShoppingCart, Star, Package, Printer, Image as ImageIcon, Clock } from "lucide-react";
import { toast } from "sonner";
import { Link } from "wouter";

import { useCart } from "@/contexts/CartContext";
import { fetchProducts, formatMoney, type ShopifyProduct } from "@/lib/shopify";

import {
  ANDROMEDA_M31 as ANDROMEDA,
  CYGNUS_LOOP as CYGNUS,
  MILKYWAY_IRONWOOD as HERO_MILKYWAY,
  ROSETTE_NEBULA as HERO_NEBULA,
  ORION_COMPLEX as STORE_BANNER,
  PLEIADES_M45 as STARFRONT_BANNER,
} from "@/lib/assets";

/* ── Coming Soon placeholder (currently live) ──────────────── */
export default function Store() {
  return (
    <div className="min-h-screen" style={{ background: "oklch(0.10 0.025 240)" }}>
      <Navigation />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background — store banner image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${STORE_BANNER})`,
            backgroundPosition: "center 30%",
          }}
        />
        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{ background: "oklch(0.07 0.015 240 / 0.82)" }}
        />

        <div className="relative z-10 text-center max-w-2xl mx-auto px-6">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Star size={14} style={{ color: "oklch(0.72 0.12 75)" }} />
            <ShoppingCart size={20} style={{ color: "oklch(0.72 0.12 75)" }} />
            <Star size={14} style={{ color: "oklch(0.72 0.12 75)" }} />
          </div>

          <p className="nav-label mb-4" style={{ color: "oklch(0.72 0.12 75)" }}>
            Online Store
          </p>

          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            style={{
              fontFamily: "'Gilda Display', Georgia, serif",
              color: "oklch(0.97 0.005 240)",
              textShadow: "0 2px 30px oklch(0 0 0 / 0.6)",
            }}
          >
            Coming Soon
          </h1>

          <div className="flex items-center justify-center gap-3 mb-8">
            <hr style={{ flex: 1, borderColor: "oklch(0.72 0.12 75 / 0.4)", borderTopWidth: 1 }} />
            <Clock size={14} style={{ color: "oklch(0.72 0.12 75)" }} />
            <hr style={{ flex: 1, borderColor: "oklch(0.72 0.12 75 / 0.4)", borderTopWidth: 1 }} />
          </div>

          <p
            className="text-lg leading-relaxed mb-6"
            style={{
              fontFamily: "'Figtree', system-ui, sans-serif",
              color: "oklch(0.78 0.008 240)",
              lineHeight: "1.8",
            }}
          >
            Fine art prints, branded merchandise, and a custom vinyl wrap line for
            smart telescopes are on the way. The store is being built now and will
            open here soon.
          </p>

          <p
            className="text-base italic mb-10"
            style={{
              fontFamily: "'Gilda Display', Georgia, serif",
              color: "oklch(0.55 0.01 240)",
            }}
          >
            In the meantime, explore the Kalamazoo Gallery — what's possible from Bortle 7 urban skies.
          </p>

          <Link href="/kalamazoo-gallery">
            <button className="btn-gold">View Kalamazoo Gallery</button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

/* ============================================================
   FULL STORE PAGE — preserved, not currently rendered.
   Rebuild target for the live Shopify Storefront API.
   To restore: delete the ComingSoon export above and rename
   "function StoreFull()" to "export default function Store()".
   ============================================================ */

// ── Fallback product list (used when Shopify env vars are not set) ──────────
// These are NOT real products; they preview the catalog while the Shopify
// backend is being set up. The Storefront API replaces this entirely once
// VITE_SHOPIFY_* env vars are present.

type FallbackCategory = "Digital Prints" | "Merch" | "Gear";

interface FallbackProduct {
  id: string;
  name: string;
  category: FallbackCategory;
  price: string;
  image: string;
  fulfillment: string;
  description: string;
  badge?: string;
  rating?: number;
}

const fallbackProducts: FallbackProduct[] = [
  {
    id: "dp-1",
    name: "Andromeda Galaxy - Fine Art Print",
    category: "Digital Prints",
    price: "From $49",
    image: ANDROMEDA,
    fulfillment: "WHCC",
    description:
      "Museum-quality fine art print of the Andromeda Galaxy captured from Kalamazoo. Available in multiple sizes and substrates including metallic, canvas, and archival paper.",
    badge: "Best Seller",
    rating: 4.9,
  },
  {
    id: "dp-2",
    name: "Cygnus Loop - Veil Nebula Print",
    category: "Digital Prints",
    price: "From $49",
    image: CYGNUS,
    fulfillment: "WHCC",
    description:
      "The Veil Nebula supernova remnant in stunning SHO palette. The intricate filamentary structure makes this a dramatic centerpiece for any room.",
    rating: 4.8,
  },
  {
    id: "dp-3",
    name: "Milky Way Panorama - Fine Art Print",
    category: "Digital Prints",
    price: "From $79",
    image: HERO_MILKYWAY,
    fulfillment: "WHCC",
    description:
      "Wide-format panoramic print of the Milky Way rising over a mountain observatory. Available in panoramic aspect ratios up to 60in wide.",
    badge: "New",
    rating: 5.0,
  },
  {
    id: "dp-4",
    name: "Rosette Nebula - SHO Palette Print",
    category: "Digital Prints",
    price: "From $59",
    image: HERO_NEBULA,
    fulfillment: "WHCC",
    description:
      "Vibrant SHO narrowband print with the iconic teal-and-red Hubble Palette color scheme. A conversation piece for any space enthusiast.",
    rating: 4.7,
  },
  {
    id: "merch-1",
    name: "Midnight Zoo Logo T-Shirt",
    category: "Merch",
    price: "$28",
    image: STORE_BANNER,
    fulfillment: "Printful",
    description:
      "Bella+Canvas 3001 heavyweight cotton tee with the Midnight Zoo logo. Available in multiple colors. Printed on-demand via Printful.",
    rating: 4.6,
  },
  {
    id: "merch-2",
    name: "Bortle 7 - Kalamazoo Hoodie",
    category: "Merch",
    price: "$52",
    image: STORE_BANNER,
    fulfillment: "Printful",
    description:
      "Pullover hoodie celebrating the Kalamazoo imaging project. Features the Bortle 7 designation and the Midnight Zoo tagline on the back.",
    badge: "Popular",
    rating: 4.8,
  },
  {
    id: "merch-3",
    name: "Astrophotographer Mug",
    category: "Merch",
    price: "$18",
    image: STORE_BANNER,
    fulfillment: "Printify",
    description:
      "15oz ceramic mug with the Midnight Zoo logo. Dishwasher safe. Because every imaging session starts with coffee.",
    rating: 4.5,
  },
  {
    id: "gear-1",
    name: "Seestar S50 Vinyl Skin",
    category: "Gear",
    price: "$24",
    image: STARFRONT_BANNER,
    fulfillment: "Custom",
    description:
      "Precision-cut vinyl skin/wrap for the ZWO Seestar S50 smart telescope. Custom Midnight Zoo designs, weatherproof, residue-free removal.",
    badge: "New",
    rating: 4.7,
  },
  {
    id: "gear-2",
    name: "Red Light Headlamp",
    category: "Gear",
    price: "$34",
    image: STARFRONT_BANNER,
    fulfillment: "Affiliate",
    description:
      "Astronomy-grade red LED headlamp. Preserves night vision while providing enough light to work at the telescope. Adjustable brightness with memory function.",
    rating: 4.8,
  },
];

// ── Unified product shape used by the UI regardless of source ───────────────

interface DisplayProduct {
  key: string;
  name: string;
  description: string;
  image: string;
  priceLabel: string;
  category: string;
  fulfillment?: string;
  badge?: string;
  rating?: number;
  /** Set when sourced from Shopify - this is what gets added to cart. */
  shopifyVariantId?: string;
  /** True if Shopify reports the variant is out of stock. */
  outOfStock?: boolean;
}

function shopifyToDisplay(p: ShopifyProduct): DisplayProduct {
  const firstVariant = p.variants.edges[0]?.node;
  const minPrice = p.priceRange.minVariantPrice;
  return {
    key: p.id,
    name: p.title,
    description: p.description || "",
    image: p.featuredImage?.url || STORE_BANNER,
    priceLabel: formatMoney(minPrice.amount, minPrice.currencyCode),
    category: p.tags[0] || "Shop",
    fulfillment: p.tags.find((t) => t.toLowerCase().startsWith("fulfillment:"))?.split(":")[1],
    badge: p.tags.find((t) => t.toLowerCase().startsWith("badge:"))?.split(":")[1],
    shopifyVariantId: firstVariant?.id,
    outOfStock: firstVariant ? !firstVariant.availableForSale : true,
  };
}

function fallbackToDisplay(p: FallbackProduct): DisplayProduct {
  return {
    key: p.id,
    name: p.name,
    description: p.description,
    image: p.image,
    priceLabel: p.price,
    category: p.category,
    fulfillment: p.fulfillment,
    badge: p.badge,
    rating: p.rating,
  };
}

const fulfillmentInfo = [
  {
    name: "WHCC",
    icon: ImageIcon,
    description:
      "White House Custom Colour - museum-quality fine art print lab. Archival inks, expert color management, ICC-profiled output.",
    products: "Fine Art Prints",
  },
  {
    name: "Printful",
    icon: Printer,
    description:
      "On-demand apparel. Direct-to-garment printing on Bella+Canvas 3001 and premium blanks.",
    products: "T-Shirts, Hoodies, Accessories",
  },
  {
    name: "Printify",
    icon: Package,
    description: "Print-on-demand network with global fulfillment centers. Fast shipping worldwide.",
    products: "Mugs, Stickers, Home Goods",
  },
];

// ── Component ────────────────────────────────────────────────────────────────

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function StoreFull() {
  const { addItem, cart, shopifyEnabled, loading: cartLoading } = useCart();

  const [shopifyProducts, setShopifyProducts] = useState<ShopifyProduct[] | null>(null);
  const [shopifyLoading, setShopifyLoading] = useState(false);
  const [shopifyError, setShopifyError] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  // Fetch products from Shopify when configured
  useEffect(() => {
    if (!shopifyEnabled) return;
    let cancelled = false;
    setShopifyLoading(true);
    setShopifyError(null);
    fetchProducts(48)
      .then((products) => {
        if (cancelled) return;
        setShopifyProducts(products);
      })
      .catch((err) => {
        if (cancelled) return;
        console.error("Shopify fetch failed:", err);
        setShopifyError(err instanceof Error ? err.message : String(err));
      })
      .finally(() => {
        if (!cancelled) setShopifyLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [shopifyEnabled]);

  // Derive the list to display
  const products: DisplayProduct[] = useMemo(() => {
    if (shopifyEnabled && shopifyProducts) {
      return shopifyProducts.map(shopifyToDisplay);
    }
    return fallbackProducts.map(fallbackToDisplay);
  }, [shopifyEnabled, shopifyProducts]);

  // Categories derived from data
  const categories = useMemo(() => {
    const set = new Set<string>();
    products.forEach((p) => set.add(p.category));
    return ["All", ...Array.from(set)];
  }, [products]);

  const filtered =
    activeCategory === "All" ? products : products.filter((p) => p.category === activeCategory);

  const handleAddToCart = async (product: DisplayProduct) => {
    // Shopify path
    if (shopifyEnabled && product.shopifyVariantId) {
      try {
        await addItem(product.shopifyVariantId, 1);
        toast.success("Added to cart", {
          description: product.name,
          action: cart
            ? {
                label: "Checkout",
                onClick: () => {
                  window.location.href = cart.checkoutUrl;
                },
              }
            : undefined,
        });
      } catch (err) {
        toast.error("Could not add to cart", {
          description: err instanceof Error ? err.message : String(err),
        });
      }
      return;
    }

    // Fallback path (Shopify not configured yet)
    toast.info("Store coming soon", {
      description: `"${product.name}" will be available for purchase when the store launches. Join the mailing list for updates.`,
    });
  };

  const handleCheckout = () => {
    if (cart?.checkoutUrl) {
      window.location.href = cart.checkoutUrl;
    }
  };

  return (
    <div className="min-h-screen" style={{ background: "oklch(0.10 0.025 240)" }}>
      <Navigation />

      {/* Hero Banner */}
      <div className="relative pt-20 overflow-hidden" style={{ minHeight: "320px" }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${STORE_BANNER})` }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, oklch(0.07 0.01 240 / 0.95) 0%, oklch(0.07 0.01 240 / 0.6) 60%, transparent 100%)",
          }}
        />
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <p className="nav-label mb-3" style={{ color: "oklch(0.72 0.12 75)" }}>
            Shop
          </p>
          <h1
            className="text-5xl sm:text-6xl font-bold mb-4"
            style={{
              fontFamily: "'Gilda Display', Georgia, serif",
              color: "oklch(0.97 0.005 240)",
            }}
          >
            Online Store
          </h1>
          <p
            className="text-lg max-w-xl leading-relaxed"
            style={{
              color: "oklch(0.80 0.005 240)",
              fontFamily: "'Figtree', system-ui, sans-serif",
            }}
          >
            Fine art prints, branded merchandise, and curated gear. Every purchase supports the
            mission of bringing the night sky into focus.
          </p>

          {/* Cart pill (only when Shopify is wired up and there's something in the cart) */}
          {shopifyEnabled && cart && cart.totalQuantity > 0 && (
            <button
              onClick={handleCheckout}
              disabled={cartLoading}
              className="mt-6 inline-flex items-center gap-2 px-4 py-2 nav-label transition-all duration-200"
              style={{
                background: "oklch(0.72 0.12 75)",
                color: "oklch(0.10 0.025 240)",
                fontSize: "0.7rem",
              }}
            >
              <ShoppingCart size={14} />
              {cart.totalQuantity} item{cart.totalQuantity === 1 ? "" : "s"} -{" "}
              {formatMoney(cart.cost.totalAmount.amount, cart.cost.totalAmount.currencyCode)} -
              Checkout
            </button>
          )}
        </div>
      </div>

      {/* Fulfillment partners */}
      <div
        className="py-8"
        style={{
          background: "oklch(0.12 0.03 240)",
          borderBottom: "1px solid oklch(1 0 0 / 0.08)",
        }}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span
              className="nav-label"
              style={{ color: "oklch(0.55 0.01 240)", fontSize: "0.65rem" }}
            >
              Fulfilled by:
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {fulfillmentInfo.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.name}
                  className="flex items-start gap-3 p-4"
                  style={{
                    background: "oklch(0.14 0.03 240)",
                    border: "1px solid oklch(1 0 0 / 0.08)",
                  }}
                >
                  <Icon
                    size={16}
                    style={{ color: "oklch(0.72 0.12 75)", flexShrink: 0, marginTop: 2 }}
                  />
                  <div>
                    <p
                      className="nav-label mb-0.5"
                      style={{ color: "oklch(0.85 0.005 240)", fontSize: "0.65rem" }}
                    >
                      {f.name}
                    </p>
                    <p
                      className="text-xs"
                      style={{
                        color: "oklch(0.55 0.01 240)",
                        fontFamily: "'Figtree', system-ui, sans-serif",
                        fontSize: "0.75rem",
                      }}
                    >
                      {f.products}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Store content */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Shopify status banner */}
        {shopifyEnabled && shopifyError && (
          <div
            className="mb-8 p-4 text-sm"
            style={{
              background: "oklch(0.20 0.10 30)",
              border: "1px solid oklch(0.50 0.15 30)",
              color: "oklch(0.85 0.05 30)",
              fontFamily: "'Figtree', system-ui, sans-serif",
            }}
          >
            <strong>Shopify connection issue:</strong> {shopifyError}
          </div>
        )}

        {shopifyEnabled && shopifyLoading && !shopifyProducts && (
          <div
            className="mb-8 p-4 text-sm"
            style={{
              color: "oklch(0.60 0.01 240)",
              fontFamily: "'Figtree', system-ui, sans-serif",
            }}
          >
            Loading products...
          </div>
        )}

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="nav-label px-4 py-2 transition-all duration-200"
              style={{
                fontSize: "0.65rem",
                background:
                  activeCategory === cat ? "oklch(0.72 0.12 75)" : "oklch(0.14 0.03 240)",
                color:
                  activeCategory === cat ? "oklch(0.10 0.025 240)" : "oklch(0.65 0.01 240)",
                border: `1px solid ${
                  activeCategory === cat ? "oklch(0.72 0.12 75)" : "oklch(1 0 0 / 0.10)"
                }`,
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <article
              key={product.key}
              className="group flex flex-col overflow-hidden"
              style={{
                background: "oklch(0.13 0.03 240)",
                border: "1px solid oklch(1 0 0 / 0.08)",
              }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {product.badge && (
                  <div
                    className="absolute top-3 left-3 nav-label px-2 py-1"
                    style={{
                      background: "oklch(0.72 0.12 75)",
                      color: "oklch(0.10 0.025 240)",
                      fontSize: "0.55rem",
                    }}
                  >
                    {product.badge}
                  </div>
                )}
                {product.fulfillment && (
                  <div
                    className="absolute top-3 right-3 nav-label px-2 py-1"
                    style={{
                      background: "oklch(0.10 0.025 240 / 0.85)",
                      color: "oklch(0.60 0.01 240)",
                      fontSize: "0.55rem",
                    }}
                  >
                    {product.fulfillment}
                  </div>
                )}
                {product.outOfStock && (
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ background: "oklch(0.10 0.025 240 / 0.7)" }}
                  >
                    <span
                      className="nav-label px-3 py-1.5"
                      style={{
                        background: "oklch(0.13 0.03 240)",
                        color: "oklch(0.80 0.005 240)",
                        fontSize: "0.65rem",
                        border: "1px solid oklch(1 0 0 / 0.15)",
                      }}
                    >
                      Sold Out
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-4 flex-1 flex flex-col">
                <span
                  className="nav-label mb-1"
                  style={{ color: "oklch(0.55 0.01 240)", fontSize: "0.6rem" }}
                >
                  {product.category}
                </span>
                <h3
                  className="font-bold text-sm mb-2 leading-snug"
                  style={{
                    fontFamily: "'Gilda Display', Georgia, serif",
                    color: "oklch(0.90 0.005 240)",
                  }}
                >
                  {product.name}
                </h3>
                <p
                  className="text-xs leading-relaxed flex-1 mb-3"
                  style={{
                    color: "oklch(0.58 0.01 240)",
                    fontFamily: "'Figtree', system-ui, sans-serif",
                    fontSize: "0.78rem",
                  }}
                >
                  {product.description}
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <div>
                    {product.rating && (
                      <div className="flex items-center gap-1 mb-1">
                        <Star
                          size={10}
                          fill="oklch(0.72 0.12 75)"
                          style={{ color: "oklch(0.72 0.12 75)" }}
                        />
                        <span
                          className="nav-label"
                          style={{ color: "oklch(0.65 0.01 240)", fontSize: "0.6rem" }}
                        >
                          {product.rating}
                        </span>
                      </div>
                    )}
                    <p
                      className="font-bold"
                      style={{
                        color: "oklch(0.72 0.12 75)",
                        fontFamily: "'Gilda Display', Georgia, serif",
                        fontSize: "1rem",
                      }}
                    >
                      {product.priceLabel}
                    </p>
                  </div>
                  <button
                    onClick={() => handleAddToCart(product)}
                    disabled={product.outOfStock || cartLoading}
                    className="flex items-center gap-1.5 px-3 py-2 nav-label transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
                    style={{
                      background: "oklch(0.72 0.12 75 / 0.15)",
                      color: "oklch(0.72 0.12 75)",
                      border: "1px solid oklch(0.72 0.12 75 / 0.3)",
                      fontSize: "0.6rem",
                    }}
                    onMouseEnter={(e) => {
                      if (product.outOfStock || cartLoading) return;
                      e.currentTarget.style.background = "oklch(0.72 0.12 75)";
                      e.currentTarget.style.color = "oklch(0.10 0.025 240)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "oklch(0.72 0.12 75 / 0.15)";
                      e.currentTarget.style.color = "oklch(0.72 0.12 75)";
                    }}
                  >
                    <ShoppingCart size={12} />
                    Add to Cart
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Store launch notice (only when Shopify isn't wired up yet) */}
        {!shopifyEnabled && (
          <div
            className="mt-16 p-8 text-center"
            style={{
              background: "oklch(0.13 0.03 240)",
              border: "1px solid oklch(0.72 0.12 75 / 0.25)",
            }}
          >
            <h3
              className="text-2xl font-bold mb-3"
              style={{
                fontFamily: "'Gilda Display', Georgia, serif",
                color: "oklch(0.93 0.005 240)",
              }}
            >
              Store Launching Soon
            </h3>
            <p
              className="text-sm leading-relaxed max-w-lg mx-auto mb-6"
              style={{
                color: "oklch(0.62 0.01 240)",
                fontFamily: "'Figtree', system-ui, sans-serif",
              }}
            >
              The Midnight Zoo store is currently in development. Products shown above represent
              the planned catalog. Follow on social media or subscribe to the mailing list to be
              notified when the store goes live.
            </p>
            <button
              className="btn-gold"
              onClick={() =>
                toast.info("Mailing list coming soon - follow on social media for updates!")
              }
            >
              Get Notified
            </button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
