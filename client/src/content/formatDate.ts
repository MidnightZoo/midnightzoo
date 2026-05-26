/* ============================================================
   Content Registry — Date formatting helpers
   ============================================================
   Renders ISO publishedAt dates as human-readable text for the UI.
   Storage is always ISO YYYY-MM-DD; display is centralized here so
   the format stays consistent across News cards, article headers,
   and gallery captions.
   ============================================================ */

/** "2026-05-25" → "May 25, 2026"
 *  Locale-stable and time-zone-safe: the date is parsed as a plain
 *  calendar day, not a UTC instant, so it never drifts by one day. */
export function formatPublishedDate(iso: string): string {
  const [yearStr, monthStr, dayStr] = iso.split("-");
  const year = Number(yearStr);
  const month = Number(monthStr);
  const day = Number(dayStr);
  if (!year || !month || !day) return iso;
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  return `${monthNames[month - 1]} ${day}, ${year}`;
}
