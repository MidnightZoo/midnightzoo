/* ============================================================
   GalleryLightbox — Midnight Zoo
   Click image → side panel with details
   Click again (or image in panel) → full-screen zoom viewer
   ============================================================ */

import { useState, useEffect, useCallback, useRef } from "react";
import { X, ZoomIn, ZoomOut, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { formatPublishedDate } from "@/content/formatDate";

export interface GalleryImage {
  id: string;
  src: string;
  thumb?: string;
  title: string;
  object?: string;
  /** Display string for when the image was captured (e.g. "February 19, 2026"). */
  date?: string;
  /** ISO YYYY-MM-DD for when this image went live on the site. Distinct from capture date. */
  publishedAt?: string;
  location?: string;
  telescope?: string;
  camera?: string;
  mount?: string;
  filters?: string;
  integration?: string;
  bortle?: string;
  description: string;
  tags?: string[];
}

interface GalleryLightboxProps {
  images: GalleryImage[];
  initialIndex?: number;
  onClose: () => void;
}

export default function GalleryLightbox({ images, initialIndex = 0, onClose }: GalleryLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [zoomMode, setZoomMode] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const panStart = useRef({ x: 0, y: 0 });
  const panOffsetStart = useRef({ x: 0, y: 0 });

  const current = images[currentIndex];

  const goNext = useCallback(() => {
    setCurrentIndex((i) => (i + 1) % images.length);
    setZoomMode(false);
    setZoomLevel(1);
    setPanOffset({ x: 0, y: 0 });
  }, [images.length]);

  const goPrev = useCallback(() => {
    setCurrentIndex((i) => (i - 1 + images.length) % images.length);
    setZoomMode(false);
    setZoomLevel(1);
    setPanOffset({ x: 0, y: 0 });
  }, [images.length]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (zoomMode) {
          setZoomMode(false);
          setZoomLevel(1);
          setPanOffset({ x: 0, y: 0 });
        } else {
          onClose();
        }
      }
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, goNext, goPrev, zoomMode]);

  const handleZoomIn = () => setZoomLevel((z) => Math.min(z + 0.5, 4));
  const handleZoomOut = () => {
    setZoomLevel((z) => {
      const next = Math.max(z - 0.5, 1);
      if (next === 1) setPanOffset({ x: 0, y: 0 });
      return next;
    });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomLevel <= 1) return;
    setIsPanning(true);
    panStart.current = { x: e.clientX, y: e.clientY };
    panOffsetStart.current = { ...panOffset };
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isPanning) return;
    setPanOffset({
      x: panOffsetStart.current.x + (e.clientX - panStart.current.x),
      y: panOffsetStart.current.y + (e.clientY - panStart.current.y),
    });
  };
  const handleMouseUp = () => setIsPanning(false);

  const handleWheelZoom = (e: React.WheelEvent) => {
    if (!zoomMode) return;
    e.preventDefault();
    if (e.deltaY < 0) handleZoomIn();
    else handleZoomOut();
  };

  const metaFields = [
    { label: "Object", value: current.object },
    { label: "Captured", value: current.date },
    { label: "Published", value: current.publishedAt ? formatPublishedDate(current.publishedAt) : undefined },
    { label: "Location", value: current.location },
    { label: "Telescope", value: current.telescope },
    { label: "Camera", value: current.camera },
    { label: "Mount", value: current.mount },
    { label: "Filters", value: current.filters },
    { label: "Integration", value: current.integration },
    { label: "Bortle", value: current.bortle },
  ].filter((f) => f.value);

  return (
    <>
      {/* Side Panel Mode */}
      {!zoomMode && (
        <div
          className="fixed inset-0 z-[100] flex"
          style={{ background: "oklch(0.07 0.01 240 / 0.95)" }}
          onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        >
          {/* Left: Image */}
          <div className="flex-1 flex items-center justify-center p-6 relative">
            {/* Nav arrows */}
            {images.length > 1 && (
              <>
                <button
                  onClick={goPrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full transition-all duration-200 z-10"
                  style={{ background: "oklch(0.15 0.03 240 / 0.8)", color: "oklch(0.72 0.12 75)" }}
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={goNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full transition-all duration-200 z-10"
                  style={{ background: "oklch(0.15 0.03 240 / 0.8)", color: "oklch(0.72 0.12 75)" }}
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}

            <div className="relative max-w-full max-h-full">
              <img
                src={current.src}
                alt={current.title}
                className="max-h-[80vh] max-w-full object-contain cursor-zoom-in shadow-2xl"
                onClick={() => setZoomMode(true)}
                style={{ boxShadow: "0 0 60px oklch(0 0 0 / 0.8)" }}
              />
              {/* Zoom hint */}
              <div
                className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded"
                style={{ background: "oklch(0.10 0.025 240 / 0.85)" }}
              >
                <Maximize2 size={12} style={{ color: "oklch(0.72 0.12 75)" }} />
                <span className="nav-label" style={{ color: "oklch(0.65 0.01 240)", fontSize: "0.65rem" }}>
                  Click to zoom
                </span>
              </div>
            </div>
          </div>

          {/* Right: Details Panel */}
          <div
            className="w-[360px] flex-shrink-0 overflow-y-auto flex flex-col"
            style={{
              background: "oklch(0.12 0.03 240)",
              borderLeft: "1px solid oklch(1 0 0 / 0.08)",
            }}
          >
            {/* Panel header */}
            <div
              className="flex items-center justify-between px-6 py-4 sticky top-0 z-10"
              style={{
                background: "oklch(0.12 0.03 240)",
                borderBottom: "1px solid oklch(1 0 0 / 0.08)",
              }}
            >
              <span className="nav-label" style={{ color: "oklch(0.72 0.12 75)" }}>
                {currentIndex + 1} / {images.length}
              </span>
              <button
                onClick={onClose}
                className="p-1.5 rounded transition-colors duration-200"
                style={{ color: "oklch(0.60 0.01 240)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "oklch(0.93 0.005 240)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.60 0.01 240)")}
              >
                <X size={18} />
              </button>
            </div>

            <div className="px-6 py-6 flex-1">
              {/* Title */}
              <h2
                className="text-xl font-bold mb-1 leading-tight"
                style={{
                  fontFamily: "'Gilda Display', Georgia, serif",
                  color: "oklch(0.93 0.005 240)",
                }}
              >
                {current.title}
              </h2>

              {/* Gold rule */}
              <hr className="gold-rule my-4" />

              {/* Metadata table */}
              {metaFields.length > 0 && (
                <div className="mb-5 space-y-2">
                  {metaFields.map(({ label, value }) => (
                    <div key={label} className="flex gap-3">
                      <span
                        className="nav-label flex-shrink-0 w-24"
                        style={{ color: "oklch(0.72 0.12 75)", fontSize: "0.65rem" }}
                      >
                        {label}
                      </span>
                      <span
                        className="text-sm"
                        style={{
                          color: "oklch(0.78 0.005 240)",
                          fontFamily: "'Figtree', system-ui, sans-serif",
                          fontSize: "0.8rem",
                        }}
                      >
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Gold rule */}
              <hr className="gold-rule mb-4" />

              {/* Description */}
              <p
                className="leading-relaxed text-sm"
                style={{
                  color: "oklch(0.72 0.01 240)",
                  fontFamily: "'Figtree', system-ui, sans-serif",
                  fontSize: "0.875rem",
                  lineHeight: "1.7",
                }}
              >
                {current.description}
              </p>

              {/* Tags */}
              {current.tags && current.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-5">
                  {current.tags.map((tag) => (
                    <span
                      key={tag}
                      className="nav-label px-2 py-1 rounded"
                      style={{
                        fontSize: "0.6rem",
                        background: "oklch(0.72 0.12 75 / 0.12)",
                        color: "oklch(0.72 0.12 75)",
                        border: "1px solid oklch(0.72 0.12 75 / 0.25)",
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
      )}

      {/* Zoom / Full-screen Mode */}
      {zoomMode && (
        <div
          className="fixed inset-0 z-[110] flex flex-col"
          style={{ background: "oklch(0.04 0.01 240)" }}
        >
          {/* Zoom toolbar */}
          <div
            className="flex items-center justify-between px-6 py-3 flex-shrink-0"
            style={{
              background: "oklch(0.08 0.02 240 / 0.9)",
              borderBottom: "1px solid oklch(1 0 0 / 0.08)",
            }}
          >
            <h3
              className="text-sm font-semibold"
              style={{ fontFamily: "'Gilda Display', Georgia, serif", color: "oklch(0.93 0.005 240)" }}
            >
              {current.title}
            </h3>
            <div className="flex items-center gap-3">
              <button
                onClick={handleZoomOut}
                disabled={zoomLevel <= 1}
                className="p-2 rounded transition-colors disabled:opacity-30"
                style={{ color: "oklch(0.72 0.12 75)" }}
              >
                <ZoomOut size={18} />
              </button>
              <span
                className="nav-label"
                style={{ color: "oklch(0.65 0.01 240)", fontSize: "0.7rem", minWidth: "3rem", textAlign: "center" }}
              >
                {Math.round(zoomLevel * 100)}%
              </span>
              <button
                onClick={handleZoomIn}
                disabled={zoomLevel >= 4}
                className="p-2 rounded transition-colors disabled:opacity-30"
                style={{ color: "oklch(0.72 0.12 75)" }}
              >
                <ZoomIn size={18} />
              </button>
              <button
                onClick={() => { setZoomMode(false); setZoomLevel(1); setPanOffset({ x: 0, y: 0 }); }}
                className="p-2 rounded transition-colors ml-2"
                style={{ color: "oklch(0.60 0.01 240)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "oklch(0.93 0.005 240)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.60 0.01 240)")}
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Zoom image area */}
          <div
            className="flex-1 overflow-hidden flex items-center justify-center"
            style={{ cursor: zoomLevel > 1 ? (isPanning ? "grabbing" : "grab") : "zoom-out" }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onWheel={handleWheelZoom}
            onClick={() => { if (zoomLevel === 1) { setZoomMode(false); } }}
          >
            <img
              src={current.src}
              alt={current.title}
              draggable={false}
              style={{
                transform: `scale(${zoomLevel}) translate(${panOffset.x / zoomLevel}px, ${panOffset.y / zoomLevel}px)`,
                transition: isPanning ? "none" : "transform 0.2s ease",
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
                userSelect: "none",
              }}
            />
          </div>

          {/* Nav arrows in zoom mode */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); goPrev(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full z-10"
                style={{ background: "oklch(0.15 0.03 240 / 0.8)", color: "oklch(0.72 0.12 75)" }}
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); goNext(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full z-10"
                style={{ background: "oklch(0.15 0.03 240 / 0.8)", color: "oklch(0.72 0.12 75)" }}
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
}
