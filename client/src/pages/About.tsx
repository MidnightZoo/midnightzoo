/* ============================================================
   About — Midnight Zoo
   Mission, story, philosophy, equipment list
   ============================================================ */

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { HERO_MILKYWAY, ANDROMEDA_M31 as ANDROMEDA, ORION_COMPLEX as STARFRONT_BANNER } from "@/lib/assets";
import { Link } from "wouter";
import { Youtube, Instagram, Facebook, Twitter } from "lucide-react";





const equipment = [
  {
    category: "Telescopes",
    items: [
      "Takahashi FSQ-106ED (530mm f/5)",
      "Celestron EdgeHD 11\" (2800mm f/10)",
      "Celestron EdgeHD 9.25\" (2350mm f/10)",
      "Sigma 14mm f/1.8 Art (wide-field)",
    ],
  },
  {
    category: "Cameras",
    items: [
      "ZWO ASI2600MM Pro (monochrome)",
      "ZWO ASI2600MC Pro (color)",
      "Sony a7R IV (wide-field/landscape)",
      "ZWO ASI174MM Mini (guide camera)",
    ],
  },
  {
    category: "Mounts",
    items: [
      "iOptron CEM70 (primary)",
      "iOptron SkyGuider Pro (travel)",
      "Celestron CGX-L (backup)",
    ],
  },
  {
    category: "Filters",
    items: [
      "Chroma 3nm Ha, OIII, SII (narrowband)",
      "Baader LRGB (broadband)",
      "Astronomik L-2 (luminance)",
      "Optolong L-eXtreme (dual-band)",
    ],
  },
  {
    category: "Software",
    items: [
      "PixInsight (primary processing)",
      "Photoshop (finishing)",
      "Sequence Generator Pro (capture)",
      "PHD2 (autoguiding)",
      "Stellarium (planning)",
    ],
  },
];

const socialLinks = [
  { href: "https://www.facebook.com/midnightzoo", icon: Facebook, label: "Facebook" },
  { href: "https://www.instagram.com/midnightzoo", icon: Instagram, label: "Instagram" },
  { href: "https://twitter.com/midnightzoo", icon: Twitter, label: "X / Twitter" },
  { href: "https://www.youtube.com/@midnightzoo", icon: Youtube, label: "YouTube" },
];

export default function About() {
  return (
    <div className="min-h-screen" style={{ background: "oklch(0.10 0.025 240)" }}>
      <Navigation />

      {/* Hero */}
      <div className="relative pt-20 overflow-hidden" style={{ minHeight: "400px" }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_MILKYWAY})` }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, oklch(0.07 0.01 240 / 0.7) 0%, oklch(0.07 0.01 240) 100%)",
          }}
        />
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <p className="nav-label mb-3" style={{ color: "oklch(0.72 0.12 75)" }}>
            The Story
          </p>
          <h1
            className="text-5xl sm:text-6xl font-bold mb-6"
            style={{ fontFamily: "'Gilda Display', Georgia, serif", color: "oklch(0.97 0.005 240)" }}
          >
            About Midnight Zoo
          </h1>
          <p
            className="text-xl max-w-2xl mx-auto leading-relaxed italic"
            style={{ fontFamily: "'Gilda Display', Georgia, serif", color: "oklch(0.82 0.005 240)" }}
          >
            "Some stories can only be written at night."
          </p>
        </div>
      </div>

      {/* Mission */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          <div>
            <p className="nav-label mb-3" style={{ color: "oklch(0.72 0.12 75)" }}>
              Mission
            </p>
            <h2
              className="text-4xl font-bold mb-6"
              style={{ fontFamily: "'Gilda Display', Georgia, serif", color: "oklch(0.93 0.005 240)" }}
            >
              Why Midnight Zoo Exists
            </h2>
            <div
              className="space-y-4"
              style={{ color: "oklch(0.70 0.01 240)", fontFamily: "'Figtree', system-ui, sans-serif", fontSize: "0.95rem", lineHeight: "1.8" }}
            >
              <p>
                Midnight Zoo brings the night sky into focus through long-form imaging, technical discipline, and a commitment to realism even under poor sky conditions. It shares unique experiences, inspiring others and helping them develop a deeper connection with the sky and what drives them to pursue it.
              </p>
              <p>
                The project started under Bortle 7 skies in Kalamazoo, Michigan — not because it was the ideal location, but because it was the location available. That constraint became the defining characteristic of the work: proving that meaningful astrophotography is possible from anywhere, given sufficient discipline and the right tools.
              </p>
              <p>
                Midnight Zoo is not about perfect conditions or perfect equipment. It's about the discipline to show up when the sky is mediocre, the patience to integrate for 30 hours when 5 would be easier, and the commitment to share the process honestly — including the failures.
              </p>
            </div>
          </div>

          <div>
            <img
              src={STARFRONT_BANNER}
              alt="Telescope under the stars"
              className="w-full object-cover mb-6"
              style={{
                border: "1px solid oklch(0.72 0.12 75 / 0.25)",
                maxHeight: "350px",
                objectFit: "cover",
              }}
            />
            <div
              className="p-6"
              style={{
                background: "oklch(0.13 0.03 240)",
                border: "1px solid oklch(1 0 0 / 0.08)",
              }}
            >
              <p
                className="text-lg font-bold italic mb-2"
                style={{ fontFamily: "'Gilda Display', Georgia, serif", color: "oklch(0.72 0.12 75)" }}
              >
                "Midnight Zoo brings the night sky into focus through long-form imaging, technical discipline, and a commitment to realism even under poor sky conditions. It shares unique experiences, inspiring others and helping them develop a deeper connection with the sky and what drives them to pursue it."
              </p>
              <p
                className="text-sm"
                style={{ color: "oklch(0.55 0.01 240)", fontFamily: "'Figtree', system-ui, sans-serif" }}
              >
                — Midnight Zoo
              </p>
            </div>
          </div>
        </div>

        <hr className="gold-rule mb-20" />

        {/* Philosophy */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <p className="nav-label mb-3" style={{ color: "oklch(0.72 0.12 75)" }}>
              Philosophy
            </p>
            <h2
              className="text-4xl font-bold"
              style={{ fontFamily: "'Gilda Display', Georgia, serif", color: "oklch(0.93 0.005 240)" }}
            >
              The Principles
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                title: "Realism Over Aesthetics",
                body: "Every processing decision is guided by scientific accuracy. Colors reflect actual emission wavelengths. Brightness represents real photon counts. The goal is to show what is actually there, not what looks dramatic.",
              },
              {
                number: "02",
                title: "Discipline Over Conditions",
                body: "The best astrophotographers don't wait for perfect skies. They develop the discipline to work within constraints — whether that's light pollution, poor seeing, or equipment limitations.",
              },
              {
                number: "03",
                title: "Sharing the Process",
                body: "Every image is accompanied by the technical details, the challenges encountered, and the lessons learned. The goal is not just to produce beautiful images, but to help others produce their own.",
              },
            ].map((principle) => (
              <div
                key={principle.number}
                className="p-6"
                style={{
                  background: "oklch(0.13 0.03 240)",
                  border: "1px solid oklch(1 0 0 / 0.08)",
                }}
              >
                <p
                  className="text-4xl font-bold mb-4"
                  style={{
                    fontFamily: "'Gilda Display', Georgia, serif",
                    color: "oklch(0.72 0.12 75 / 0.4)",
                  }}
                >
                  {principle.number}
                </p>
                <h3
                  className="text-lg font-bold mb-3"
                  style={{ fontFamily: "'Gilda Display', Georgia, serif", color: "oklch(0.90 0.005 240)" }}
                >
                  {principle.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "oklch(0.65 0.01 240)",
                    fontFamily: "'Figtree', system-ui, sans-serif",
                    fontSize: "0.875rem",
                    lineHeight: "1.7",
                  }}
                >
                  {principle.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        <hr className="gold-rule mb-20" />

        {/* Equipment */}
        <div className="mb-20">
          <div className="mb-10">
            <p className="nav-label mb-3" style={{ color: "oklch(0.72 0.12 75)" }}>
              The Setup
            </p>
            <h2
              className="text-4xl font-bold"
              style={{ fontFamily: "'Gilda Display', Georgia, serif", color: "oklch(0.93 0.005 240)" }}
            >
              Equipment
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipment.map((cat) => (
              <div
                key={cat.category}
                className="p-5"
                style={{
                  background: "oklch(0.13 0.03 240)",
                  border: "1px solid oklch(1 0 0 / 0.08)",
                }}
              >
                <h3
                  className="nav-label mb-4"
                  style={{ color: "oklch(0.72 0.12 75)" }}
                >
                  {cat.category}
                </h3>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm"
                      style={{
                        color: "oklch(0.70 0.01 240)",
                        fontFamily: "'Figtree', system-ui, sans-serif",
                        fontSize: "0.85rem",
                      }}
                    >
                      <span
                        className="mt-2 w-1 h-1 rounded-full flex-shrink-0"
                        style={{ background: "oklch(0.72 0.12 75 / 0.6)" }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <hr className="gold-rule mb-20" />

        {/* Connect */}
        <div className="text-center">
          <p className="nav-label mb-3" style={{ color: "oklch(0.72 0.12 75)" }}>
            Connect
          </p>
          <h2
            className="text-4xl font-bold mb-6"
            style={{ fontFamily: "'Gilda Display', Georgia, serif", color: "oklch(0.93 0.005 240)" }}
          >
            Follow the Journey
          </h2>
          <p
            className="text-base leading-relaxed max-w-lg mx-auto mb-8"
            style={{ color: "oklch(0.65 0.01 240)", fontFamily: "'Figtree', system-ui, sans-serif" }}
          >
            New images, processing updates, and behind-the-scenes content posted regularly. Follow along on social media or subscribe to the YouTube channel for full video walkthroughs.
          </p>
          <div className="flex items-center justify-center gap-6 mb-8">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex flex-col items-center gap-2 transition-colors duration-200 group"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-200"
                  style={{ background: "oklch(0.14 0.03 240)", border: "1px solid oklch(1 0 0 / 0.10)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "oklch(0.72 0.12 75)")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "oklch(1 0 0 / 0.10)")}
                >
                  <Icon size={18} style={{ color: "oklch(0.72 0.12 75)" }} />
                </div>
                <span className="nav-label" style={{ color: "oklch(0.55 0.01 240)", fontSize: "0.6rem" }}>
                  {label}
                </span>
              </a>
            ))}
          </div>
          <Link href="/youtube">
            <button className="btn-gold">Visit YouTube Page</button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
