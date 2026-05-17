# Midnight Zoo

Astrophotography portfolio + store for midnightzoo.com. React 19 + Vite + Tailwind 4. Static SPA - no backend. Shopify Storefront API handles products, cart, and checkout.

## Repository layout

```
.
├── client/
│   ├── public/
│   │   ├── images/         ← drop your astrophoto .webp files here
│   │   ├── _redirects      ← Cloudflare Pages SPA fallback
│   │   └── _headers        ← Cloudflare Pages cache headers
│   └── src/
│       ├── components/     ← shadcn/ui + custom components
│       ├── contexts/
│       │   ├── CartContext.tsx    ← Shopify cart state
│       │   └── ThemeContext.tsx
│       ├── lib/
│       │   ├── assets.ts          ← image URL constants
│       │   ├── shopify.ts         ← Storefront API client
│       │   └── utils.ts
│       └── pages/          ← all routes (Home, Store, galleries, etc.)
├── .env.example            ← copy to .env for local dev
├── package.json
└── vite.config.ts
```

## Local development

```bash
# Install deps (npm, pnpm, or yarn - your call)
npm install

# Start dev server on http://localhost:3000
npm run dev

# Type-check
npm run check

# Production build (outputs to ./dist)
npm run build

# Preview the production build locally
npm run preview
```

The site renders fine without Shopify env vars - it falls back to a hardcoded "preview" product catalog and shows "Store coming soon" toasts on Add to Cart. So you can deploy right away and turn on Shopify whenever.

## Deploying to Cloudflare Pages

### One-time setup

1. **Push the repo to GitHub** (or GitLab). Cloudflare Pages pulls from there.
2. Go to **Cloudflare dashboard -> Workers & Pages -> Create application -> Pages -> Connect to Git**.
3. Pick the repo. On the build settings page:
   - **Framework preset**: None (or "Vite" if it appears)
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: leave blank
   - **Node version**: 20 (set as an env var: `NODE_VERSION=20`)
4. **Environment variables** (you can add these now or later):
   - `VITE_SHOPIFY_STORE_DOMAIN` - e.g. `midnightzoo.myshopify.com`
   - `VITE_SHOPIFY_STOREFRONT_TOKEN` - from Shopify admin (see below)
   - `NODE_VERSION` - `20`
5. Click **Save and Deploy**. First build takes ~2 minutes.

After the first deploy succeeds, every `git push` triggers a new build automatically. Preview URLs are generated for pull requests.

### Custom domain (midnightzoo.com)

Two options:

**Option A: Keep DNS at GoDaddy.** In Cloudflare Pages -> your project -> Custom domains, add `midnightzoo.com` and `www.midnightzoo.com`. Cloudflare will give you CNAME records to add at GoDaddy. SSL is automatic.

**Option B: Move DNS to Cloudflare** (slightly better performance, easier management). In Cloudflare dashboard -> Add a site -> enter `midnightzoo.com`. Cloudflare scans your existing GoDaddy DNS, then gives you two Cloudflare nameservers. Update those in GoDaddy. Once nameservers propagate (usually under an hour), add the custom domain in Pages and it just works.

Option B is what I'd do. You're at Cloudflare anyway, no reason to keep DNS scattered.

## Shopify setup (Buy Buttons quick start vs Storefront API)

You have two paths. The code in this repo is wired for the Storefront API (path 2). If you want to ship faster, do path 1 first - it doesn't conflict with path 2, you can swap later.

### Path 1: Buy Buttons (fast, ~1 day)

Use this if you want to be selling within a week and don't mind the checkout being on a Shopify overlay.

1. Sign up for **Shopify Basic** ($39/month, or $29 if billed annually).
2. **Create products** in Shopify admin: title, description, photo, price, variants (sizes, finishes, etc.).
3. Install fulfillment apps:
   - **WHCC for Shopify** (or **Prodigi**) - fine art prints
   - **Printful** - apparel
   - **Printify** - mugs, stickers, home goods
   Connect each one and link your products to their catalogs.
4. Activate the **Buy Button** sales channel in Shopify admin.
5. For each product, click "Create a Buy Button" -> "Product" -> customize colors to match Midnight Zoo gold/dark theme -> copy the embed snippet.
6. Either:
   - Replace `Store.tsx` entirely with a page of Buy Button embeds, OR
   - Keep `Store.tsx` and replace the `handleAddToCart` function to load the Buy Button SDK and trigger its `addToCart`.

I'd suggest doing this on the live site, hardcoded, then migrating to path 2 later. Don't over-engineer the migration phase.

### Path 2: Storefront API (this codebase, ~2 weeks)

Use this when you're ready for a fully unified UX.

1. **Sign up for Shopify Basic** if you haven't.
2. **Create products** in Shopify admin. Add these to product tags so the React UI categorizes them:
   - `Digital Prints`, `Merch`, or `Gear` (used as the category)
   - `fulfillment:WHCC` (or `fulfillment:Printful`, etc.) - shown as the partner badge
   - `badge:Best Seller` (or `badge:New`, `badge:Popular`) - shown as the colored corner badge
3. **Create a Storefront API access token**:
   - Shopify admin -> Settings -> Apps and sales channels -> Develop apps
   - Click "Allow custom app development" if it's not enabled yet
   - Create app -> name it "Midnight Zoo Web" -> Configure Storefront API scopes
   - Enable: `unauthenticated_read_product_listings`, `unauthenticated_read_product_inventory`, `unauthenticated_write_checkouts`, `unauthenticated_read_checkouts`
   - Install the app -> copy the **Storefront API access token**
4. **Add env vars in Cloudflare Pages** (Settings -> Environment variables):
   - `VITE_SHOPIFY_STORE_DOMAIN` = `your-store.myshopify.com`
   - `VITE_SHOPIFY_STOREFRONT_TOKEN` = the token from step 3
5. Trigger a redeploy (push a commit, or Deploy -> Retry deployment).

The Store page will switch from preview mode to live Shopify mode automatically once both env vars are set.

### What about the Shopify admin domain vs your storefront domain?

- `midnightzoo.com` -> Cloudflare Pages (this React app)
- `midnightzoo.myshopify.com` -> Shopify admin + checkout pages
- During checkout, users get redirected from your site to `*.myshopify.com` for payment, then back. You can later set up `shop.midnightzoo.com` as the Shopify-hosted checkout domain if you want a unified-feeling URL.

## Image migration

Manus served your astrophoto images from `/manus-storage/...` paths that only exist inside Manus's environment. You need to pull the original files out of Manus and drop them into `client/public/images/`.

See `client/public/images/README.md` for the exact filename mapping.

Once added, the build automatically picks them up - Vite copies everything in `client/public/` to the build output root, so they end up served at `/images/<name>.webp`.

If you want a CDN tier later (faster for international visitors, cheaper at scale), move the images to Cloudflare R2 and replace the paths in `client/src/lib/assets.ts` with the R2 public URLs. No other code changes needed.

## Things I removed during the Manus -> static migration

For your reference - this is what was cleaned up:

- `server/index.ts` and the Express dependency. The "server" was just static file serving with SPA fallback, which Cloudflare Pages does natively.
- `vite-plugin-manus-runtime` and `@builder.io/vite-plugin-jsx-loc` (Manus dev tooling).
- The `vitePluginManusDebugCollector` and `vitePluginStorageProxy` blocks in `vite.config.ts`.
- `client/public/__manus__/debug-collector.js` (browser-side debug logger).
- `patches/wouter@3.7.1.patch` (Manus's route-discovery instrumentation).
- `client/src/components/ManusDialog.tsx` (unused Manus login dialog).
- `client/src/const.ts` and `shared/const.ts` (unused Manus OAuth scaffolding).
- `axios` (replaced with native `fetch`).
- `esbuild`, `tsx`, `vitest` (no server build, no test setup yet).
- `packageManager` field locking you to pnpm 10.4.1 (use whatever package manager you want).

## Roadmap notes (for future me)

- **Newsletter signup**: the "Get Notified" button currently fires a toast. Wire it to ConvertKit, Beehiiv, or Cloudflare Workers + Mailchimp.
- **Image optimization**: consider using `@vitejs/plugin-image-optimizer` or moving to R2 + Cloudflare Image Resizing for responsive image sets.
- **SEO**: the SPA pattern means most pages have the same `<head>`. If Google indexing matters for galleries, look at `react-helmet-async` or migrating to a static-rendered framework (Astro, Next.js static export) later.
- **Cart drawer**: right now Add-to-Cart shows a toast with a "Checkout" button. A persistent drawer (vaul is already installed for this) would be a small upgrade.
