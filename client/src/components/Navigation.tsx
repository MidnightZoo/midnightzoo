/* ============================================================
   Navigation — Midnight Zoo Cinematic Observatory Design
   Fixed top bar, disappears on scroll down, reappears on scroll up
   Figtree 500, tracked uppercase labels, gold accent
   ============================================================ */

import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/starfront-gallery", label: "Starfront Gallery" },
  { href: "/kalamazoo-gallery", label: "Kalamazoo Gallery" },
  { href: "/travel-gallery", label: "Travel Gallery" },
  { href: "/seestar-gallery", label: "Seestar Gallery" },
  { href: "/gear-review", label: "Gear Review" },
  { href: "/tutorials", label: "Tutorials" },
  { href: "/store", label: "Store" },
  { href: "/youtube", label: "YouTube" },
  { href: "/about", label: "About" },
];

export default function Navigation() {
  const [location] = useLocation();
  const [visible, setVisible] = useState(true);
  const [atTop, setAtTop] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setAtTop(currentY < 20);
      if (currentY < lastScrollY.current || currentY < 80) {
        setVisible(true);
      } else if (currentY > lastScrollY.current && currentY > 80) {
        setVisible(false);
        setMobileOpen(false);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-transform duration-300"
        style={{
          transform: visible ? "translateY(0)" : "translateY(-100%)",
          background: atTop
            ? "linear-gradient(to bottom, oklch(0.07 0.01 240 / 0.95), transparent)"
            : "oklch(0.10 0.025 240 / 0.97)",
          backdropFilter: atTop ? "none" : "blur(12px)",
          borderBottom: atTop ? "none" : "1px solid oklch(1 0 0 / 0.08)",
        }}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/">
              <div className="flex items-center gap-3 group">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663525875532/hDoq8Cj6JbDrB4hz6G3Gcz/midnight_zoo_logo_da38cb1b.png"
                  alt="Midnight Zoo"
                  className="h-10 lg:h-12 w-auto object-contain transition-opacity duration-200 group-hover:opacity-80"
                />
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span
                    className="nav-label relative py-1 transition-colors duration-200"
                    style={{
                      color:
                        location === link.href
                          ? "oklch(0.72 0.12 75)"
                          : "oklch(0.75 0.005 240)",
                    }}
                  >
                    {link.label}
                    <span
                      className="absolute bottom-0 left-0 h-px transition-all duration-300"
                      style={{
                        width: location === link.href ? "100%" : "0%",
                        background: "oklch(0.72 0.12 75)",
                      }}
                    />
                    <span
                      className="absolute bottom-0 left-0 h-px transition-all duration-300 opacity-0 hover:opacity-100"
                      style={{
                        width: "100%",
                        background: "oklch(0.72 0.12 75 / 0.5)",
                      }}
                    />
                  </span>
                </Link>
              ))}
            </div>

            {/* Mobile menu toggle */}
            <button
              className="lg:hidden p-2 text-white/80 hover:text-white transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div
            className="lg:hidden border-t"
            style={{
              background: "oklch(0.10 0.025 240 / 0.98)",
              borderColor: "oklch(1 0 0 / 0.08)",
            }}
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span
                    className="nav-label block py-3 px-2 border-b transition-colors duration-200"
                    style={{
                      color:
                        location === link.href
                          ? "oklch(0.72 0.12 75)"
                          : "oklch(0.75 0.005 240)",
                      borderColor: "oklch(1 0 0 / 0.06)",
                    }}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
