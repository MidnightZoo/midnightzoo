/* ============================================================
   ScrollToTop — Reset window scroll on every wouter route change.

   wouter does not reset scroll position on client-side route
   changes, so navigating between pages can leave the new page
   scrolled to wherever the previous page was. This component
   listens for pathname changes and snaps the window back to
   (0, 0) instantly, so each navigated page starts at the top
   the way a fresh page load would.

   Notes:
   - Mounted once at the app root; the effect fires once per
     pathname change (and once on initial mount).
   - Uses behavior: "instant" so there is no visible animated
     scroll-up; it should feel like a fresh page, not a slide.
   - Skips the reset when the URL contains a hash, so deep
     links to in-page anchors (e.g. /page#section) still land
     at the section instead of the top.
   - In-page anchor navigation does not change wouter's
     location (wouter tracks pathname only, not hash), so this
     effect does not fire on hash-only changes and does not
     interfere with same-page anchor jumps.
   ============================================================ */

import { useEffect } from "react";
import { useLocation } from "wouter";

export default function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    // Respect hash deep-links: if the URL has a fragment, let the
    // browser's native anchor scrolling place the viewport.
    if (window.location.hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location]);

  return null;
}
