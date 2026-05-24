/* ============================================================
   Tutorials — Midnight Zoo
   Technical guides, processing walkthroughs, equipment guides
   ============================================================
   COMING SOON MODE — the page currently renders the ComingSoon
   placeholder below. The full Tutorials page is preserved intact
   as TutorialsFull() further down; nothing was deleted.

   TO GO LIVE LATER:
     1. Remove (or rename) the ComingSoon function below.
     2. Rename "function TutorialsFull()" back to
        "export default function Tutorials()".
   That's the only change needed.
   ============================================================ */

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  HERO_MILKYWAY,
  ROSETTE_NEBULA as HERO_NEBULA,
  CYGNUS_LOOP as HERO_GALAXY,
  ORION_COMPLEX as STARFRONT_BANNER,
  ANDROMEDA_M31 as ANDROMEDA,
  CYGNUS_LOOP as CYGNUS,
} from "@/lib/assets";
import { Clock, Star, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { toast } from "sonner";

/* ── Coming Soon placeholder (currently live) ──────────────── */
export default function Tutorials() {
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
          style={{ background: "oklch(0.07 0.015 240 / 0.82)" }}
        />

        {/* Content */}
        <div className="relative z-10 text-center max-w-2xl mx-auto px-6">
          {/* Icon cluster */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <Star size={14} style={{ color: "oklch(0.72 0.12 75)" }} />
            <Star size={20} style={{ color: "oklch(0.72 0.12 75)" }} />
            <Star size={14} style={{ color: "oklch(0.72 0.12 75)" }} />
          </div>

          <p className="nav-label mb-4" style={{ color: "oklch(0.72 0.12 75)" }}>
            Tutorials
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
            In-depth processing walkthroughs, equipment guides, and technical
            tutorials built from real imaging sessions under Bortle 7 skies. The
            full library is being written and will launch here soon.
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
   FULL TUTORIALS PAGE — preserved, not currently rendered.
   To restore: delete the ComingSoon export above and rename
   "function TutorialsFull()" to "export default function Tutorials()".
   The tutorial data and styles below are kept at module scope.
   ============================================================ */

const tutorials = [
  {
    id: "tut-1",
    category: "Light Pollution",
    title: "Imaging Under Light Pollution: A Practical Guide",
    excerpt: "Narrowband filters, stacking strategies, and post-processing workflows that make Bortle 7 skies workable. Everything learned from years of urban astrophotography.",
    readTime: "25 min read",
    difficulty: "Intermediate",
    image: ANDROMEDA,
    tags: ["Light Pollution", "Narrowband", "Urban", "Filters"],
    featured: true,
  },
  {
    id: "tut-2",
    category: "Processing",
    title: "SHO Palette Processing in PixInsight",
    excerpt: "A complete walkthrough of the Hubble Palette workflow — from calibrated frames to finished image. Covers StarNet, NBRGBCombination, and the Foraxx palette technique.",
    readTime: "40 min read",
    difficulty: "Advanced",
    image: HERO_NEBULA,
    tags: ["PixInsight", "SHO", "Narrowband", "Processing"],
    featured: true,
  },
  {
    id: "tut-3",
    category: "Equipment",
    title: "Polar Alignment Without a Polar Scope",
    excerpt: "Using iPolar, SharpCap, and drift alignment to achieve sub-arcsecond polar alignment. A comparison of methods and when to use each one.",
    readTime: "15 min read",
    difficulty: "Beginner",
    image: STARFRONT_BANNER,
    tags: ["Polar Alignment", "Mount", "Setup", "Guiding"],
    featured: false,
  },
  {
    id: "tut-4",
    category: "Processing",
    title: "Galaxy Processing: Revealing Dust Lanes and HII Regions",
    excerpt: "Advanced techniques for extracting maximum detail from LRGB galaxy data. Covers luminance sharpening, color calibration, and the Ha blending technique.",
    readTime: "35 min read",
    difficulty: "Advanced",
    image: HERO_GALAXY,
    tags: ["Galaxy", "LRGB", "PixInsight", "Processing"],
    featured: false,
  },
  {
    id: "tut-5",
    category: "Imaging",
    title: "Planning a Deep-Sky Imaging Session",
    excerpt: "From target selection to weather forecasting to equipment checklist. A systematic approach to maximizing the productivity of every clear night.",
    readTime: "20 min read",
    difficulty: "Beginner",
    image: HERO_MILKYWAY,
    tags: ["Planning", "Target Selection", "Weather", "Workflow"],
    featured: false,
  },
  {
    id: "tut-6",
    category: "Processing",
    title: "Supernova Remnant Processing: The Veil Nebula",
    excerpt: "Detailed processing walkthrough for the Cygnus Loop — handling the extreme dynamic range, preserving delicate filamentary structure, and creating a scientifically accurate color palette.",
    readTime: "45 min read",
    difficulty: "Advanced",
    image: CYGNUS,
    tags: ["Nebula", "SHO", "Processing", "PixInsight"],
    featured: false,
  },
];

const difficultyColor: Record<string, string> = {
  Beginner: "oklch(0.65 0.15 145)",
  Intermediate: "oklch(0.72 0.12 75)",
  Advanced: "oklch(0.65 0.20 25)",
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function TutorialsFull() {
  const featured = tutorials.filter((t) => t.featured);
  const rest = tutorials.filter((t) => !t.featured);

  const handleTutorialClick = (title: string) => {
    toast.info("Full tutorial coming soon", {
      description: `"${title}" will be published shortly. Follow on YouTube for video versions.`,
    });
  };

  return (
    <div className="min-h-screen" style={{ background: "oklch(0.10 0.025 240)" }}>
      <Navigation />

      {/* Page Header */}
      <div
        className="relative pt-32 pb-16"
        style={{
          background: "linear-gradient(to bottom, oklch(0.08 0.02 240), oklch(0.10 0.025 240))",
          borderBottom: "1px solid oklch(1 0 0 / 0.08)",
        }}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="nav-label mb-3" style={{ color: "oklch(0.72 0.12 75)" }}>
            Learn
          </p>
          <h1
            className="text-5xl sm:text-6xl font-bold mb-4"
            style={{ fontFamily: "'Gilda Display', Georgia, serif", color: "oklch(0.93 0.005 240)" }}
          >
            Tutorials
          </h1>
          <p
            className="text-lg max-w-2xl leading-relaxed"
            style={{ color: "oklch(0.65 0.01 240)", fontFamily: "'Figtree', system-ui, sans-serif" }}
          >
            Technical guides built from real experience under real conditions. No theory without practice — every technique here has been tested and refined through hundreds of imaging sessions.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Featured tutorials */}
        <div className="mb-16">
          <p className="nav-label mb-6" style={{ color: "oklch(0.72 0.12 75)" }}>
            Featured Guides
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {featured.map((tut) => (
              <article
                key={tut.id}
                className="group cursor-pointer overflow-hidden"
                style={{
                  background: "oklch(0.13 0.03 240)",
                  border: "1px solid oklch(1 0 0 / 0.08)",
                }}
                onClick={() => handleTutorialClick(tut.title)}
              >
                <div className="overflow-hidden aspect-video">
                  <img
                    src={tut.image}
                    alt={tut.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="nav-label px-2 py-0.5"
                      style={{
                        fontSize: "0.6rem",
                        background: "oklch(0.72 0.12 75 / 0.15)",
                        color: "oklch(0.72 0.12 75)",
                        border: "1px solid oklch(0.72 0.12 75 / 0.3)",
                      }}
                    >
                      {tut.category}
                    </span>
                    <span
                      className="nav-label"
                      style={{
                        fontSize: "0.6rem",
                        color: difficultyColor[tut.difficulty] || "oklch(0.65 0.01 240)",
                      }}
                    >
                      {tut.difficulty}
                    </span>
                  </div>
                  <h2
                    className="text-xl font-bold mb-3 group-hover:text-amber-400 transition-colors"
                    style={{ fontFamily: "'Gilda Display', Georgia, serif", color: "oklch(0.90 0.005 240)" }}
                  >
                    {tut.title}
                  </h2>
                  <p
                    className="text-sm leading-relaxed mb-4"
                    style={{
                      color: "oklch(0.62 0.01 240)",
                      fontFamily: "'Figtree', system-ui, sans-serif",
                      fontSize: "0.85rem",
                    }}
                  >
                    {tut.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <Clock size={11} style={{ color: "oklch(0.50 0.01 240)" }} />
                      <span className="nav-label" style={{ color: "oklch(0.50 0.01 240)", fontSize: "0.6rem" }}>
                        {tut.readTime}
                      </span>
                    </div>
                    <span
                      className="nav-label flex items-center gap-1"
                      style={{ color: "oklch(0.72 0.12 75)", fontSize: "0.65rem" }}
                    >
                      Read Guide <ChevronRight size={11} />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <hr className="gold-rule mb-12" />

        {/* All tutorials list */}
        <div>
          <p className="nav-label mb-6" style={{ color: "oklch(0.72 0.12 75)" }}>
            All Tutorials
          </p>
          <div className="space-y-4">
            {rest.map((tut) => (
              <article
                key={tut.id}
                className="group cursor-pointer flex gap-5 p-4 transition-colors duration-200"
                style={{
                  background: "oklch(0.13 0.03 240)",
                  border: "1px solid oklch(1 0 0 / 0.08)",
                }}
                onClick={() => handleTutorialClick(tut.title)}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "oklch(0.72 0.12 75 / 0.3)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "oklch(1 0 0 / 0.08)")}
              >
                <div className="w-24 h-16 flex-shrink-0 overflow-hidden">
                  <img
                    src={tut.image}
                    alt={tut.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span
                      className="nav-label"
                      style={{ color: "oklch(0.72 0.12 75)", fontSize: "0.6rem" }}
                    >
                      {tut.category}
                    </span>
                    <span style={{ color: "oklch(0.30 0.01 240)" }}>·</span>
                    <span
                      className="nav-label"
                      style={{
                        fontSize: "0.6rem",
                        color: difficultyColor[tut.difficulty] || "oklch(0.65 0.01 240)",
                      }}
                    >
                      {tut.difficulty}
                    </span>
                    <span style={{ color: "oklch(0.30 0.01 240)" }}>·</span>
                    <span className="nav-label" style={{ color: "oklch(0.45 0.01 240)", fontSize: "0.6rem" }}>
                      {tut.readTime}
                    </span>
                  </div>
                  <h3
                    className="font-bold text-base group-hover:text-amber-400 transition-colors"
                    style={{ fontFamily: "'Gilda Display', Georgia, serif", color: "oklch(0.88 0.005 240)" }}
                  >
                    {tut.title}
                  </h3>
                  <p
                    className="text-xs mt-1 line-clamp-2"
                    style={{
                      color: "oklch(0.58 0.01 240)",
                      fontFamily: "'Figtree', system-ui, sans-serif",
                    }}
                  >
                    {tut.excerpt}
                  </p>
                </div>
                <div className="flex items-center flex-shrink-0">
                  <ChevronRight size={16} style={{ color: "oklch(0.45 0.01 240)" }} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
