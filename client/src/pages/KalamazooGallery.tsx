/* ============================================================
   Kalamazoo Gallery — Midnight Zoo
   Full descriptions visible (no collapse), image + description side by side
   Alternating layout, lightbox on image click
   Only user's real photos — no AI-generated images
   ============================================================ */

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GalleryLightbox, { GalleryImage } from "@/components/GalleryLightbox";
import { formatPublishedDate } from "@/content/formatDate";
import { sortByPublishedAtDesc } from "@/content/sort";
import LazyImage from "@/components/LazyImage";
import {
  ANDROMEDA_M31,
  CYGNUS_LOOP,
  ROSETTE_NEBULA,
  ORION_COMPLEX,
  IC1805_HEART,
  PLEIADES_M45,
  WAXING_CRESCENT,
  KALAMAZOO_DOWNTOWN,
  M101_PINWHEEL,
  WIZARD_NEBULA,
  ROSETTE_SHO,
} from "@/lib/assets";

const kalamazooImages: GalleryImage[] = sortByPublishedAtDesc<GalleryImage>([
  {
    id: "kzoo-11",
    src: ROSETTE_SHO,
    title: "NGC 2244 / Caldwell 49 — The Rosette Nebula (SHO)",
    object: "NGC 2244 / Caldwell 49 — Rosette Nebula",
    date: "March 12 – April 2026",
    publishedAt: "2026-09-06",
    location: "Backyard — Kalamazoo, MI",
    telescope: "Askar SQA85",
    camera: "ZWO ASI585MC AIR",
    mount: "ZWO AM3N",
    filters: "Optolong L-Ultimate + L-Synergy SII/OIII 7nm",
    integration: "5h 50m dual-band SHO + RGB stars",
    bortle: "7 (Urban)",
    description: "The Rosette Nebula, also known as NGC 2237, is a vast cloud of glowing hydrogen located in the constellation Monoceros, roughly 5,000 light-years from Earth. At its center is the young open cluster NGC 2244, whose hot, massive stars carve out the dark central cavity and energize the surrounding gas, creating the Rosette’s distinctive ring-like shape. Its mix of glowing emission, dark dust lanes, and sculpted pillars makes it one of the most recognizable and rewarding winter targets in the night sky.\n\nProcessing Notes: Full SHO palette captured with a one-shot color camera using two dual-band filters: Optolong L-Ultimate (Ha + OIII, 3nm) and Optolong L-Synergy (SII + OIII, 7nm). Channel extraction from both datasets yielded Ha, SII, and two independent OIII measurements, which were combined with inverse-variance weighting after LinearFit rather than a flat average.\n\nProcessing was done per channel through most of the workflow. Gradient extraction was applied to each mono channel individually before LinearFit, using RBF interpolation. Noise reduction was tuned per channel from measured noise estimates rather than by eye, with the SII channel requiring the heaviest treatment and Ha the lightest. Deconvolution was applied once on the combined linear composite before star removal.\n\nStars were separated early and processed on their own path with a lighter stretch. I used RGB stars from a road trip I took to a Bortle 3 / 4 site. I’m not used to such dark skies, so my 120 second exposures actually made the stars larger than I wanted. So I decided to use my SHO stars and a color mask to preserve the RGB color.\n\nPalette is a straight SHO channel assignment with no blending. Color separation between the sulfur-dominated outer shell and the oxygen-rich interior comes from channel balance rather than palette weighting.\n\nAcquisition: 62 × 300s through the dual-band filters (5h 10m) across seven nights in April 2026, plus 20 × 120s unfiltered for stars (40m) on March 12 — 5h 50m total.",
    tags: ["Nebula", "Emission", "NGC 2244", "NGC 2237", "Rosette", "SHO", "Dual-Band", "OSC", "Narrowband", "Urban", "Bortle 7"],
  },
  {
    id: "kzoo-10",
    src: WIZARD_NEBULA,
    title: "NGC 7380 — The Wizard Nebula",
    object: "NGC 7380 — Wizard Nebula",
    date: "May–June 2026",
    publishedAt: "2026-06-08",
    location: "Backyard — Kalamazoo, MI",
    telescope: "William Optics Redcat 61",
    camera: "ZWO ASI2600MM Pro",
    mount: "ZWO AM3N",
    filters: "Optolong 3nm SHO + Baader RGB (stars)",
    integration: "16h 12m SHO + RGB stars",
    bortle: "7 (Urban)",
    description: "The Wizard Nebula (NGC 7380) is one of those targets that rewards a closer look. What first appears to be a simple blue cavity is actually a landscape of dark dust, ionized gas, and intricate shock fronts carved by young stars hidden within the nebula.\n\nCaptured in a traditional SHO palette with separate RGB stars, this image highlights the glowing oxygen chamber surrounded by sulfur-rich ridgelines that give the Wizard its unmistakable shape. The contrast between the cool teal interior and the warm golden edges reveals the ongoing interaction between stellar radiation and the surrounding cloud of gas and dust.\n\nEven after more than 16 hours of integration, I found myself discovering new details every time I zoomed in — delicate pillars, dark tendrils, and subtle structures hidden throughout the nebula's vast interior.\n\nAcquisition: SII 31 × 450s (3h 52m), Hα 55 × 450s (6h 52m), OIII 30 × 450s (3h 45m). Stars: R 30 × 60s, G 33 × 60s, B 40 × 60s.",
    tags: ["Nebula", "Emission", "NGC 7380", "Wizard Nebula", "SHO", "Hubble Palette", "Narrowband", "Urban", "Bortle 7"],
  },
  {
    id: "kzoo-9",
    src: M101_PINWHEEL,
    title: "Messier 101 — The Pinwheel Galaxy",
    object: "M101 — Pinwheel Galaxy (NGC 5457)",
    date: "April 10–25, 2026",
    publishedAt: "2026-05-26",
    location: "Kalamazoo, MI — Bortle 7",
    telescope: "Apertura CarbonStar 200 Imaging Newtonian",
    camera: "ZWO ASI2600MC Pro + ASI2600MM Pro",
    mount: "ZWO AM5N",
    filters: "Optolong L-Quad Enhance, L-Ultimate, 3nm Hα",
    integration: "12h 5m broadband + Hα",
    bortle: "7 (Urban)",
    description: "Captured across multiple nights under varying sky conditions using a blended broadband and narrowband workflow focused on preserving realism while enhancing faint structure and star-forming regions.\n\nThe goal with this image was not maximum aggression or synthetic detail extraction, but instead to preserve the natural appearance of M101 while allowing the faint outer structure and hydrogen regions to emerge gradually. Hydrogen-alpha data was selectively blended to enhance star-forming regions while maintaining the broadband character of the galaxy.\n\nAcquisition was split across three April nights: 4h 40m of 3nm Hα with the ASI2600MM Pro for HII region detail, and 7h 25m through Optolong L-Quad Enhance and L-Ultimate broadband filters with the ASI2600MC Pro for color and luminance.",
    tags: ["Galaxy", "M101", "Pinwheel", "NGC 5457", "Broadband", "Narrowband", "Ha", "Urban", "Bortle 7"],
  },
  {
    id: "kzoo-1",
    src: ANDROMEDA_M31,
    title: "Andromeda Galaxy (M31)",
    object: "M31 — Andromeda Galaxy",
    date: "February 19, 2026",
    publishedAt: "2026-05-23",
    location: "Kalamazoo, MI — Bortle 7",
    telescope: "William Optics Redcat 61",
    camera: "ZWO ASI2600MC Pro",
    mount: "ZWO AM3N",
    filters: "Baader LRGB + Optolong 3nm H-alpha",
    integration: "30h 25m LRGBHa",
    bortle: "7 (Urban)",
    description: "The Andromeda Galaxy (M31) is the nearest large spiral galaxy to the Milky Way at approximately 2.5 million light-years away. Spanning over 200,000 light-years and containing nearly a trillion stars, its bright core and layered dust lanes make it one of the most studied deep sky objects in the northern hemisphere.\n\nCaptured from Kalamazoo, Michigan (Bortle 7) using an LRGBHa workflow with just over 30 hours of total integration. H-alpha was blended into the red channel to enhance star-forming regions while maintaining natural broadband color balance.\n\nCapturing this level of detail from an urban environment required careful filter selection, precise polar alignment, and aggressive stacking techniques to overcome the sky gradient. The result demonstrates what is possible when you refuse to let a compromised sky be the reason you don't shoot.",
    tags: ["Galaxy", "M31", "Andromeda", "LRGB", "Ha", "Urban", "Bortle 7"],
  },
  {
    id: "kzoo-2",
    src: CYGNUS_LOOP,
    title: "Cygnus Loop — Veil Nebula Complex",
    object: "NGC 6960 / NGC 6992 — Veil Nebula",
    date: "February 21, 2026",
    publishedAt: "2026-05-24",
    location: "Kalamazoo, MI — Bortle 7",
    telescope: "William Optics Redcat 61",
    camera: "ZWO ASI2600MC Pro",
    mount: "ZWO AM3N",
    filters: "Optolong 3nm Ha, OIII, SII + Baader LRGB",
    integration: "27h 58m SHO+LRGB",
    bortle: "7 (Urban)",
    description: "The Cygnus Loop is the filamentary remnant of a supernova that occurred roughly 10,000 to 20,000 years ago. Expanding shockwaves energize surrounding gas, creating intricate ribbons of hydrogen, oxygen, and sulfur that span nearly three degrees across the sky.\n\nCaptured from Kalamazoo, Michigan (Bortle 7) using a dedicated SHO narrowband workflow with nearly 28 hours of total integration. Narrowband isolation was used to extract faint structure under heavy light pollution, with RGB data added for natural star color.\n\nNarrowband imaging is the great equalizer for urban astrophotographers. By isolating specific emission wavelengths, the filters cut through light pollution with remarkable efficiency, revealing structure that would be completely invisible in broadband imaging from the same location.",
    tags: ["Nebula", "Supernova Remnant", "SHO", "Narrowband", "Urban", "Bortle 7"],
  },
  {
    id: "kzoo-3",
    src: ROSETTE_NEBULA,
    title: "Rosette Nebula – 98 Minutes from Bortle 7 HOO",
    object: "Rosette Nebula (NGC 2244) — Emission Nebula",
    date: "March 2, 2026",
    publishedAt: "2026-05-22",
    location: "Kalamazoo, MI — Bortle 7",
    telescope: "William Optics Redcat 61",
    camera: "ZWO ASI2600MC Pro",
    mount: "ZWO AM3N",
    filters: "HOO (Hα + OIII)",
    integration: "98 minutes HOO",
    bortle: "7 (Urban)",
    description: "This is 98 minutes of HOO data captured from my Bortle 7 backyard. The goal here was simple: see what is realistically achievable under limited integration and imperfect skies.\n\nRather than push the data beyond what it could support, I focused on preserving structure in the inner cavity and maintaining background integrity. The result reflects what I believe to be the true ceiling of short integration under heavy light pollution.\n\nA much deeper integration in SHO is currently in progress, but recent poor sky conditions made me impatient to share what 98 disciplined minutes can produce.\n\nMore to come.",
    tags: ["Nebula", "Emission", "HOO", "Narrowband", "Urban", "Bortle 7", "Rosette", "NGC 2244"],
  },
  {
    id: "kzoo-4",
    src: ORION_COMPLEX,
    title: "Orion Complex Widefield – Framing Scale Under Urban Skies",
    object: "M42, M43, NGC 1977, Horsehead & Flame Nebulae",
    date: "March 11, 2026",
    publishedAt: "2026-05-22",
    location: "Kalamazoo, MI — Bortle 7",
    telescope: "William Optics Redcat 61",
    camera: "ZWO ASI2600MC Pro",
    mount: "ZWO AM3N",
    filters: "Baader LRGB + UV/IR Cut",
    integration: "2h 50m LRGB",
    bortle: "7 (Urban)",
    description: "This image represents 170 minutes of LRGB integration captured from my Bortle 7 backyard. The goal was to bring several distinct regions of the Orion complex into a single cohesive field: the intense core and surrounding structure of M42 and M43, the blue reflection nebulosity of NGC 1977, and the emission and dust features around the Horsehead and Flame Nebulae.\n\nComposing four visually different targets within one frame presented both technical and aesthetic challenges. The Orion Nebula itself spans an extreme dynamic range, while the surrounding reflection and emission structures are comparatively faint and highly susceptible to sky glow and large-scale gradients.\n\nThis processing approach focused on preserving a natural luminosity roll-off from the Trapezium region into the surrounding gas and dust, while allowing negative space to convey scale and separation between regions. Rather than attempting to make short integration data appear deeper than it is, the intent was to shape tone and composition so the image feels intentional and dimensional within real-world constraints.\n\nA much deeper Orion project is currently underway.",
    tags: ["Nebula", "M42", "Orion", "LRGB", "Widefield", "Urban", "Bortle 7"],
  },
  {
    id: "kzoo-5",
    src: IC1805_HEART,
    title: "IC 1805 — The Heart Nebula",
    object: "IC 1805 — Heart Nebula",
    date: "April 1, 2026",
    publishedAt: "2026-05-22",
    location: "Kalamazoo, MI — Bortle 7",
    telescope: "William Optics Redcat 61",
    camera: "ZWO ASI2600MC Pro",
    mount: "ZWO AM3N",
    filters: "Narrowband",
    integration: "In progress",
    bortle: "7 (Urban)",
    description: "The Heart Nebula (IC 1805) is a large emission nebula in the constellation Cassiopeia, approximately 7,500 light-years from Earth. Its distinctive heart-shaped appearance is formed by the stellar winds and radiation from a group of hot, massive stars at its center.\n\nCaptured from Kalamazoo's Bortle 7 skies using narrowband filters to cut through the urban light pollution and reveal the intricate structure of ionized hydrogen and oxygen gas within the nebula's clouds.",
    tags: ["Nebula", "Emission", "IC 1805", "Heart Nebula", "Narrowband", "Urban", "Bortle 7"],
  },
  {
    id: "kzoo-6",
    src: PLEIADES_M45,
    title: "M45 — The Pleiades",
    object: "M45 — The Pleiades (Seven Sisters)",
    date: "May 4, 2026",
    publishedAt: "2026-05-22",
    location: "Kalamazoo, MI — Bortle 7",
    telescope: "William Optics Redcat 61",
    camera: "ZWO ASI2600MC Pro",
    mount: "ZWO AM3N",
    filters: "Broadband",
    integration: "In progress",
    bortle: "7 (Urban)",
    description: "The Pleiades (M45) is one of the most recognizable star clusters in the night sky, located approximately 444 light-years away in the constellation Taurus. The cluster contains hundreds of stars, with the brightest seven forming the familiar pattern known as the Seven Sisters.\n\nThe blue reflection nebulosity surrounding the stars is not physically associated with the cluster — the Pleiades are simply passing through a dusty region of the interstellar medium, and the dust reflects the blue light of the hot, young stars. Capturing this delicate nebulosity from Bortle 7 skies requires careful processing to separate the faint reflection from the sky gradient.",
    tags: ["Star Cluster", "M45", "Pleiades", "Reflection Nebula", "Broadband", "Urban", "Bortle 7"],
  },
  {
    id: "kzoo-8",
    src: WAXING_CRESCENT,
    title: "The Waxing Crescent",
    object: "Moon — Waxing Crescent",
    date: "March 29, 2026",
    publishedAt: "2026-05-22",
    location: "Kalamazoo, MI — Backyard",
    telescope: "Canon RF 200-800mm F6.3-9 IS USM",
    camera: "Canon EOS R5 Mark II",
    mount: "N/A",
    filters: "None",
    integration: "Single exposure",
    bortle: "7 (Urban)",
    description: "A thin waxing crescent captured from my backyard. This was a relatively simple session while working through longer deep sky projects.\n\nThe image was taken with a Canon R5 Mark II and a variable lens at 500mm. Earthshine is present but intentionally kept subtle. Conditions were slightly hazy, and pushing it further began to degrade the image, so the focus remained on preserving the natural contrast and detail along the illuminated limb.",
    tags: ["Moon", "Lunar", "Crescent", "Canon", "Backyard"],
  },
]);

export default function KalamazooGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen" style={{ background: "oklch(0.10 0.025 240)" }}>
      <Navigation />

      {/* Page Header */}
      <div className="relative pt-32 pb-0 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pb-16">
            {/* Text */}
            <div>
              <p className="nav-label mb-3" style={{ color: "oklch(0.72 0.12 75)" }}>
                Gallery
              </p>
              <h1
                className="text-5xl sm:text-6xl font-bold mb-2"
                style={{ fontFamily: "'Gilda Display', Georgia, serif", color: "oklch(0.93 0.005 240)" }}
              >
                Kalamazoo Gallery
              </h1>
              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: "oklch(0.70 0.01 240)", fontFamily: "'Figtree', system-ui, sans-serif" }}
              >
                This is where it started. Midnight Zoo was born under Bortle 7 skies in Kalamazoo, Michigan — a city that doesn't exactly roll out the red carpet for astrophotographers. Light pollution, weather, and urban glow made it clear early on that if this was going to work here, it was going to require discipline.
              </p>
              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: "oklch(0.70 0.01 240)", fontFamily: "'Figtree', system-ui, sans-serif" }}
              >
                Every image and story on this page was captured from within the Kalamazoo area. No dark site escapes. No cherry-picked conditions. Just what's possible when you refuse to let a compromised sky be the reason you don't shoot.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: "oklch(0.70 0.01 240)", fontFamily: "'Figtree', system-ui, sans-serif" }}
              >
                Kalamazoo isn't unique in its difficulty, but it stands as a model for what's possible. There are cities like it all around the world, waiting for someone to uncover the stories that can only be written at night.
              </p>
            </div>

            {/* Featured image — Kalamazoo Downtown */}
            <div className="relative">
              <LazyImage
                eager
                src={KALAMAZOO_DOWNTOWN}
                alt="Kalamazoo Downtown"
                className="w-full object-cover"
                style={{
                  border: "1px solid oklch(0.72 0.12 75 / 0.25)",
                  maxHeight: "400px",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
              <div
                className="absolute bottom-4 left-4 px-3 py-1.5"
                style={{ background: "oklch(0.07 0.01 240 / 0.85)" }}
              >
                <p className="nav-label" style={{ color: "oklch(0.72 0.12 75)", fontSize: "0.65rem" }}>
                  Kalamazoo, Michigan — Bortle 7
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Gold rule */}
        <hr className="gold-rule" />
      </div>

      {/* Section heading */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <h2
          className="text-3xl font-bold"
          style={{ fontFamily: "'Gilda Display', Georgia, serif", color: "oklch(0.93 0.005 240)" }}
        >
          Images Under Kalamazoo Skies
        </h2>
        <p
          className="nav-label mt-2"
          style={{ color: "oklch(0.55 0.01 240)" }}
        >
          Click any image to open the full story and technical details
        </p>
      </div>

      {/* Gallery entries — alternating layout */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {kalamazooImages.map((img, index) => (
          <div
            key={img.id}
            className="mb-16"
            style={{
              borderBottom: index < kalamazooImages.length - 1 ? "1px solid oklch(1 0 0 / 0.06)" : "none",
              paddingBottom: index < kalamazooImages.length - 1 ? "4rem" : "0",
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
                {/* Hover overlay */}
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
                {/* Category badge */}
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
                    <span
                      className="nav-label"
                      style={{ color: "oklch(0.50 0.01 240)", fontSize: "0.65rem" }}
                    >
                      Captured {img.date}
                    </span>
                  )}
                  {img.publishedAt && (
                    <span
                      className="nav-label"
                      style={{ color: "oklch(0.50 0.01 240)", fontSize: "0.65rem" }}
                    >
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

                {/* Technical metadata */}
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
                    { label: "Camera", value: img.camera },
                    { label: "Mount", value: img.mount },
                    { label: "Filters", value: img.filters },
                    { label: "Integration", value: img.integration },
                  ].filter(f => f.value).map(({ label, value }) => (
                    <div key={label}>
                      <p
                        className="nav-label"
                        style={{ color: "oklch(0.72 0.12 75)", fontSize: "0.6rem" }}
                      >
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

                {/* Full description — no collapse */}
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
                    <p key={i} className={i > 0 ? "mt-4" : ""}>
                      {para}
                    </p>
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

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <GalleryLightbox
          images={kalamazooImages}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}

      <Footer />
    </div>
  );
}
