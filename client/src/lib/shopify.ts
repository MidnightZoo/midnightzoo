/* ============================================================
   Shopify Storefront API client
   Pure fetch, no SDK. GraphQL only.

   Required env vars (set in Cloudflare Pages dashboard or .env):
     VITE_SHOPIFY_STORE_DOMAIN   e.g. midnightzoo.myshopify.com
     VITE_SHOPIFY_STOREFRONT_TOKEN   public Storefront access token

   isShopifyConfigured() lets the UI gracefully degrade to the
   hardcoded product list if these are not set yet. That way the
   site builds and deploys before you finish Shopify setup.

   API version: pinned in SHOPIFY_API_VERSION below. Shopify
   maintains each version for ~12 months. Bump when you have time.
   ============================================================ */

const SHOPIFY_API_VERSION = "2025-01";

const STORE_DOMAIN = import.meta.env.VITE_SHOPIFY_STORE_DOMAIN as string | undefined;
const STOREFRONT_TOKEN = import.meta.env.VITE_SHOPIFY_STOREFRONT_TOKEN as string | undefined;

export function isShopifyConfigured(): boolean {
  return Boolean(STORE_DOMAIN && STOREFRONT_TOKEN);
}

interface GraphQLResponse<T> {
  data?: T;
  errors?: Array<{ message: string; extensions?: unknown }>;
}

async function storefrontFetch<T>(
  query: string,
  variables: Record<string, unknown> = {},
): Promise<T> {
  if (!isShopifyConfigured()) {
    throw new Error("Shopify is not configured. Set VITE_SHOPIFY_STORE_DOMAIN and VITE_SHOPIFY_STOREFRONT_TOKEN.");
  }

  const url = `https://${STORE_DOMAIN}/api/${SHOPIFY_API_VERSION}/graphql.json`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": STOREFRONT_TOKEN!,
    },
    body: JSON.stringify({ query, variables }),
  });

  if (!res.ok) {
    throw new Error(`Shopify HTTP ${res.status}: ${await res.text()}`);
  }

  const json = (await res.json()) as GraphQLResponse<T>;
  if (json.errors?.length) {
    throw new Error(`Shopify GraphQL: ${json.errors.map((e) => e.message).join(", ")}`);
  }
  if (!json.data) {
    throw new Error("Shopify GraphQL: empty response");
  }
  return json.data;
}

// ── Types ────────────────────────────────────────────────────────────────────

export interface ShopifyProduct {
  id: string;
  handle: string;
  title: string;
  description: string;
  featuredImage: { url: string; altText: string | null } | null;
  priceRange: {
    minVariantPrice: { amount: string; currencyCode: string };
  };
  variants: {
    edges: Array<{
      node: {
        id: string;
        availableForSale: boolean;
        price: { amount: string; currencyCode: string };
      };
    }>;
  };
  tags: string[];
}

export interface ShopifyCart {
  id: string;
  checkoutUrl: string;
  totalQuantity: number;
  cost: {
    totalAmount: { amount: string; currencyCode: string };
  };
  lines: {
    edges: Array<{
      node: {
        id: string;
        quantity: number;
        merchandise: {
          id: string;
          title: string;
          product: { title: string; featuredImage: { url: string } | null };
        };
        cost: { totalAmount: { amount: string; currencyCode: string } };
      };
    }>;
  };
}

// ── Queries ──────────────────────────────────────────────────────────────────

const PRODUCTS_QUERY = `
  query Products($first: Int!) {
    products(first: $first, sortKey: BEST_SELLING) {
      edges {
        node {
          id
          handle
          title
          description
          tags
          featuredImage { url altText }
          priceRange {
            minVariantPrice { amount currencyCode }
          }
          variants(first: 1) {
            edges {
              node {
                id
                availableForSale
                price { amount currencyCode }
              }
            }
          }
        }
      }
    }
  }
`;

const CART_FRAGMENT = `
  fragment CartFields on Cart {
    id
    checkoutUrl
    totalQuantity
    cost { totalAmount { amount currencyCode } }
    lines(first: 50) {
      edges {
        node {
          id
          quantity
          merchandise {
            ... on ProductVariant {
              id
              title
              product {
                title
                featuredImage { url }
              }
            }
          }
          cost { totalAmount { amount currencyCode } }
        }
      }
    }
  }
`;

const CART_CREATE_MUTATION = `
  ${CART_FRAGMENT}
  mutation CartCreate($lines: [CartLineInput!]) {
    cartCreate(input: { lines: $lines }) {
      cart { ...CartFields }
      userErrors { field message }
    }
  }
`;

const CART_LINES_ADD_MUTATION = `
  ${CART_FRAGMENT}
  mutation CartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart { ...CartFields }
      userErrors { field message }
    }
  }
`;

const CART_LINES_REMOVE_MUTATION = `
  ${CART_FRAGMENT}
  mutation CartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
      cart { ...CartFields }
      userErrors { field message }
    }
  }
`;

const CART_QUERY = `
  ${CART_FRAGMENT}
  query Cart($id: ID!) {
    cart(id: $id) { ...CartFields }
  }
`;

// ── Public API ───────────────────────────────────────────────────────────────

export async function fetchProducts(first = 24): Promise<ShopifyProduct[]> {
  const data = await storefrontFetch<{
    products: { edges: Array<{ node: ShopifyProduct }> };
  }>(PRODUCTS_QUERY, { first });
  return data.products.edges.map((e) => e.node);
}

export async function createCart(variantId: string, quantity = 1): Promise<ShopifyCart> {
  const data = await storefrontFetch<{
    cartCreate: { cart: ShopifyCart; userErrors: Array<{ message: string }> };
  }>(CART_CREATE_MUTATION, {
    lines: [{ merchandiseId: variantId, quantity }],
  });
  if (data.cartCreate.userErrors.length) {
    throw new Error(data.cartCreate.userErrors.map((e) => e.message).join(", "));
  }
  return data.cartCreate.cart;
}

export async function addLineToCart(
  cartId: string,
  variantId: string,
  quantity = 1,
): Promise<ShopifyCart> {
  const data = await storefrontFetch<{
    cartLinesAdd: { cart: ShopifyCart; userErrors: Array<{ message: string }> };
  }>(CART_LINES_ADD_MUTATION, {
    cartId,
    lines: [{ merchandiseId: variantId, quantity }],
  });
  if (data.cartLinesAdd.userErrors.length) {
    throw new Error(data.cartLinesAdd.userErrors.map((e) => e.message).join(", "));
  }
  return data.cartLinesAdd.cart;
}

export async function removeLineFromCart(cartId: string, lineId: string): Promise<ShopifyCart> {
  const data = await storefrontFetch<{
    cartLinesRemove: { cart: ShopifyCart; userErrors: Array<{ message: string }> };
  }>(CART_LINES_REMOVE_MUTATION, {
    cartId,
    lineIds: [lineId],
  });
  if (data.cartLinesRemove.userErrors.length) {
    throw new Error(data.cartLinesRemove.userErrors.map((e) => e.message).join(", "));
  }
  return data.cartLinesRemove.cart;
}

export async function getCart(cartId: string): Promise<ShopifyCart | null> {
  const data = await storefrontFetch<{ cart: ShopifyCart | null }>(CART_QUERY, {
    id: cartId,
  });
  return data.cart;
}

export function formatMoney(amount: string, currencyCode: string): string {
  const n = Number.parseFloat(amount);
  if (Number.isNaN(n)) return `${amount} ${currencyCode}`;
  try {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currencyCode,
    }).format(n);
  } catch {
    return `$${n.toFixed(2)}`;
  }
}
