import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";

// ============================================================
// Midnight Zoo - Vite config
// Static SPA build. Output goes to /dist (root of repo) so it
// drops straight into Cloudflare Pages / Vercel / Netlify.
// ============================================================

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
    },
  },
  envDir: path.resolve(import.meta.dirname),
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
    sourcemap: false,
  },
  server: {
    port: 3000,
    host: true,
  },
});
