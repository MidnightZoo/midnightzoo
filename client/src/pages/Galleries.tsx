/* ============================================================
   Galleries — Landing page
   Grid of the four galleries; placeholder cards until real
   hero images and copy are added.
   ============================================================ */

import { Link } from "wouter";
import { ArrowRight, Camera, MapPin, Telescope, Building2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LazyImage from "@/components/LazyImage";
import {
  ANDROMEDA_M31,
  HERO_MILKYWAY,
  MILKYWAY_IRONWOOD,
  SEESTAR_M51_WHIRLPOOL,
} from "@/lib/assets";

const galleries = [
  {
    href: "/starfront-gallery",
    title: "Starfront Gallery",
    description:
      "The flagship collection — long-integration deep-sky work, presented at full editorial scale.",
    icon: Telescope,
    image: HERO_MILKYWAY,
  },
  {
    href: "/kalamazoo-gallery",
    title: "Kalamazoo Gallery",
    description:
      "What's possible under Bortle 7 urban skies. No excuses, no dark site escapes — just discipline and technique.",
    icon: Building2,
    image: ANDROMEDA_M31,
  },
  {
    href: "/travel-gallery",
    title: "Travel Gallery",
    description:
      "Images from dedicated dark site expeditions, where the city skies aren't enough.",
    icon: MapPin,
    image: MILKYWAY_IRONWOOD,
  },
  {
    href: "/seestar-gallery",
    title: "Seestar Gallery",
    description:
      "What an inexpensive smart telescope can do. Shot with a ZWO Seestar — proof that dark skies aren't required for stunning results.",
    icon: Camera,
    image: SEESTAR_M51_WHIRLPOOL,
  },
];

export default function Galleries() {
  return (
    <div className="min-h-screen" style={{ background: "oklch(0.10 0.025 240)" }}>
      <Navigation />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover"
          style={{
            backgroundImage: `url(${HERO_MILKYWAY})`,
            backgroundPosition: "center 20%",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, oklch(0.07 0.01 240) 0%, oklch(0.07 0.01 240 / 0.4) 50%, transparent 80%)",
          }}
        />
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <p className="nav-label mb-2" style={{ color: "oklch(0.72 0.12 75)" }}>
            Explore
          </p>
          <h1
            className="text-5xl sm:text-6xl font-bold mb-3"
            style={{
              fontFamily: "'Gilda Display', Georgia, serif",
              color: "oklch(0.97 0.005 240)",
              textShadow: "0 2px 20px oklch(0 0 0 / 0.5)",
            }}
          >
            Galleries
          </h1>
          <p
            className="text-base max-w-xl leading-relaxed"
            style={{
              color: "oklch(0.80 0.005 240)",
              fontFamily: "'Figtree', system-ui, sans-serif",
            }}
          >
            Four bodies of work, four different stories about the night sky and
            the constraints under which each image was made.
          </p>
        </div>
      </section>

      {/* Grid */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {galleries.map((g) => {
            const Icon = g.icon;
            return (
              <Link key={g.href} href={g.href}>
                <article
                  className="group relative overflow-hidden h-80 flex flex-col justify-end cursor-pointer"
                  style={{ border: "1px solid oklch(1 0 0 / 0.08)" }}
                >
                  <LazyImage
                    src={g.image}
                    alt={g.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, oklch(0.07 0.01 240 / 0.95) 0%, oklch(0.07 0.01 240 / 0.4) 55%, transparent 100%)",
                    }}
                  />
                  <div className="relative z-10 p-6">
                    <Icon
                      size={20}
                      className="mb-3"
                      style={{ color: "oklch(0.72 0.12 75)" }}
                    />
                    <h2
                      className="text-2xl font-bold mb-2"
                      style={{
                        fontFamily: "'Gilda Display', Georgia, serif",
                        color: "oklch(0.95 0.005 240)",
                      }}
                    >
                      {g.title}
                    </h2>
                    <p
                      className="text-sm leading-relaxed mb-3"
                      style={{
                        color: "oklch(0.75 0.005 240)",
                        fontFamily: "'Figtree', system-ui, sans-serif",
                      }}
                    >
                      {g.description}
                    </p>
                    <div
                      className="flex items-center gap-1.5 nav-label"
                      style={{
                        color: "oklch(0.72 0.12 75)",
                        fontSize: "0.65rem",
                      }}
                    >
                      View Gallery <ArrowRight size={11} />
                    </div>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
}
