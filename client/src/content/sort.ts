/* ============================================================
   Content Registry — Shared sort helpers
   ============================================================
   Used by gallery sub-pages and the Articles list so every place
   that shows a chronological list of content uses identical
   ordering rules. Items missing publishedAt sort to the end
   (treated as oldest); ties break on a stable secondary key so
   ordering is deterministic.
   ============================================================ */

export interface DatedItem {
  id?: string;
  publishedAt?: string;
}

/** Newest-first. Items without publishedAt go to the bottom. Ties
 *  break by id (descending) so re-renders never swap order. */
export function sortByPublishedAtDesc<T extends DatedItem>(items: T[]): T[] {
  return [...items].sort((a, b) => {
    const aHas = !!a.publishedAt;
    const bHas = !!b.publishedAt;
    if (aHas && bHas) {
      if (a.publishedAt !== b.publishedAt) {
        return a.publishedAt! < b.publishedAt! ? 1 : -1;
      }
    } else if (aHas !== bHas) {
      return aHas ? -1 : 1;
    }
    const aId = a.id ?? "";
    const bId = b.id ?? "";
    if (aId === bId) return 0;
    return aId < bId ? 1 : -1;
  });
}
