/* ============================================================
   Gear Review — Midnight Zoo
   Equipment reviews with ratings, pros/cons, and editorial commentary
   ============================================================ */

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Star, CheckCircle, XCircle, ArrowRight } from "lucide-react";

import {
  ANDROMEDA_M31 as ANDROMEDA,
  ROSETTE_NEBULA as HERO_NEBULA,
  CYGNUS_LOOP as HERO_GALAXY,
  ORION_COMPLEX as STARFRONT_BANNER,
} from "@/lib/assets";

interface GearItem {
  id: string;
  category: string;
  name: string;
  tagline: string;
  rating: number;
  image: string;
  price: string;
  pros: string[];
  cons: string[];
  verdict: string;
  sampleImage?: string;
}

const gearItems: GearItem[] = [
  {
    id: "gear-1",
    category: "Camera",
    name: "ZWO ASI2600MM Pro",
    tagline: "The workhorse of modern astrophotography",
    rating: 4.8,
    image: STARFRONT_BANNER,
    price: "~$2,200",
    pros: [
      "Exceptional dynamic range for deep-sky work",
      "Low read noise at all gain settings",
      "Built-in 256MB DDR3 buffer prevents data loss",
      "USB 3.0 for fast data transfer",
      "Excellent cooling — up to -35°C below ambient",
    ],
    cons: [
      "Monochrome requires filter wheel and multiple passes",
      "Price point is significant for beginners",
      "Larger sensor requires more precise collimation",
    ],
    verdict: "The ASI2600MM Pro has become the standard for serious monochrome astrophotography at the prosumer level. Its combination of low noise, high dynamic range, and reliable cooling makes it an exceptional choice for narrowband and LRGB imaging. The investment is significant, but the results speak for themselves — this camera has produced some of the most detailed images in the Midnight Zoo catalog.",
    sampleImage: ANDROMEDA,
  },
  {
    id: "gear-2",
    category: "Mount",
    name: "iOptron CEM70",
    tagline: "Center-balanced precision for urban imaging",
    rating: 4.5,
    image: HERO_GALAXY,
    price: "~$2,800",
    pros: [
      "Center-of-gravity design reduces stress on motor",
      "35kg payload capacity handles heavy setups",
      "Excellent tracking accuracy for long exposures",
      "Compact and portable for travel",
      "iPolar electronic polar alignment is fast and accurate",
    ],
    cons: [
      "Learning curve for iPolar software",
      "Periodic error requires PHD2 guiding for best results",
      "Some users report occasional communication issues",
    ],
    verdict: "The CEM70 has been the backbone of the Kalamazoo imaging setup for over two years. Its center-balanced design is genuinely innovative — the reduced torque on the motors translates to better tracking performance and longer motor life. For urban imaging where you're spending hours at a fixed location, the iPolar alignment system is a significant time saver. Highly recommended for serious imagers who need a portable but capable platform.",
    sampleImage: HERO_GALAXY,
  },
  {
    id: "gear-3",
    category: "Telescope",
    name: "Takahashi FSQ-106ED",
    tagline: "The gold standard for wide-field imaging",
    rating: 5.0,
    image: HERO_NEBULA,
    price: "~$4,500",
    pros: [
      "Virtually perfect flat field across full-frame sensors",
      "Exceptional color correction — no chromatic aberration",
      "Compact and lightweight for its aperture",
      "Rock-solid focuser with no image shift",
      "Legendary Takahashi build quality and longevity",
    ],
    cons: [
      "Premium price — significant investment",
      "f/5 requires longer exposures than faster systems",
      "Limited to wide-field targets due to short focal length",
    ],
    verdict: "There is no better wide-field imaging refractor at any price. The FSQ-106ED produces a perfectly flat, perfectly corrected field that makes every other telescope feel like a compromise. It is expensive, and it is worth every penny. If you are serious about wide-field nebula imaging and can justify the investment, this telescope will be the last wide-field refractor you ever buy. The Cygnus Loop and Milky Way panoramas in this gallery were captured with this instrument.",
    sampleImage: HERO_NEBULA,
  },
  {
    id: "gear-4",
    category: "Filters",
    name: "Chroma 3nm Narrowband Set",
    tagline: "Maximum signal, maximum rejection",
    rating: 4.9,
    image: ANDROMEDA,
    price: "~$800 per filter",
    pros: [
      "3nm bandpass provides excellent LP rejection",
      "Parfocal design — no refocusing between filters",
      "Exceptional transmission at target wavelengths",
      "Durable multi-layer coating resists scratching",
      "Available in 2\" and 50mm unmounted formats",
    ],
    cons: [
      "Very expensive — full set is a major investment",
      "3nm bandwidth requires longer exposures",
      "Overkill for rural or suburban sites",
    ],
    verdict: "For urban astrophotography under Bortle 7 skies, 3nm narrowband filters are not a luxury — they are a necessity. The Chroma set has been in continuous use for over three years without any degradation in performance. The parfocal design is a genuine workflow improvement, and the transmission characteristics are measurably better than competing filters at twice the price. If you're imaging from a light-polluted site, these filters will transform your results.",
    sampleImage: ANDROMEDA,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={14}
          fill={star <= Math.round(rating) ? "oklch(0.72 0.12 75)" : "transparent"}
          style={{
            color: "oklch(0.72 0.12 75)",
          }}
        />
      ))}
      <span
        className="nav-label ml-1"
        style={{ color: "oklch(0.72 0.12 75)", fontSize: "0.65rem" }}
      >
        {rating.toFixed(1)}
      </span>
    </div>
  );
}

export default function GearReview() {
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
            Reviews
          </p>
          <h1
            className="text-5xl sm:text-6xl font-bold mb-4"
            style={{ fontFamily: "'Gilda Display', Georgia, serif", color: "oklch(0.93 0.005 240)" }}
          >
            Gear Review
          </h1>
          <p
            className="text-lg max-w-2xl leading-relaxed"
            style={{ color: "oklch(0.65 0.01 240)", fontFamily: "'Figtree', system-ui, sans-serif" }}
          >
            Honest, long-term reviews of the equipment used to produce the images in this gallery. No sponsored content, no affiliate pressure — just real-world assessment from years of use under real conditions.
          </p>
        </div>
      </div>

      {/* Gear Reviews */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-16">
          {gearItems.map((item, index) => (
            <article
              key={item.id}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
              style={{
                borderBottom: index < gearItems.length - 1 ? "1px solid oklch(1 0 0 / 0.06)" : "none",
                paddingBottom: index < gearItems.length - 1 ? "4rem" : "0",
              }}
            >
              {/* Image column */}
              <div className="lg:col-span-1">
                <div className="relative overflow-hidden mb-4" style={{ border: "1px solid oklch(1 0 0 / 0.08)" }}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full aspect-video object-cover"
                  />
                  <div
                    className="absolute top-3 left-3 nav-label px-2 py-1"
                    style={{
                      background: "oklch(0.72 0.12 75)",
                      color: "oklch(0.10 0.025 240)",
                      fontSize: "0.6rem",
                    }}
                  >
                    {item.category}
                  </div>
                </div>
                <div
                  className="p-4"
                  style={{
                    background: "oklch(0.13 0.03 240)",
                    border: "1px solid oklch(1 0 0 / 0.08)",
                  }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <StarRating rating={item.rating} />
                    <span
                      className="nav-label"
                      style={{ color: "oklch(0.72 0.12 75)", fontSize: "0.65rem" }}
                    >
                      {item.price}
                    </span>
                  </div>
                  {item.sampleImage && (
                    <div>
                      <p className="nav-label mb-2" style={{ color: "oklch(0.50 0.01 240)", fontSize: "0.6rem" }}>
                        Sample Image
                      </p>
                      <img
                        src={item.sampleImage}
                        alt="Sample"
                        className="w-full object-cover"
                        style={{ maxHeight: "120px" }}
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Content column */}
              <div className="lg:col-span-2">
                <span
                  className="nav-label"
                  style={{ color: "oklch(0.55 0.01 240)", fontSize: "0.65rem" }}
                >
                  {item.category}
                </span>
                <h2
                  className="text-3xl font-bold mt-1 mb-1"
                  style={{ fontFamily: "'Gilda Display', Georgia, serif", color: "oklch(0.93 0.005 240)" }}
                >
                  {item.name}
                </h2>
                <p
                  className="text-base italic mb-6"
                  style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'Gilda Display', Georgia, serif" }}
                >
                  {item.tagline}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  {/* Pros */}
                  <div>
                    <h3
                      className="nav-label mb-3 flex items-center gap-2"
                      style={{ color: "oklch(0.65 0.15 145)", fontSize: "0.65rem" }}
                    >
                      <CheckCircle size={12} /> Strengths
                    </h3>
                    <ul className="space-y-2">
                      {item.pros.map((pro) => (
                        <li
                          key={pro}
                          className="flex items-start gap-2 text-sm"
                          style={{
                            color: "oklch(0.72 0.01 240)",
                            fontFamily: "'Figtree', system-ui, sans-serif",
                            fontSize: "0.85rem",
                          }}
                        >
                          <span
                            className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                            style={{ background: "oklch(0.65 0.15 145)" }}
                          />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Cons */}
                  <div>
                    <h3
                      className="nav-label mb-3 flex items-center gap-2"
                      style={{ color: "oklch(0.65 0.20 25)", fontSize: "0.65rem" }}
                    >
                      <XCircle size={12} /> Limitations
                    </h3>
                    <ul className="space-y-2">
                      {item.cons.map((con) => (
                        <li
                          key={con}
                          className="flex items-start gap-2 text-sm"
                          style={{
                            color: "oklch(0.72 0.01 240)",
                            fontFamily: "'Figtree', system-ui, sans-serif",
                            fontSize: "0.85rem",
                          }}
                        >
                          <span
                            className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                            style={{ background: "oklch(0.65 0.20 25)" }}
                          />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <hr className="gold-rule mb-5" />

                <div>
                  <h3
                    className="nav-label mb-3"
                    style={{ color: "oklch(0.72 0.12 75)", fontSize: "0.65rem" }}
                  >
                    The Verdict
                  </h3>
                  <p
                    className="leading-relaxed"
                    style={{
                      color: "oklch(0.72 0.01 240)",
                      fontFamily: "'Figtree', system-ui, sans-serif",
                      fontSize: "0.9rem",
                      lineHeight: "1.8",
                    }}
                  >
                    {item.verdict}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* More reviews coming */}
        <div
          className="mt-16 text-center py-12"
          style={{ border: "1px dashed oklch(0.72 0.12 75 / 0.3)" }}
        >
          <p className="nav-label mb-2" style={{ color: "oklch(0.72 0.12 75)" }}>
            More Reviews Coming
          </p>
          <p
            className="text-sm"
            style={{ color: "oklch(0.55 0.01 240)", fontFamily: "'Figtree', system-ui, sans-serif" }}
          >
            Reviews are published after extended real-world use — typically 6–12 months of regular imaging sessions.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
