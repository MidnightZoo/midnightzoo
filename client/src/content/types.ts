/* ============================================================
   Content Registry — Type definitions
   ============================================================
   The single source of truth for "what got published when" across
   the site. Powers the Home News & Updates section today, and is
   designed so the data source can be swapped (TS array → REST/DB)
   without changing any consumer code.

   Keep these rules when adding entries to the registry:
     - id MUST be stable and unique (it becomes a DB primary key
       and is what comments will attach to). Never reuse an id.
     - publishedAt MUST be ISO YYYY-MM-DD (not display text).
       Display formatting happens at render time.
   ============================================================ */

export type ContentKind =
  | "article"
  | "review"
  | "tutorial"
  | "gallery-image";

export interface ContentItem {
  /** Stable string ID — becomes the DB primary key later.
   *  Convention: "<kind>-<slug>" e.g. "article-milky-way-rises",
   *  "gallery-image-kzoo-1". Never reuse or reorder. */
  id: string;

  kind: ContentKind;

  /** ISO date string (YYYY-MM-DD). When this item became visible
   *  to site visitors. Distinct from any "captured on" date a
   *  gallery image may have. */
  publishedAt: string;

  /** Display title shown in News cards. */
  title: string;

  /** Short label rendered on the card ("New Image", "Article",
   *  "Tutorial", "Gear Review", etc.). */
  category: string;

  /** 1–3 sentence teaser used by the News card. */
  excerpt: string;

  /** Internal link to the content. For gallery images this points
   *  at the parent gallery page. */
  href: string;

  /** Image URL used as the card thumbnail. */
  image: string;
}
