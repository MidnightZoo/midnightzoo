/* ============================================================
   Content Registry — News selection
   ============================================================
   Picks the N items shown in the Home "News & Updates" section,
   with two guarantees so the mix always feels balanced:

     1. At least one gallery-image entry (any gallery).
     2. At least one article / review / tutorial entry.

   If the registry doesn't contain enough items to meet a
   guarantee, that slot is simply skipped — we never invent
   filler. Ties on publishedAt are broken by id (descending) so
   ordering is deterministic.
   ============================================================ */

import { contentRegistry } from "./registry";
import type { ContentItem } from "./types";

const EDITORIAL_KINDS: ContentItem["kind"][] = [
  "article",
  "review",
  "tutorial",
];

function byDateDesc(a: ContentItem, b: ContentItem): number {
  if (a.publishedAt !== b.publishedAt) {
    return a.publishedAt < b.publishedAt ? 1 : -1;
  }
  return a.id < b.id ? 1 : -1;
}

export function getLatestNews(limit: number = 3): ContentItem[] {
  const sorted = [...contentRegistry].sort(byDateDesc);
  const picked: ContentItem[] = [];
  const pickedIds = new Set<string>();

  const pick = (predicate: (item: ContentItem) => boolean) => {
    const match = sorted.find(
      (item) => !pickedIds.has(item.id) && predicate(item)
    );
    if (match) {
      picked.push(match);
      pickedIds.add(match.id);
    }
  };

  // Guarantee slot 1: newest gallery image.
  pick((item) => item.kind === "gallery-image");

  // Guarantee slot 2: newest article / review / tutorial.
  pick((item) => EDITORIAL_KINDS.includes(item.kind));

  // Fill remaining slots with next-newest of anything.
  for (const item of sorted) {
    if (picked.length >= limit) break;
    if (!pickedIds.has(item.id)) {
      picked.push(item);
      pickedIds.add(item.id);
    }
  }

  // Final sort by date so the rendered order is recency-first
  // even when the guarantee picks ran out of order.
  return picked.sort(byDateDesc).slice(0, limit);
}
