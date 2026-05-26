/* ============================================================
   Travel Gallery — Midnight Zoo
   Images from dark site travels, same lightbox system
   Only user's real photos — no AI-generated images
   ============================================================ */

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GalleryLightbox, { GalleryImage } from "@/components/GalleryLightbox";
import { formatPublishedDate } from "@/content/formatDate";
import { sortByPublishedAtDesc } from "@/content/sort";
import LazyImage from "@/components/LazyImage";
import { MapPin, Clock } from "lucide-react";
import { MILKYWAY_IRONWOOD } from "@/lib/assets";

const travelImages: GalleryImage[] = sortByPublishedAtDesc<GalleryImage>([
  {
    id: "tr-1",
    src: MILKYWAY_IRONWOOD,
    title: "Milky Way above Ironwood Forest National Monument",
    object: "Milky Way — Galactic Core",
    date: "April 15, 2025",
    publishedAt: "2026-05-22",
    location: "Ironwood Forest National Monument, Marana, AZ — Bortle 3",
    telescope: "Canon RF 24mm f/1.4",
    camera: "Canon EOS R5 Mark II",
    mount: "Tracked (Sequator)",
    filters: "None",
    integration: "16 × 5s (sky) + 1 × 30s (foreground) — composite",
    bortle: "3",
    description: "This was captured between 2–3 AM in Ironwood Forest National Monument, Arizona, during a work trip that turned into something more. I rented a Jeep Wrangler, drove out into the desert, and waited for the sky to come into position.\n\nNo crowds, no noise — just desert and stars. The Milky Way core was already up over the ridge by the time I set up, with the saguaros holding the foreground. Hard to convey what it actually feels like out there. Beautiful silence, almost spooky if you aren't used to it.\n\nThis is a composite of 16 × 5-second exposures for the sky and a single 30-second exposure for the foreground, taken with a Canon R5 Mark II and RF 24mm f/1.4. The sky glow on the horizon is from Tucson, AZ, located about 38 miles to the southeast. Processed in Adobe Lightroom Classic, Photoshop, with NoiseXTerminator, StarXTerminator, StarShrink, and Sequator.",
    tags: ["Milky Way", "Wide Field", "Travel", "Dark Site", "Bortle 3", "Landscape", "Arizona", "Saguaro", "Composite"],
  },
]);

export default function TravelGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen" style={{ background: "oklch(0.10 0.025 240)" }}>
      <Navigation />

      {/* Hero — full-bleed real photo */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover"
          style={{
            backgroundImage: `url(${MILKYWAY_IRONWOOD})`,
            backgroundPosition: "center 20%",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, oklch(0.07 0.01 240) 0%, oklch(0.07 0.01 240 / 0.4) 50%, transparent 80%)",
          }}
        />
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <p className="nav-label mb-2" style={{ color: "oklch(0.72 0.12 75)" }}>Gallery</p>
          <h1
            className="text-5xl sm:text-6xl font-bold mb-3"
            style={{ fontFamily: "'Gilda Display', Georgia, serif", color: "oklch(0.97 0.005 240)", textShadow: "0 2px 20px oklch(0 0 0 / 0.5)" }}
          >
            Travel Gallery
          </h1>
          <p
            className="text-base max-w-xl leading-relaxed"
            style={{ color: "oklch(0.80 0.005 240)", fontFamily: "'Figtree', system-ui, sans-serif" }}
          >
            When the city skies aren't enough, the road leads to darker places. These images were captured during dedicated dark site expeditions.
          </p>
        </div>
      </section>

      {/* Gallery content */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Single real image — full editorial layout */}
        {travelImages.map((img, index) => (
          <div
            key={img.id}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16"
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
                  maxHeight: "600px",
                  objectFit: "cover",
                  objectPosition: "center 20%",
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
                <span className="nav-label" style={{ color: "oklch(0.50 0.01 240)", fontSize: "0.65rem" }}>
                  Captured {img.date}
                </span>
                {img.publishedAt && (
                  <span className="nav-label" style={{ color: "oklch(0.50 0.01 240)", fontSize: "0.65rem" }}>
                    Published {formatPublishedDate(img.publishedAt)}
                  </span>
                )}
              </div>

              <h2
                className="text-2xl sm:text-3xl font-bold mb-4"
                style={{ fontFamily: "'Gilda Display', Georgia, serif", color: "oklch(0.93 0.005 240)" }}
              >
                {img.title}
              </h2>

              {/* Metadata grid */}
              <div
                className="grid grid-cols-2 gap-x-6 gap-y-2 mb-6 p-4"
                style={{
                  background: "oklch(0.13 0.03 240)",
                  border: "1px solid oklch(1 0 0 / 0.08)",
                }}
              >
                {[
                  { label: "Location", value: img.location },
                  { label: "Camera", value: img.camera },
                  { label: "Lens", value: img.telescope },
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
        ))}

        {/* Coming soon placeholder */}
        <div
          className="mt-8 py-16 text-center"
          style={{ border: "1px dashed oklch(0.72 0.12 75 / 0.3)" }}
        >
          <Clock size={24} className="mx-auto mb-4" style={{ color: "oklch(0.72 0.12 75 / 0.5)" }} />
          <p className="nav-label mb-2" style={{ color: "oklch(0.72 0.12 75)" }}>
            More Coming Soon
          </p>
          <p
            className="text-sm max-w-md mx-auto"
            style={{ color: "oklch(0.55 0.01 240)", fontFamily: "'Figtree', system-ui, sans-serif" }}
          >
            New travel images are added as expeditions are completed. Dark site trips are being planned — follow along on social media for updates.
          </p>
        </div>
      </div>

      {lightboxIndex !== null && (
        <GalleryLightbox
          images={travelImages}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}

      <Footer />
    </div>
  );
}
