/* ============================================================
   Home Page — Midnight Zoo Cinematic Observatory Design
   Full-bleed hero, mission statement, news/updates, featured galleries
   Deep navy + gold palette, Gilda Display headings
   Only user's real photos — no AI-generated images
   ============================================================ */

import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { ArrowRight, Camera, BookOpen, ShoppingBag, Youtube, Telescope } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  HERO_MILKYWAY,
  ANDROMEDA_M31,
  CYGNUS_LOOP,
  ORION_COMPLEX,
  ROSETTE_NEBULA,
  PLEIADES_M45,
  SEESTAR_M51_WHIRLPOOL,
} from "@/lib/assets";

const newsItems = [
  {
    date: "April 2026",
    category: "New Image",
    title: "M45 — The Pleiades from Kalamazoo",
    excerpt: "The iconic Seven Sisters captured under Bortle 7 skies. Reflection nebulosity and dust lanes revealed through careful processing.",
    href: "/kalamazoo-gallery",
    image: PLEIADES_M45,
  },
  {
    date: "April 2026",
    category: "New Image",
    title: "Cygnus Loop — 28 Hours from Kalamazoo",
    excerpt: "The Veil Nebula complex captured under Bortle 7 skies with a dedicated SHO narrowband setup. Nearly 28 hours of integration reveals intricate filamentary structure.",
    href: "/kalamazoo-gallery",
    image: CYGNUS_LOOP,
  },
  {
    date: "March 2026",
    category: "Gallery Update",
    title: "Andromeda Galaxy — 30+ Hours LRGB+Ha",
    excerpt: "M31 imaged from Kalamazoo with LRGBHa filters. Over 30 hours of integration reveals dust lanes, bright core, and subtle star-forming regions.",
    href: "/kalamazoo-gallery",
    image: ANDROMEDA_M31,
  },
];

const sections = [
  {
    icon: Camera,
    title: "Kalamazoo Gallery",
    description: "What's possible under Bortle 7 urban skies. No excuses, no dark site escapes — just discipline and technique.",
    href: "/kalamazoo-gallery",
    image: ANDROMEDA_M31,
  },
  {
    icon: Telescope,
    title: "Seestar Gallery",
    description: "What an inexpensive smart telescope can do. The Seestar S50 proves dark skies aren't required for stunning results.",
    href: "/seestar-gallery",
    image: SEESTAR_M51_WHIRLPOOL,
  },
  {
    icon: BookOpen,
    title: "Tutorials",
    description: "Technical guides on imaging, processing, and equipment. Built from real experience under real conditions.",
    href: "/tutorials",
    image: ORION_COMPLEX,
  },
  {
    icon: ShoppingBag,
    title: "Store",
    description: "Digital prints, merchandise, and branded gear. Support the mission and bring the night sky into your home.",
    href: "/store",
    image: CYGNUS_LOOP,
  },
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

function RevealSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className="reveal"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s ease-out ${delay}ms, transform 0.7s ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "oklch(0.10 0.025 240)" }}>
      <Navigation />

      {/* ── HERO ── */}
      <section className="relative h-screen min-h-[600px] flex items-end overflow-hidden">
        {/* Background image — user's real Milky Way photo */}
        <div
          className="absolute inset-0 bg-cover"
          style={{
            backgroundImage: `url(${HERO_MILKYWAY})`,
            backgroundPosition: "center 20%",
          }}
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, oklch(0.07 0.01 240) 0%, oklch(0.07 0.01 240 / 0.5) 40%, transparent 70%)",
          }}
        />

        {/* Hero content */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-20 w-full">
          <div className="max-w-2xl">
            <p
              className="nav-label mb-3"
              style={{ color: "oklch(0.72 0.12 75)" }}
            >
              Midnight Zoo™
            </p>
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-none mb-4"
              style={{
                fontFamily: "'Gilda Display', Georgia, serif",
                color: "oklch(0.97 0.005 240)",
                textShadow: "0 2px 20px oklch(0 0 0 / 0.5)",
              }}
            >
              The Milky Way Rises
            </h1>
            <p
              className="text-lg mb-8"
              style={{
                color: "oklch(0.80 0.005 240)",
                fontFamily: "'Figtree', system-ui, sans-serif",
              }}
            >
              Ironwood Forest National Monument, Arizona — wide-field astrophotography from dark sites
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/kalamazoo-gallery">
                <button className="btn-gold">Explore Gallery</button>
              </Link>
              <Link href="/about">
                <button className="btn-ghost-gold">Our Story</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION STATEMENT ── */}
      <section className="py-20" style={{ background: "oklch(0.12 0.03 240)" }}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex items-center justify-center gap-4 mb-8">
                <hr className="gold-rule flex-1" />
                <span className="nav-label" style={{ color: "oklch(0.72 0.12 75)", whiteSpace: "nowrap" }}>
                  The Mission
                </span>
                <hr className="gold-rule flex-1" />
              </div>
              <p
                className="text-xl sm:text-2xl leading-relaxed italic"
                style={{
                  fontFamily: "'Gilda Display', Georgia, serif",
                  color: "oklch(0.92 0.005 240)",
                  fontWeight: 400,
                  lineHeight: "1.85",
                  letterSpacing: "0.01em",
                }}
              >
                "Midnight Zoo brings the night sky into focus through long-form imaging, technical discipline, and a commitment to realism even under poor sky conditions. It shares unique experiences, inspiring others and helping them develop a deeper connection with the sky and what drives them to pursue it."
              </p>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── LATEST NEWS & UPDATES ── */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="nav-label mb-2" style={{ color: "oklch(0.72 0.12 75)" }}>
                  Latest
                </p>
                <h2
                  className="text-4xl font-bold"
                  style={{ fontFamily: "'Gilda Display', Georgia, serif", color: "oklch(0.93 0.005 240)" }}
                >
                  News & Updates
                </h2>
              </div>
              <Link href="/kalamazoo-gallery">
                <span
                  className="nav-label flex items-center gap-2 transition-colors duration-200"
                  style={{ color: "oklch(0.72 0.12 75)" }}
                >
                  View All <ArrowRight size={14} />
                </span>
              </Link>
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsItems.map((item, i) => (
              <RevealSection key={item.title} delay={i * 100}>
                <Link href={item.href}>
                  <article
                    className="group h-full flex flex-col overflow-hidden transition-transform duration-300 hover:-translate-y-1"
                    style={{
                      background: "oklch(0.13 0.03 240)",
                      border: "1px solid oklch(1 0 0 / 0.08)",
                    }}
                  >
                    <div className="overflow-hidden aspect-video">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
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
                          {item.category}
                        </span>
                        <span
                          className="nav-label"
                          style={{ color: "oklch(0.50 0.01 240)", fontSize: "0.65rem" }}
                        >
                          {item.date}
                        </span>
                      </div>
                      <h3
                        className="text-lg font-bold mb-3 leading-snug group-hover:text-amber-400 transition-colors duration-200"
                        style={{
                          fontFamily: "'Gilda Display', Georgia, serif",
                          color: "oklch(0.90 0.005 240)",
                        }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="text-sm leading-relaxed flex-1"
                        style={{
                          color: "oklch(0.62 0.01 240)",
                          fontFamily: "'Figtree', system-ui, sans-serif",
                          fontSize: "0.85rem",
                        }}
                      >
                        {item.excerpt}
                      </p>
                      <div
                        className="flex items-center gap-1.5 mt-4 nav-label transition-colors duration-200"
                        style={{ color: "oklch(0.72 0.12 75)", fontSize: "0.65rem" }}
                      >
                        Read More <ArrowRight size={11} />
                      </div>
                    </div>
                  </article>
                </Link>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPLORE SECTIONS ── */}
      <section className="py-20" style={{ background: "oklch(0.12 0.03 240)" }}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="text-center mb-14">
              <p className="nav-label mb-2" style={{ color: "oklch(0.72 0.12 75)" }}>
                Explore
              </p>
              <h2
                className="text-4xl font-bold"
                style={{ fontFamily: "'Gilda Display', Georgia, serif", color: "oklch(0.93 0.005 240)" }}
              >
                What's Inside
              </h2>
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sections.map((section, i) => {
              const Icon = section.icon;
              return (
                <RevealSection key={section.title} delay={i * 80}>
                  <Link href={section.href}>
                    <div
                      className="group relative overflow-hidden h-72 flex flex-col justify-end cursor-pointer"
                      style={{ border: "1px solid oklch(1 0 0 / 0.08)" }}
                    >
                      <img
                        src={section.image}
                        alt={section.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div
                        className="absolute inset-0"
                        style={{
                          background: "linear-gradient(to top, oklch(0.07 0.01 240 / 0.95) 0%, oklch(0.07 0.01 240 / 0.4) 50%, transparent 100%)",
                        }}
                      />
                      <div className="relative z-10 p-5">
                        <Icon
                          size={18}
                          className="mb-2"
                          style={{ color: "oklch(0.72 0.12 75)" }}
                        />
                        <h3
                          className="text-lg font-bold mb-1"
                          style={{
                            fontFamily: "'Gilda Display', Georgia, serif",
                            color: "oklch(0.95 0.005 240)",
                          }}
                        >
                          {section.title}
                        </h3>
                        <p
                          className="text-xs leading-relaxed"
                          style={{
                            color: "oklch(0.72 0.005 240)",
                            fontFamily: "'Figtree', system-ui, sans-serif",
                          }}
                        >
                          {section.description}
                        </p>
                        <div
                          className="flex items-center gap-1 mt-3 nav-label opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{ color: "oklch(0.72 0.12 75)", fontSize: "0.6rem" }}
                        >
                          Explore <ArrowRight size={10} />
                        </div>
                      </div>
                    </div>
                  </Link>
                </RevealSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── YOUTUBE CTA ── */}
      <section
        className="py-24 relative overflow-hidden"
        style={{
          background: "oklch(0.08 0.02 240)",
          borderTop: "1px solid oklch(1 0 0 / 0.06)",
        }}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 text-center lg:text-left">
                <Youtube
                  size={40}
                  className="mb-4 mx-auto lg:mx-0"
                  style={{ color: "oklch(0.72 0.12 75)" }}
                />
                <h2
                  className="text-4xl font-bold mb-4"
                  style={{ fontFamily: "'Gilda Display', Georgia, serif", color: "oklch(0.93 0.005 240)" }}
                >
                  Watch the Process
                </h2>
                <p
                  className="text-base leading-relaxed mb-8 max-w-lg"
                  style={{
                    color: "oklch(0.65 0.01 240)",
                    fontFamily: "'Figtree', system-ui, sans-serif",
                  }}
                >
                  Behind-the-scenes imaging sessions, processing walkthroughs, and in-depth gear reviews. Every video is a complete story from setup to final image.
                </p>
                <Link href="/youtube">
                  <button className="btn-gold">Visit YouTube Page</button>
                </Link>
              </div>
              <div className="flex-1 relative">
                <div
                  className="aspect-video overflow-hidden"
                  style={{ border: "1px solid oklch(0.72 0.12 75 / 0.3)" }}
                >
                  <img
                    src={ORION_COMPLEX}
                    alt="Midnight Zoo YouTube"
                    className="w-full h-full object-cover"
                  />
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ background: "oklch(0.07 0.01 240 / 0.4)" }}
                  >
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center"
                      style={{ background: "oklch(0.72 0.12 75)" }}
                    >
                      <div
                        className="w-0 h-0 ml-1"
                        style={{
                          borderTop: "10px solid transparent",
                          borderBottom: "10px solid transparent",
                          borderLeft: "18px solid oklch(0.10 0.025 240)",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
