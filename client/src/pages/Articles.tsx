/* ============================================================
   Articles — Landing page
   Modeled on Travel Gallery: hero, single article card, then
   the dashed "More Coming Soon" treatment.
   ============================================================ */

import { Link } from "wouter";
import { ArrowRight, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { HERO_MILKYWAY, MWR_HERO } from "@/lib/assets";
import { sortByPublishedAtDesc } from "@/content/sort";
import { formatPublishedDate } from "@/content/formatDate";
import LazyImage from "@/components/LazyImage";

const articles = sortByPublishedAtDesc([
  {
    id: "the-milky-way-rises",
    href: "/articles/the-milky-way-rises",
    kicker: "Field Notes · Spring 2026",
    title: "The Milky Way Rises",
    publishedAt: "2026-05-25",
    image: MWR_HERO,
    excerpt:
      "Escape reality with me in this recount of my spring Milky Way chase, and the dangers and learning experiences that come with shooting in the desert.",
    tags: ["Milky Way", "Wide Field", "Arizona", "Travel", "Dark Site"],
  },
]);

export default function Articles() {
  return (
    <div className="min-h-screen" style={{ background: "oklch(0.10 0.025 240)" }}>
      <Navigation />

      {/* Hero — same geometry as Travel Gallery */}
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
            Field Notes
          </p>
          <h1
            className="text-5xl sm:text-6xl font-bold mb-3"
            style={{
              fontFamily: "'Gilda Display', Georgia, serif",
              color: "oklch(0.97 0.005 240)",
              textShadow: "0 2px 20px oklch(0 0 0 / 0.5)",
            }}
          >
            Articles
          </h1>
          <p
            className="text-base max-w-xl leading-relaxed"
            style={{
              color: "oklch(0.80 0.005 240)",
              fontFamily: "'Figtree', system-ui, sans-serif",
            }}
          >
            Long-form writing on imaging trips, processing decisions, gear in
            the field, and the lessons that come with shooting under real
            conditions.
          </p>
        </div>
      </section>

      {/* Content — same width and rhythm as Travel Gallery */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {articles.map((article) => (
          <Link key={article.id} href={article.href}>
            <article
              className="group grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16 cursor-pointer"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <LazyImage
                  src={article.image}
                  alt={article.title}
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
                    Read Article
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
                    {article.kicker}
                  </span>
                  <span
                    className="nav-label"
                    style={{ color: "oklch(0.50 0.01 240)", fontSize: "0.65rem" }}
                  >
                    Published {formatPublishedDate(article.publishedAt)}
                  </span>
                </div>

                <h2
                  className="text-2xl sm:text-3xl font-bold mb-4 group-hover:text-amber-400 transition-colors"
                  style={{
                    fontFamily: "'Gilda Display', Georgia, serif",
                    color: "oklch(0.93 0.005 240)",
                  }}
                >
                  {article.title}
                </h2>

                <p
                  className="leading-relaxed mb-6"
                  style={{
                    color: "oklch(0.70 0.01 240)",
                    fontFamily: "'Figtree', system-ui, sans-serif",
                    fontSize: "0.95rem",
                    lineHeight: "1.8",
                  }}
                >
                  {article.excerpt}
                </p>

                <div
                  className="flex items-center gap-1.5 nav-label"
                  style={{
                    color: "oklch(0.72 0.12 75)",
                    fontSize: "0.65rem",
                  }}
                >
                  Read Article <ArrowRight size={11} />
                </div>

                {article.tags && article.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-6">
                    {article.tags.map((tag) => (
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
            </article>
          </Link>
        ))}

        {/* Coming soon placeholder — same treatment as Travel Gallery */}
        <div
          className="mt-8 py-16 text-center"
          style={{ border: "1px dashed oklch(0.72 0.12 75 / 0.3)" }}
        >
          <Clock
            size={24}
            className="mx-auto mb-4"
            style={{ color: "oklch(0.72 0.12 75 / 0.5)" }}
          />
          <p className="nav-label mb-2" style={{ color: "oklch(0.72 0.12 75)" }}>
            More Coming Soon
          </p>
          <p
            className="text-sm max-w-md mx-auto"
            style={{
              color: "oklch(0.55 0.01 240)",
              fontFamily: "'Figtree', system-ui, sans-serif",
            }}
          >
            New articles are added as imaging trips and processing breakdowns
            wrap up. Follow along on social media for updates.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
