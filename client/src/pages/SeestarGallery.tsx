/* ============================================================
   Seestar Gallery — Midnight Zoo
   Dedicated gallery for captures made with a ZWO Seestar smart telescope
   (S50, S30 Pro, and whatever comes next)
   Showcasing what inexpensive smart telescopes can do
   Cinematic Observatory design — Gilda Display headings, Figtree body
   ============================================================ */

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GalleryLightbox, { GalleryImage } from "@/components/GalleryLightbox";
import { formatPublishedDate } from "@/content/formatDate";
import { sortByPublishedAtDesc } from "@/content/sort";
import LazyImage from "@/components/LazyImage";
import { SEESTAR_M51_WHIRLPOOL, SEESTAR_M44_BEEHIVE, SEESTAR_NGC6946_FIREWORKS } from "@/lib/assets";
import { Telescope } from "lucide-react";

/** Every Seestar this gallery has been shot with, newest rig first. */
const seestarScopes = [
  {
    name: "ZWO Seestar S30 Pro",
    note: "Current",
    specs: [
      { label: "Aperture", value: "30mm f/5.3" },
      { label: "Focal Length", value: "160mm" },
      { label: "Sensor", value: "IMX585 Color" },
      { label: "Resolution", value: "8.3MP (2160×3840)" },
      { label: "Mount", value: "Alt-Az / EQ mode" },
      { label: "Filters", value: "UV/IR cut, LP, dark field" },
      { label: "Control", value: "Smartphone app" },
      { label: "Price Range", value: "~$700 USD" },
    ],
  },
  {
    name: "ZWO Seestar S50",
    note: "Earlier images",
    specs: [
      { label: "Aperture", value: "50mm f/5" },
      { label: "Focal Length", value: "250mm" },
      { label: "Sensor", value: "IMX462 Color" },
      { label: "Resolution", value: "2MP (1920×1080)" },
      { label: "Mount", value: "Alt-Az, Built-in" },
      { label: "Filter", value: "Built-in LP filter" },
      { label: "Control", value: "Smartphone app" },
      { label: "Price Range", value: "~$500 USD" },
    ],
  },
];

const seestarImages: GalleryImage[] = sortByPublishedAtDesc<GalleryImage>([
  {
    id: "ss-1",
    src: SEESTAR_M51_WHIRLPOOL,
    title: "M51 — The Whirlpool Galaxy",
    object: "M51 — Whirlpool Galaxy & NGC 5195",
    date: "April 2025",
    publishedAt: "2026-05-22",
    location: "Kalamazoo, MI — Bortle 7",
    telescope: "ZWO Seestar S50",
    camera: "ZWO Seestar S50 (built-in)",
    mount: "ZWO Seestar S50 (built-in)",
    filters: "Built-in LP filter",
    integration: "In progress",
    bortle: "7 (Urban)",
    description: "The Whirlpool Galaxy (M51) and its companion NGC 5195 captured with the ZWO Seestar S50 from Kalamazoo, Michigan. At roughly 23 million light-years away, M51 is one of the most visually striking interacting galaxy pairs in the northern sky.\n\nThe Seestar S50 is an all-in-one smart telescope that handles alignment, tracking, and stacking automatically from a smartphone app. It costs a fraction of a traditional imaging rig and requires no prior experience to operate.\n\nThis image demonstrates that meaningful astrophotography is accessible at nearly any budget. The spiral structure, the tidal bridge connecting the two galaxies, and the faint outer arms are all visible — captured from a Bortle 7 backyard with a $500 device.",
    tags: ["Galaxy", "M51", "Whirlpool", "Seestar", "Smart Telescope", "Urban", "Bortle 7"],
  },
  {
    id: "ss-2",
    src: SEESTAR_M44_BEEHIVE,
    title: "M44 — The Beehive Cluster",
    object: "M44 — Beehive Cluster (Praesepe)",
    date: "April 2025",
    publishedAt: "2026-05-22",
    location: "Kalamazoo, MI — Bortle 7",
    telescope: "ZWO Seestar S50",
    camera: "ZWO Seestar S50 (built-in)",
    mount: "ZWO Seestar S50 (built-in)",
    filters: "Built-in LP filter",
    integration: "In progress",
    bortle: "7 (Urban)",
    description: "The Beehive Cluster (M44, also known as Praesepe) is an open star cluster in the constellation Cancer, approximately 577 light-years from Earth. It contains over 1,000 stars and is one of the nearest open clusters to our solar system.\n\nCaptured with the ZWO Seestar S50 from Kalamazoo's Bortle 7 skies. The cluster's wide angular extent — roughly 1.5 degrees across — makes it a natural fit for the Seestar's field of view, and the built-in light pollution filter helps preserve star color against the urban sky background.\n\nOpen clusters like M44 are often overlooked in favor of more dramatic nebulae and galaxies, but they offer a different kind of visual reward — a sense of depth and three-dimensional structure that reminds you these are real suns, scattered across real space.",
    tags: ["Star Cluster", "M44", "Beehive", "Praesepe", "Seestar", "Smart Telescope", "Urban", "Bortle 7"],
  },
  {
    id: "ss-3",
    src: SEESTAR_NGC6946_FIREWORKS,
    title: "Fireworks and Starlight",
    object: "NGC 6946 — Fireworks Galaxy & NGC 6939",
    date: "August 2026",
    publishedAt: "2026-09-01",
    location: "Kalamazoo, MI — Bortle 7",
    telescope: "ZWO Seestar S30 Pro",
    camera: "ZWO Seestar S30 Pro integrated telephoto (IMX585)",
    mount: "ZWO Seestar TH10",
    filters: "No filter",
    integration: "9h 16m — 556 × 60s",
    bortle: "7 (Urban)",
    description: "NGC 6946, the Fireworks Galaxy, shares the frame with the rich open cluster NGC 6939. I love this field because of the sense of scale it creates: a nearby gathering of stars suspended against the Milky Way, with an entire spiral galaxy glowing far beyond it.\n\nTwo completely different objects, separated by an almost unimaginable distance, brought together in a single view. NGC 6939 sits about 5,600 light-years away. NGC 6946 is roughly 25,200,000 light-years out.\n\nThis is the first image here from the Seestar S30 Pro rather than the S50 — 160mm at f/5.3 on an IMX585, riding the TH10. 556 sixty-second subs, 9 hours 16 minutes total, no filter, shot straight from the backyard under Bortle 7 skies in Cepheus. Processed in PixInsight and Photoshop with GraXpert, BlurXTerminator, NoiseXTerminator, and StarShrink.",
    tags: ["Galaxy", "Star Cluster", "NGC 6946", "Fireworks Galaxy", "NGC 6939", "Cepheus", "Seestar", "S30 Pro", "Smart Telescope", "Urban", "Bortle 7"],
  },
]);

export default function SeestarGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen" style={{ background: "oklch(0.10 0.025 240)" }}>
      <Navigation />

      {/* Page Header */}
      <div
        className="relative pt-32 pb-16 overflow-hidden"
        style={{
          background: "linear-gradient(to bottom, oklch(0.08 0.02 240), oklch(0.10 0.025 240))",
          borderBottom: "1px solid oklch(1 0 0 / 0.08)",
        }}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="nav-label mb-3" style={{ color: "oklch(0.72 0.12 75)" }}>
                Gallery
              </p>
              <h1
                className="text-5xl sm:text-6xl font-bold mb-4"
                style={{ fontFamily: "'Gilda Display', Georgia, serif", color: "oklch(0.93 0.005 240)" }}
              >
                Seestar Gallery
              </h1>
              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: "oklch(0.70 0.01 240)", fontFamily: "'Figtree', system-ui, sans-serif" }}
              >
                This gallery is dedicated entirely to images captured with a <strong style={{ color: "oklch(0.85 0.01 240)" }}>ZWO Seestar smart telescope</strong> — compact, all-in-one scopes that cost a fraction of a traditional astrophotography rig. The gear here has changed over time (the S50 first, the S30 Pro now), so every image below lists the exact scope it was shot with.
              </p>
              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: "oklch(0.70 0.01 240)", fontFamily: "'Figtree', system-ui, sans-serif" }}
              >
                Whichever model, the Seestar handles alignment, tracking, and stacking automatically from a smartphone app. No prior experience required. No separate mount, camera, or software. Just point and image.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: "oklch(0.70 0.01 240)", fontFamily: "'Figtree', system-ui, sans-serif" }}
              >
                These images are kept separate from the main galleries not because they are lesser — but because they tell a different story. This is what the entry point to astrophotography looks like today. The barrier has never been lower.
              </p>
            </div>

            {/* Seestar spec card — every scope this gallery has been shot with */}
            <div
              className="p-8"
              style={{
                background: "oklch(0.13 0.03 240)",
                border: "1px solid oklch(0.72 0.12 75 / 0.25)",
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Telescope size={20} style={{ color: "oklch(0.72 0.12 75)" }} />
                <h3
                  className="text-lg font-bold"
                  style={{ fontFamily: "'Gilda Display', Georgia, serif", color: "oklch(0.90 0.005 240)" }}
                >
                  The Scopes
                </h3>
              </div>
              {seestarScopes.map(({ name, note, specs }, i) => (
                <div
                  key={name}
                  style={{
                    marginTop: i > 0 ? "1.5rem" : 0,
                    paddingTop: i > 0 ? "1.5rem" : 0,
                    borderTop: i > 0 ? "1px solid oklch(1 0 0 / 0.08)" : "none",
                  }}
                >
                  <div className="flex items-baseline gap-3 mb-3 flex-wrap">
                    <h4
                      className="text-base font-bold"
                      style={{ fontFamily: "'Gilda Display', Georgia, serif", color: "oklch(0.90 0.005 240)" }}
                    >
                      {name}
                    </h4>
                    <span className="nav-label" style={{ color: "oklch(0.55 0.01 240)", fontSize: "0.6rem" }}>
                      {note}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                    {specs.map(({ label, value }) => (
                      <div key={label}>
                        <p className="nav-label" style={{ color: "oklch(0.72 0.12 75)", fontSize: "0.6rem" }}>
                          {label}
                        </p>
                        <p
                          className="text-sm mt-0.5"
                          style={{
                            color: "oklch(0.78 0.005 240)",
                            fontFamily: "'Figtree', system-ui, sans-serif",
                            fontSize: "0.82rem",
                          }}
                        >
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Gallery entries */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <h2
            className="text-3xl font-bold"
            style={{ fontFamily: "'Gilda Display', Georgia, serif", color: "oklch(0.93 0.005 240)" }}
          >
            Images from the Seestar
          </h2>
          <p className="nav-label mt-2" style={{ color: "oklch(0.55 0.01 240)" }}>
            Click any image to open the full story and technical details
          </p>
        </div>

        {seestarImages.map((img, index) => (
          <div
            key={img.id}
            className="mb-16"
            style={{
              borderBottom: index < seestarImages.length - 1 ? "1px solid oklch(1 0 0 / 0.06)" : "none",
              paddingBottom: index < seestarImages.length - 1 ? "4rem" : "0",
            }}
          >
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Image */}
              <div
                className="relative group cursor-pointer overflow-hidden"
                onClick={() => setLightboxIndex(index)}
              >
                <LazyImage
                  src={img.src}
                  alt={img.title}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{
                    border: "1px solid oklch(1 0 0 / 0.08)",
                    maxHeight: "500px",
                    objectFit: "cover",
                  }}
                />
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "oklch(0.07 0.01 240 / 0.4)" }}
                >
                  <div
                    className="px-4 py-2 nav-label"
                    style={{
                      background: "oklch(0.72 0.12 75)",
                      color: "oklch(0.10 0.025 240)",
                      fontSize: "0.65rem",
                    }}
                  >
                    View Details & Zoom
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="flex flex-col justify-start">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="nav-label px-2 py-1"
                    style={{
                      fontSize: "0.6rem",
                      background: "oklch(0.72 0.12 75 / 0.12)",
                      color: "oklch(0.72 0.12 75)",
                      border: "1px solid oklch(0.72 0.12 75 / 0.3)",
                    }}
                  >
                    {img.object}
                  </span>
                  {img.date && (
                    <span className="nav-label" style={{ color: "oklch(0.50 0.01 240)", fontSize: "0.65rem" }}>
                      Captured {img.date}
                    </span>
                  )}
                  {img.publishedAt && (
                    <span className="nav-label" style={{ color: "oklch(0.50 0.01 240)", fontSize: "0.65rem" }}>
                      Published {formatPublishedDate(img.publishedAt)}
                    </span>
                  )}
                </div>

                <h3
                  className="text-2xl sm:text-3xl font-bold mb-4"
                  style={{ fontFamily: "'Gilda Display', Georgia, serif", color: "oklch(0.93 0.005 240)" }}
                >
                  {img.title}
                </h3>

                {/* Metadata */}
                <div
                  className="grid grid-cols-2 gap-x-6 gap-y-2 mb-6 p-4"
                  style={{
                    background: "oklch(0.13 0.03 240)",
                    border: "1px solid oklch(1 0 0 / 0.08)",
                  }}
                >
                  {[
                    { label: "Location", value: img.location },
                    { label: "Telescope", value: img.telescope },
                    { label: "Filters", value: img.filters },
                    { label: "Integration", value: img.integration },
                  ].filter(f => f.value).map(({ label, value }) => (
                    <div key={label}>
                      <p className="nav-label" style={{ color: "oklch(0.72 0.12 75)", fontSize: "0.6rem" }}>
                        {label}
                      </p>
                      <p
                        className="text-sm mt-0.5"
                        style={{
                          color: "oklch(0.78 0.005 240)",
                          fontFamily: "'Figtree', system-ui, sans-serif",
                          fontSize: "0.8rem",
                        }}
                      >
                        {value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Full description */}
                <div
                  className="leading-relaxed"
                  style={{
                    color: "oklch(0.70 0.01 240)",
                    fontFamily: "'Figtree', system-ui, sans-serif",
                    fontSize: "0.9rem",
                    lineHeight: "1.8",
                  }}
                >
                  {img.description.split("\n\n").map((para, i) => (
                    <p key={i} className={i > 0 ? "mt-4" : ""}>{para}</p>
                  ))}
                </div>

                {/* Tags */}
                {img.tags && img.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-6">
                    {img.tags.map((tag) => (
                      <span
                        key={tag}
                        className="nav-label px-2 py-1"
                        style={{
                          fontSize: "0.6rem",
                          background: "oklch(0.72 0.12 75 / 0.10)",
                          color: "oklch(0.72 0.12 75)",
                          border: "1px solid oklch(0.72 0.12 75 / 0.2)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {lightboxIndex !== null && (
        <GalleryLightbox
          images={seestarImages}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}

      <Footer />
    </div>
  );
}
