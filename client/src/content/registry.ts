/* ============================================================
   Content Registry — Hand-maintained content index
   ============================================================
   Add an entry here every time you publish:
     • a new article  (kind: "article")
     • a new tutorial (kind: "tutorial")
     • a gear review  (kind: "review")
     • one or more gallery images (kind: "gallery-image", one
       entry per image)

   Tutorials and Gear Review pages are currently in Coming Soon
   mode — entries will be added when those pages go live.

   This file will eventually be replaced by a `fetch('/api/content')`
   call. As long as new entries conform to the ContentItem shape and
   IDs stay stable, the migration is a one-file swap.
   ============================================================ */

import {
  ANDROMEDA_M31,
  CYGNUS_LOOP,
  ROSETTE_NEBULA,
  ORION_COMPLEX,
  IC1805_HEART,
  PLEIADES_M45,
  M81_M82_BODES,
  WAXING_CRESCENT,
  M101_PINWHEEL,
  WIZARD_NEBULA,
  KALAMAZOO_DOWNTOWN,
  MILKYWAY_IRONWOOD,
  SEESTAR_M51_WHIRLPOOL,
  SEESTAR_M44_BEEHIVE,
  SEESTAR_NGC6946_FIREWORKS,
  MWR_HERO,
} from "@/lib/assets";
import type { ContentItem } from "./types";

export const contentRegistry: ContentItem[] = [
  // ── Articles ─────────────────────────────────────────────
  {
    id: "article-milky-way-rises",
    kind: "article",
    publishedAt: "2026-05-25",
    title: "The Milky Way Rises",
    category: "Article",
    excerpt:
      "A spring Milky Way chase out of Ironwood Forest National Monument, AZ — the drive, the dangers, and what the desert teaches you about shooting under truly dark skies.",
    href: "/articles/the-milky-way-rises",
    image: MWR_HERO,
  },

  // ── Kalamazoo Gallery images ─────────────────────────────
  {
    id: "gallery-image-kzoo-10",
    kind: "gallery-image",
    publishedAt: "2026-06-08",
    title: "NGC 7380 — The Wizard Nebula",
    category: "Kalamazoo Gallery",
    excerpt:
      "16+ hours of narrowband SHO with separate RGB stars from a Bortle 7 backyard. The orange sulfur ridgelines wrap a glowing oxygen cavity — every zoom reveals another layer of pillars, tendrils, and shock fronts.",
    href: "/kalamazoo-gallery",
    image: WIZARD_NEBULA,
  },
  {
    id: "gallery-image-kzoo-9",
    kind: "gallery-image",
    publishedAt: "2026-05-26",
    title: "Messier 101 — The Pinwheel Galaxy",
    category: "Kalamazoo Gallery",
    excerpt:
      "M101 captured from Kalamazoo across three April nights with a 200mm Imaging Newtonian. A blended broadband + Hα workflow brings out faint outer structure and star-forming regions while preserving the galaxy's natural character.",
    href: "/kalamazoo-gallery",
    image: M101_PINWHEEL,
  },
  {
    id: "gallery-image-kzoo-1",
    kind: "gallery-image",
    publishedAt: "2026-05-23",
    title: "Andromeda Galaxy — 30+ Hours LRGB+Ha",
    category: "Kalamazoo Gallery",
    excerpt:
      "M31 imaged from Kalamazoo with LRGBHa filters. Over 30 hours of integration reveals dust lanes, bright core, and subtle star-forming regions.",
    href: "/kalamazoo-gallery",
    image: ANDROMEDA_M31,
  },
  {
    id: "gallery-image-kzoo-2",
    kind: "gallery-image",
    publishedAt: "2026-05-24",
    title: "Cygnus Loop — 28 Hours from Kalamazoo",
    category: "Kalamazoo Gallery",
    excerpt:
      "The Veil Nebula complex captured under Bortle 7 skies with a dedicated SHO narrowband setup. Nearly 28 hours of integration reveals intricate filamentary structure.",
    href: "/kalamazoo-gallery",
    image: CYGNUS_LOOP,
  },
  {
    id: "gallery-image-kzoo-3",
    kind: "gallery-image",
    publishedAt: "2026-05-22",
    title: "Rosette Nebula — 98 Minutes from Bortle 7 HOO",
    category: "Kalamazoo Gallery",
    excerpt:
      "98 disciplined minutes of HOO data from a Bortle 7 backyard. Structure preserved, background respected — the realistic ceiling of short integration under urban skies.",
    href: "/kalamazoo-gallery",
    image: ROSETTE_NEBULA,
  },
  {
    id: "gallery-image-kzoo-4",
    kind: "gallery-image",
    publishedAt: "2026-05-22",
    title: "Orion Complex — Widefield from Bortle 7",
    category: "Kalamazoo Gallery",
    excerpt:
      "M42, M43, NGC 1977, Horsehead and Flame in a single frame. Framing the scale of the Orion star-forming region from urban Michigan.",
    href: "/kalamazoo-gallery",
    image: ORION_COMPLEX,
  },
  {
    id: "gallery-image-kzoo-5",
    kind: "gallery-image",
    publishedAt: "2026-05-22",
    title: "IC 1805 — The Heart Nebula",
    category: "Kalamazoo Gallery",
    excerpt:
      "The Heart Nebula in narrowband from Kalamazoo, MI. A vast emission region in Cassiopeia rendered through urban skies.",
    href: "/kalamazoo-gallery",
    image: IC1805_HEART,
  },
  {
    id: "gallery-image-kzoo-6",
    kind: "gallery-image",
    publishedAt: "2026-05-22",
    title: "M45 — The Pleiades from Kalamazoo",
    category: "Kalamazoo Gallery",
    excerpt:
      "The iconic Seven Sisters captured under Bortle 7 skies. Reflection nebulosity and dust lanes revealed through careful processing.",
    href: "/kalamazoo-gallery",
    image: PLEIADES_M45,
  },
  {
    id: "gallery-image-kzoo-8",
    kind: "gallery-image",
    publishedAt: "2026-05-22",
    title: "Waxing Crescent Moon",
    category: "Kalamazoo Gallery",
    excerpt:
      "A high-resolution waxing crescent from the backyard. Detail along the terminator captured under stable urban seeing.",
    href: "/kalamazoo-gallery",
    image: WAXING_CRESCENT,
  },

  // ── Travel Gallery images ────────────────────────────────
  {
    id: "gallery-image-tr-1",
    kind: "gallery-image",
    publishedAt: "2026-05-25",
    title: "Milky Way above Ironwood Forest National Monument",
    category: "Travel Gallery",
    excerpt:
      "Captured between 2–3 AM in the Arizona desert, Bortle 3. A composite of 16 sky frames and a single foreground exposure with the saguaros below the galactic core. The image that anchors The Milky Way Rises.",
    href: "/travel-gallery",
    image: MILKYWAY_IRONWOOD,
  },
  {
    id: "gallery-image-tr-2",
    kind: "gallery-image",
    publishedAt: "2026-05-22",
    title: "M81 & M82 — Bode's Galaxy and the Cigar",
    category: "Travel Gallery",
    excerpt:
      "A galaxy pair in Ursa Major imaged from Bortle 4 skies outside Atlanta. Two very different galaxies, twelve million light-years apart from each other.",
    href: "/travel-gallery",
    image: M81_M82_BODES,
  },

  // ── Seestar Gallery images ───────────────────────────────
  {
    id: "gallery-image-ss-1",
    kind: "gallery-image",
    publishedAt: "2026-05-22",
    title: "M51 — The Whirlpool Galaxy (Seestar S50)",
    category: "Seestar Gallery",
    excerpt:
      "The Whirlpool and its companion NGC 5195 from a Bortle 7 backyard with a $500 smart telescope. Proof that meaningful astrophotography is accessible at almost any budget.",
    href: "/seestar-gallery",
    image: SEESTAR_M51_WHIRLPOOL,
  },
  {
    id: "gallery-image-ss-2",
    kind: "gallery-image",
    publishedAt: "2026-05-22",
    title: "M44 — The Beehive Cluster (Seestar S50)",
    category: "Seestar Gallery",
    excerpt:
      "The Beehive open cluster in Cancer captured with the ZWO Seestar S50. Star color preserved against the urban sky background by the built-in LP filter.",
    href: "/seestar-gallery",
    image: SEESTAR_M44_BEEHIVE,
  },
  {
    id: "gallery-image-ss-3",
    kind: "gallery-image",
    publishedAt: "2026-09-01",
    title: "Fireworks and Starlight (Seestar S30 Pro)",
    category: "Seestar Gallery",
    excerpt:
      "The Fireworks Galaxy (NGC 6946) and the open cluster NGC 6939 in one frame — 5,600 light-years and 25 million light-years, side by side. 9h 16m from a Bortle 7 backyard on the new Seestar S30 Pro.",
    href: "/seestar-gallery",
    image: SEESTAR_NGC6946_FIREWORKS,
  },
];
