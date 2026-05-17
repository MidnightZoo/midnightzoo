/* ============================================================
   Starfront Gallery — Coming Soon
   Dark site imaging gallery — launching soon
   Cinematic Observatory design — Gilda Display headings, Figtree body
   ============================================================ */

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { HERO_MILKYWAY } from "@/lib/assets";
import { Clock, Star } from "lucide-react";
import { Link } from "wouter";

export default function StarfrontGallery() {
  return (
    <div className="min-h-screen" style={{ background: "oklch(0.10 0.025 240)" }}>
      <Navigation />

      {/* Full-bleed hero with coming soon overlay */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background — real Milky Way photo */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${HERO_MILKYWAY})`,
            backgroundPosition: "center 20%",
          }}
        />
        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "oklch(0.07 0.015 240 / 0.82)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 text-center max-w-2xl mx-auto px-6">
          {/* Icon cluster */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <Star size={14} style={{ color: "oklch(0.72 0.12 75)" }} />
            <Star size={20} style={{ color: "oklch(0.72 0.12 75)" }} />
            <Star size={14} style={{ color: "oklch(0.72 0.12 75)" }} />
          </div>

          <p
            className="nav-label mb-4"
            style={{ color: "oklch(0.72 0.12 75)" }}
          >
            Starfront Gallery
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
            The Starfront Gallery is dedicated to images captured from dark sites — away from city lights, under skies where the Milky Way casts shadows. This collection is being curated and will launch soon.
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
