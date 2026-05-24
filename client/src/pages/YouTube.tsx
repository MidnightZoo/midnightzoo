/* ============================================================
   YouTube Page — Midnight Zoo
   ============================================================
   COMING SOON MODE — the page currently renders the ComingSoon
   placeholder below. The full video-library page (per-video
   detail, chapters, behind-the-scenes structure) is preserved
   intact as YouTubePageFull() further down; nothing was deleted.

   NOTE: the preserved video data is placeholder content — every
   youtubeId is still "dQw4w9WgXcQ". Replace those with real
   video IDs before going live.

   TO GO LIVE LATER:
     1. Remove (or rename) the ComingSoon function below.
     2. Rename "function YouTubePageFull()" back to
        "export default function YouTubePage()".
   ============================================================ */

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  ROSETTE_NEBULA as HERO_NEBULA,
  M81_M82_BODES as HERO_GALAXY,
  HERO_MILKYWAY,
  ORION_COMPLEX as STARFRONT_BANNER,
  ANDROMEDA_M31 as ANDROMEDA,
  CYGNUS_LOOP as CYGNUS,
} from "@/lib/assets";
import { Youtube, Clock, Eye, ThumbsUp, ExternalLink, Play, Star } from "lucide-react";
import { Link } from "wouter";

const CHANNEL_URL = "https://www.youtube.com/@midnightzooastro";

/* ── Coming Soon placeholder (currently live) ──────────────── */
export default function YouTubePage() {
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
            <Youtube size={22} style={{ color: "oklch(0.72 0.12 75)" }} />
            <Star size={14} style={{ color: "oklch(0.72 0.12 75)" }} />
          </div>

          <p className="nav-label mb-4" style={{ color: "oklch(0.72 0.12 75)" }}>
            YouTube
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
            Behind-the-scenes breakdowns and in-depth guides tied to specific
            YouTube videos will live here as the long-form library grows. Those
            companion pages are coming soon.
          </p>

          <p
            className="text-base italic mb-10"
            style={{
              fontFamily: "'Gilda Display', Georgia, serif",
              color: "oklch(0.55 0.01 240)",
            }}
          >
            For now, head over to the channel directly to watch the latest from Midnight Zoo.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href={CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-2"
            >
              <Youtube size={16} />
              Visit Our YouTube Channel
            </a>
            <Link href="/kalamazoo-gallery">
              <button
                className="nav-label px-5 py-3 transition-colors duration-200"
                style={{
                  color: "oklch(0.72 0.12 75)",
                  border: "1px solid oklch(0.72 0.12 75 / 0.4)",
                  fontSize: "0.7rem",
                  background: "transparent",
                }}
              >
                View Kalamazoo Gallery
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

/* ============================================================
   FULL YOUTUBE VIDEO LIBRARY — preserved, not currently rendered.
   To restore: delete the ComingSoon export above and rename
   "function YouTubePageFull()" to
   "export default function YouTubePage()".
   Remember to replace placeholder youtubeId values with real ones.
   ============================================================ */

interface VideoItem {
  id: string;
  youtubeId: string;
  title: string;
  category: string;
  duration: string;
  views: string;
  likes: string;
  published: string;
  thumbnail: string;
  shortDescription: string;
  fullDescription: string;
  chapters: { time: string; title: string }[];
  tags: string[];
  featured?: boolean;
}

const videos: VideoItem[] = [
  {
    id: "v-1",
    youtubeId: "dQw4w9WgXcQ",
    title: "28 Hours on the Cygnus Loop — Complete Imaging Session",
    category: "Imaging Session",
    duration: "1:24:18",
    views: "12.4K",
    likes: "892",
    published: "March 2026",
    thumbnail: CYGNUS,
    shortDescription: "A complete walkthrough of the 28-hour Cygnus Loop imaging session from Kalamazoo — setup, acquisition, and the full PixInsight processing workflow.",
    fullDescription: "This is the most comprehensive video I've produced to date. Over 84 minutes, I walk through every step of the Cygnus Loop project — from target selection and session planning, through the actual acquisition nights, to the complete PixInsight processing workflow.\n\nThe Cygnus Loop is one of the most challenging targets from a light-polluted site. The combination of extreme size (nearly 3 degrees), faint outer structure, and the need for narrowband filters to cut through the Kalamazoo sky gradient makes it a test of both equipment and patience.\n\nThis video covers the SHO narrowband workflow in detail, including the Foraxx palette technique, StarNet star removal, and the multi-scale processing approach that reveals the delicate filamentary structure without destroying the overall tonal balance.",
    chapters: [
      { time: "0:00", title: "Introduction & Target Overview" },
      { time: "8:30", title: "Session Planning & Filter Selection" },
      { time: "22:15", title: "Night 1 — Acquisition" },
      { time: "38:40", title: "Night 2 — Acquisition" },
      { time: "52:00", title: "Calibration & Integration in PixInsight" },
      { time: "1:08:20", title: "SHO Processing & Foraxx Palette" },
      { time: "1:18:45", title: "Final Touches & Export" },
    ],
    tags: ["Cygnus Loop", "Narrowband", "SHO", "PixInsight", "Light Pollution", "Kalamazoo"],
    featured: true,
  },
  {
    id: "v-2",
    youtubeId: "dQw4w9WgXcQ",
    title: "Andromeda Galaxy — 30 Hours from a Bortle 7 City",
    category: "Imaging Session",
    duration: "58:42",
    views: "8.7K",
    likes: "634",
    published: "November 2025",
    thumbnail: ANDROMEDA,
    shortDescription: "How to capture M31 from a light-polluted city. 30+ hours of LRGB+Ha integration, full processing walkthrough, and an honest assessment of what's possible from Bortle 7.",
    fullDescription: "The Andromeda Galaxy is one of the most photographed objects in the sky — and one of the most challenging to do justice from a light-polluted site. At 2.5 million light years, it's the most distant object visible to the naked eye, and its full extent spans nearly 3 degrees of sky.\n\nThis video documents the complete project from planning to final image. The LRGB+Ha approach was chosen to maximize the detail in the galaxy's disk while preserving the natural color balance of the core. The Ha data was blended into the red channel using a luminosity mask to enhance the faint HII regions without overwhelming the broadband color.\n\nThe processing section covers the complete PixInsight workflow, including the DBE background extraction technique that's essential for urban imaging, the SPCC color calibration, and the multi-scale sharpening approach that reveals dust lane detail without introducing artifacts.",
    chapters: [
      { time: "0:00", title: "Why Andromeda from a City?" },
      { time: "6:15", title: "Equipment & Filter Selection" },
      { time: "14:30", title: "Acquisition Strategy" },
      { time: "26:00", title: "Integration & Calibration" },
      { time: "38:20", title: "LRGB Processing" },
      { time: "50:10", title: "Ha Blending & Final Processing" },
    ],
    tags: ["Andromeda", "M31", "LRGB", "Ha", "Light Pollution", "Galaxy"],
    featured: true,
  },
  {
    id: "v-3",
    youtubeId: "dQw4w9WgXcQ",
    title: "Gear Review: ZWO ASI2600MM Pro — 2 Years Later",
    category: "Gear Review",
    duration: "32:15",
    views: "15.2K",
    likes: "1.1K",
    published: "January 2026",
    thumbnail: STARFRONT_BANNER,
    shortDescription: "An honest 2-year review of the ZWO ASI2600MM Pro. What works, what doesn't, and whether it's worth the investment for urban astrophotography.",
    fullDescription: "After two years and hundreds of imaging sessions, here's my honest assessment of the ZWO ASI2600MM Pro. This is not a sponsored review — I paid full price for this camera and have no relationship with ZWO.\n\nThe short version: it's exceptional. The longer version is in this video, covering the dynamic range performance, cooling efficiency, read noise characteristics at different gain settings, and the practical workflow implications of monochrome imaging.\n\nI also cover the less-discussed aspects of the camera — the USB buffer behavior under heavy load, the cooling performance at extreme temperatures, and the comparison to the color version of the same sensor.",
    chapters: [
      { time: "0:00", title: "Introduction" },
      { time: "4:20", title: "Sensor Characteristics & Specs" },
      { time: "12:00", title: "Real-World Performance" },
      { time: "20:30", title: "Cooling & Noise Analysis" },
      { time: "26:45", title: "Verdict & Recommendations" },
    ],
    tags: ["ZWO", "ASI2600MM", "Camera", "Gear Review", "Monochrome"],
  },
  {
    id: "v-4",
    youtubeId: "dQw4w9WgXcQ",
    title: "Dark Site Trip — Michigan Upper Peninsula",
    category: "Travel",
    duration: "45:30",
    views: "6.3K",
    likes: "478",
    published: "August 2025",
    thumbnail: HERO_MILKYWAY,
    shortDescription: "A 3-day imaging expedition to the Upper Peninsula of Michigan — one of the darkest accessible sites in the Midwest. Setup, conditions, and results.",
    fullDescription: "The Upper Peninsula of Michigan offers some of the darkest skies in the Midwest, with Bortle 2 conditions accessible within a day's drive from Kalamazoo. This video documents a 3-day expedition to one of my favorite dark sites.\n\nThe video covers the logistics of a dark site trip — equipment selection, transportation, setup procedures, and the unique challenges of imaging in remote locations. It also includes the actual imaging sessions, with real-time commentary on the conditions and decision-making process.\n\nThe results speak for themselves: the same equipment that produces Bortle 7 images from Kalamazoo produces dramatically different results under Bortle 2 skies. This video is an honest comparison of what changes and what doesn't when you leave the city behind.",
    chapters: [
      { time: "0:00", title: "Planning the Trip" },
      { time: "8:00", title: "Equipment Packing & Transport" },
      { time: "18:30", title: "Site Setup & Polar Alignment" },
      { time: "28:00", title: "Night 1 — Imaging Session" },
      { time: "36:20", title: "Night 2 & Results" },
      { time: "42:00", title: "Comparison: Bortle 2 vs Bortle 7" },
    ],
    tags: ["Travel", "Dark Site", "Michigan", "Milky Way", "Bortle 2"],
  },
  {
    id: "v-5",
    youtubeId: "dQw4w9WgXcQ",
    title: "PixInsight Tutorial: Complete Narrowband Workflow",
    category: "Tutorial",
    duration: "1:12:44",
    views: "22.8K",
    likes: "1.8K",
    published: "October 2025",
    thumbnail: HERO_NEBULA,
    shortDescription: "The complete SHO narrowband processing workflow in PixInsight — from calibrated frames to finished image. Every step explained in detail.",
    fullDescription: "This is the most-requested tutorial I've produced. The complete SHO narrowband workflow in PixInsight, from raw calibrated frames to the finished image.\n\nThe workflow covers every step: WBPP for calibration and integration, DBE for background extraction, SPCC for color calibration, the Foraxx palette technique for natural-looking SHO color, StarNet for star removal, and the multi-scale processing approach that's become standard in the community.\n\nThis tutorial is designed for intermediate PixInsight users who are comfortable with the basic interface but want to develop a systematic, repeatable narrowband workflow. Every step is explained in the context of why it's done, not just how.",
    chapters: [
      { time: "0:00", title: "Introduction & Workflow Overview" },
      { time: "6:30", title: "WBPP Calibration & Integration" },
      { time: "18:00", title: "DBE Background Extraction" },
      { time: "28:45", title: "SPCC Color Calibration" },
      { time: "40:00", title: "Foraxx Palette Technique" },
      { time: "54:20", title: "StarNet & Multi-Scale Processing" },
      { time: "1:06:00", title: "Final Adjustments & Export" },
    ],
    tags: ["PixInsight", "Tutorial", "SHO", "Narrowband", "Processing"],
  },
  {
    id: "v-6",
    youtubeId: "dQw4w9WgXcQ",
    title: "Milky Way Photography — Complete Guide",
    category: "Tutorial",
    duration: "38:55",
    views: "31.5K",
    likes: "2.4K",
    published: "June 2025",
    thumbnail: HERO_MILKYWAY,
    shortDescription: "Everything you need to know about Milky Way photography — from planning and location scouting to camera settings, stacking, and processing.",
    fullDescription: "The Milky Way is the most accessible target in astrophotography — no telescope required, and the results are immediately rewarding. This guide covers everything from planning your first session to advanced techniques for experienced imagers.\n\nTopics include: planning tools (PhotoPills, Stellarium), location scouting for dark skies, camera settings for different conditions, the difference between single-frame and tracked/stacked approaches, and the processing workflow from raw files to finished panorama.\n\nThis is the video I wish I had when I started. It's designed to be useful whether you're shooting your first Milky Way with a kit lens or planning a dedicated tracked panorama with a star tracker.",
    chapters: [
      { time: "0:00", title: "Introduction" },
      { time: "5:00", title: "Planning & Location Scouting" },
      { time: "14:30", title: "Camera Settings & Exposure" },
      { time: "22:00", title: "Tracked vs Untracked" },
      { time: "29:15", title: "Processing in Lightroom & Photoshop" },
      { time: "35:30", title: "Panorama Stitching" },
    ],
    tags: ["Milky Way", "Wide Field", "Tutorial", "Beginner", "Landscape"],
  },
];

function VideoCard({ video, featured = false }: { video: VideoItem; featured?: boolean }) {
  const youtubeUrl = `https://www.youtube.com/watch?v=${video.youtubeId}`;

  return (
    <article
      className="group overflow-hidden"
      style={{
        background: "oklch(0.13 0.03 240)",
        border: "1px solid oklch(1 0 0 / 0.08)",
      }}
    >
      {/* Thumbnail */}
      <a href={youtubeUrl} target="_blank" rel="noopener noreferrer" className="block relative overflow-hidden">
        <div className={featured ? "aspect-video" : "aspect-video"}>
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        {/* Play button overlay */}
        <div
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: "oklch(0.07 0.01 240 / 0.5)" }}
        >
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center"
            style={{ background: "oklch(0.72 0.12 75)" }}
          >
            <Play size={20} fill="oklch(0.10 0.025 240)" style={{ color: "oklch(0.10 0.025 240)", marginLeft: "2px" }} />
          </div>
        </div>
        {/* Duration badge */}
        <div
          className="absolute bottom-2 right-2 nav-label px-2 py-0.5"
          style={{
            background: "oklch(0.07 0.01 240 / 0.9)",
            color: "oklch(0.90 0.005 240)",
            fontSize: "0.6rem",
          }}
        >
          {video.duration}
        </div>
        {/* Category badge */}
        <div
          className="absolute top-2 left-2 nav-label px-2 py-0.5"
          style={{
            background: "oklch(0.72 0.12 75)",
            color: "oklch(0.10 0.025 240)",
            fontSize: "0.55rem",
          }}
        >
          {video.category}
        </div>
      </a>

      {/* Content */}
      <div className="p-5">
        <a href={youtubeUrl} target="_blank" rel="noopener noreferrer">
          <h3
            className="font-bold mb-2 leading-snug group-hover:text-amber-400 transition-colors"
            style={{
              fontFamily: "'Gilda Display', Georgia, serif",
              color: "oklch(0.90 0.005 240)",
              fontSize: featured ? "1.1rem" : "0.95rem",
            }}
          >
            {video.title}
          </h3>
        </a>

        {/* Stats */}
        <div className="flex items-center gap-4 mb-3">
          <span className="nav-label flex items-center gap-1" style={{ color: "oklch(0.50 0.01 240)", fontSize: "0.6rem" }}>
            <Eye size={10} /> {video.views}
          </span>
          <span className="nav-label flex items-center gap-1" style={{ color: "oklch(0.50 0.01 240)", fontSize: "0.6rem" }}>
            <ThumbsUp size={10} /> {video.likes}
          </span>
          <span className="nav-label" style={{ color: "oklch(0.45 0.01 240)", fontSize: "0.6rem" }}>
            {video.published}
          </span>
        </div>

        <p
          className="text-sm leading-relaxed mb-4"
          style={{
            color: "oklch(0.60 0.01 240)",
            fontFamily: "'Figtree', system-ui, sans-serif",
            fontSize: "0.83rem",
          }}
        >
          {video.shortDescription}
        </p>

        {/* Full description (featured only) */}
        {featured && (
          <div className="mb-4">
            <div
              className="leading-relaxed"
              style={{
                color: "oklch(0.62 0.01 240)",
                fontFamily: "'Figtree', system-ui, sans-serif",
                fontSize: "0.85rem",
                lineHeight: "1.75",
              }}
            >
              {video.fullDescription.split("\n\n").map((para, i) => (
                <p key={i} className={i > 0 ? "mt-3" : ""}>{para}</p>
              ))}
            </div>
          </div>
        )}

        {/* Chapters */}
        {featured && video.chapters.length > 0 && (
          <div className="mb-4">
            <p className="nav-label mb-2" style={{ color: "oklch(0.72 0.12 75)", fontSize: "0.6rem" }}>
              Chapters
            </p>
            <div className="space-y-1">
              {video.chapters.map((ch) => (
                <div key={ch.time} className="flex items-center gap-3">
                  <span
                    className="nav-label flex-shrink-0"
                    style={{ color: "oklch(0.72 0.12 75)", fontSize: "0.6rem", minWidth: "3rem" }}
                  >
                    {ch.time}
                  </span>
                  <span
                    className="text-xs"
                    style={{ color: "oklch(0.65 0.01 240)", fontFamily: "'Figtree', system-ui, sans-serif", fontSize: "0.78rem" }}
                  >
                    {ch.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {video.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="nav-label px-2 py-0.5"
              style={{
                fontSize: "0.55rem",
                background: "oklch(0.72 0.12 75 / 0.10)",
                color: "oklch(0.72 0.12 75)",
                border: "1px solid oklch(0.72 0.12 75 / 0.2)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 nav-label transition-colors duration-200"
          style={{ color: "oklch(0.72 0.12 75)", fontSize: "0.65rem" }}
        >
          <Youtube size={13} />
          Watch on YouTube
          <ExternalLink size={10} />
        </a>
      </div>
    </article>
  );
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function YouTubePageFull() {
  const featured = videos.filter((v) => v.featured);
  const rest = videos.filter((v) => !v.featured);

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
          <div className="flex items-start gap-6">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: "oklch(0.72 0.12 75 / 0.15)", border: "1px solid oklch(0.72 0.12 75 / 0.3)" }}
            >
              <Youtube size={28} style={{ color: "oklch(0.72 0.12 75)" }} />
            </div>
            <div>
              <p className="nav-label mb-2" style={{ color: "oklch(0.72 0.12 75)" }}>
                YouTube
              </p>
              <h1
                className="text-5xl sm:text-6xl font-bold mb-4"
                style={{ fontFamily: "'Gilda Display', Georgia, serif", color: "oklch(0.93 0.005 240)" }}
              >
                Video Library
              </h1>
              <p
                className="text-lg max-w-2xl leading-relaxed"
                style={{ color: "oklch(0.65 0.01 240)", fontFamily: "'Figtree', system-ui, sans-serif" }}
              >
                Behind-the-scenes imaging sessions, complete processing walkthroughs, gear reviews, and travel documentaries. Every video is a complete story from setup to final image.
              </p>
              <a
                href="https://www.youtube.com/@midnightzooastro"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 btn-gold"
              >
                <Youtube size={16} />
                Subscribe on YouTube
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Featured videos */}
        <div className="mb-16">
          <p className="nav-label mb-6" style={{ color: "oklch(0.72 0.12 75)" }}>
            Featured Videos
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featured.map((video) => (
              <VideoCard key={video.id} video={video} featured />
            ))}
          </div>
        </div>

        <hr className="gold-rule mb-12" />

        {/* All videos */}
        <div>
          <p className="nav-label mb-6" style={{ color: "oklch(0.72 0.12 75)" }}>
            All Videos
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {rest.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </div>

        {/* Channel CTA */}
        <div
          className="mt-16 p-8 text-center"
          style={{
            background: "oklch(0.13 0.03 240)",
            border: "1px solid oklch(0.72 0.12 75 / 0.25)",
          }}
        >
          <Youtube size={32} className="mx-auto mb-4" style={{ color: "oklch(0.72 0.12 75)" }} />
          <h3
            className="text-2xl font-bold mb-3"
            style={{ fontFamily: "'Gilda Display', Georgia, serif", color: "oklch(0.93 0.005 240)" }}
          >
            Subscribe for New Videos
          </h3>
          <p
            className="text-sm leading-relaxed max-w-lg mx-auto mb-6"
            style={{ color: "oklch(0.62 0.01 240)", fontFamily: "'Figtree', system-ui, sans-serif" }}
          >
            New videos are published regularly — imaging sessions, processing tutorials, gear reviews, and dark site expeditions. Subscribe to be notified when new content is posted.
          </p>
          <a
            href="https://www.youtube.com/@midnightzooastro"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-flex items-center gap-2"
          >
            <Youtube size={16} />
            Visit YouTube Channel
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
