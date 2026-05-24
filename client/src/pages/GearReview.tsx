/* ============================================================
   Gear Review — Midnight Zoo
   ============================================================
   COMING SOON MODE — placeholder page.

   The previous Manus-era gear review layout was intentionally
   removed; the format is being reworked. Prior code remains in
   git history if ever needed. Build the new format here when
   ready.
   ============================================================ */

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { HERO_MILKYWAY } from "@/lib/assets";
import { Clock, Star } from "lucide-react";
import { Link } from "wouter";

export default function GearReview() {
  return (
    <div className="min-h-screen" style={{ background: "oklch(0.10 0.025 240)" }}>
      <Navigation />

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
          style={{ background: "oklch(0.07 0.015 240 / 0.82)" }}
        />

        <div className="relative z-10 text-center max-w-2xl mx-auto px-6">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Star size={14} style={{ color: "oklch(0.72 0.12 75)" }} />
            <Star size={20} style={{ color: "oklch(0.72 0.12 75)" }} />
            <Star size={14} style={{ color: "oklch(0.72 0.12 75)" }} />
          </div>

          <p className="nav-label mb-4" style={{ color: "oklch(0.72 0.12 75)" }}>
            Gear Review
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
            Honest, long-term reviews of the equipment behind the images here:
            cameras, mounts, optics, and filters tested over real imaging seasons,
            not unboxing impressions. A reworked review format is on the way.
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
