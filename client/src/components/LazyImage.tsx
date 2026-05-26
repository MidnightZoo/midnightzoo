/* ============================================================
   LazyImage — native lazy loading + fade-in polish
   ============================================================
   Drop-in replacement for <img>. Behavior:
     • loading="lazy" by default (pass `eager` for above-the-fold).
     • Soft opacity fade-in on load so images don't snap into view.
     • Skips the fade for images already cached on mount, so there's
       no 0→1 flicker on re-navigation.

   All standard <img> props (className, style, onLoad, etc.) pass
   through. Opacity/transition are merged into the supplied style.
   ============================================================ */

import { useEffect, useRef, useState } from "react";

type LazyImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  /** Set true for hero / first-visible images to skip lazy loading
   *  and start fully opaque. Use sparingly — once per page at most. */
  eager?: boolean;
};

export default function LazyImage({
  eager,
  style,
  onLoad,
  ...rest
}: LazyImageProps) {
  const ref = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(eager === true);

  useEffect(() => {
    // If the browser already had the image cached (e.g. back nav),
    // the onLoad event may have fired before React attached the
    // handler. Sync state from the actual element so we don't render
    // an invisible img forever.
    const el = ref.current;
    if (el && el.complete && el.naturalWidth > 0) {
      setLoaded(true);
    }
  }, []);

  return (
    <img
      ref={ref}
      {...rest}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      onLoad={(e) => {
        setLoaded(true);
        onLoad?.(e);
      }}
      style={{
        ...style,
        opacity: loaded ? 1 : 0,
        transition: "opacity 450ms ease-out",
      }}
    />
  );
}
