/* ============================================================
   Navigation — Midnight Zoo Cinematic Observatory Design
   Fixed top bar, disappears on scroll down, reappears on scroll up
   Figtree 500, tracked uppercase labels, gold accent
   ============================================================ */

import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Logo from "@/components/Logo";

const GOLD = "oklch(0.72 0.12 75)";
const GRAY = "oklch(0.75 0.005 240)";

const galleryLinks = [
  { href: "/starfront-gallery", label: "Starfront Gallery" },
  { href: "/kalamazoo-gallery", label: "Kalamazoo Gallery" },
  { href: "/travel-gallery", label: "Travel Gallery" },
  { href: "/seestar-gallery", label: "Seestar Gallery" },
];

type NavItem =
  | { kind: "link"; href: string; label: string }
  | { kind: "galleries" };

const navItems: NavItem[] = [
  { kind: "link", href: "/", label: "Home" },
  { kind: "galleries" },
  { kind: "link", href: "/articles", label: "Articles" },
  { kind: "link", href: "/gear-review", label: "Gear Review" },
  { kind: "link", href: "/tutorials", label: "Tutorials" },
  { kind: "link", href: "/store", label: "Store" },
  { kind: "link", href: "/youtube", label: "YouTube" },
  { kind: "link", href: "/about", label: "About" },
];

function isGalleriesActive(location: string) {
  return (
    location === "/galleries" ||
    galleryLinks.some((g) => location === g.href)
  );
}

function isArticlesActive(location: string) {
  return location === "/articles" || location.startsWith("/articles/");
}

function isLinkActive(href: string, location: string) {
  if (href === "/articles") return isArticlesActive(location);
  return location === href;
}

/* ── Reusable label with the existing animated underline ── */
function NavLabel({
  active,
  children,
}: {
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <span
      className="nav-label relative py-1 transition-colors duration-200"
      style={{ color: active ? GOLD : GRAY }}
    >
      {children}
      <span
        className="absolute bottom-0 left-0 h-px transition-all duration-300"
        style={{
          width: active ? "100%" : "0%",
          background: GOLD,
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
  );
}

export default function Navigation() {
  const [location, setLocation] = useLocation();
  const [visible, setVisible] = useState(true);
  const [atTop, setAtTop] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileGalleriesOpen, setMobileGalleriesOpen] = useState(false);
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
    setMobileGalleriesOpen(false);
  }, [location]);

  const galleriesActive = isGalleriesActive(location);

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
                <Logo className="text-2xl lg:text-3xl" />
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center">
              <NavigationMenu viewport={false}>
                <NavigationMenuList className="!gap-6">
                  {navItems.map((item) => {
                    if (item.kind === "galleries") {
                      return (
                        <NavigationMenuItem key="galleries">
                          {/*
                            Trigger is rendered as a bare span via the Radix
                            primitive so we can match the flat-link styling
                            exactly (no chevron, no background, no padding).
                            Click navigates to /galleries; hover opens the
                            dropdown via Radix.
                          */}
                          <NavigationMenuPrimitive.Trigger
                            onClick={(e) => {
                              e.preventDefault();
                              setLocation("/galleries");
                            }}
                            className="outline-none bg-transparent border-0 p-0 m-0 cursor-pointer"
                          >
                            <NavLabel active={galleriesActive}>
                              Galleries
                            </NavLabel>
                          </NavigationMenuPrimitive.Trigger>
                          <NavigationMenuContent
                            className="!p-0 !bg-transparent !shadow-none !border-0 !rounded-none"
                          >
                            <ul
                              className="flex flex-col min-w-[200px] py-2"
                              style={{
                                background: "oklch(0.10 0.025 240 / 0.97)",
                                border: "1px solid oklch(1 0 0 / 0.08)",
                                borderTop: `1px solid ${GOLD}`,
                                backdropFilter: "blur(12px)",
                              }}
                            >
                              {galleryLinks.map((g) => (
                                <li key={g.href}>
                                  <Link href={g.href}>
                                    <span
                                      className="nav-label block px-4 py-2.5 transition-colors duration-200"
                                      style={{
                                        color:
                                          location === g.href ? GOLD : GRAY,
                                      }}
                                      onMouseEnter={(e) =>
                                        (e.currentTarget.style.color = GOLD)
                                      }
                                      onMouseLeave={(e) =>
                                        (e.currentTarget.style.color =
                                          location === g.href ? GOLD : GRAY)
                                      }
                                    >
                                      {g.label}
                                    </span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </NavigationMenuContent>
                        </NavigationMenuItem>
                      );
                    }

                    const active = isLinkActive(item.href, location);
                    return (
                      <NavigationMenuItem key={item.href}>
                        <Link href={item.href}>
                          <NavLabel active={active}>{item.label}</NavLabel>
                        </Link>
                      </NavigationMenuItem>
                    );
                  })}
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Mobile menu toggle */}
            <button
              className="lg:hidden p-2 text-white/80 hover:text-white transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
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
              {navItems.map((item) => {
                if (item.kind === "galleries") {
                  return (
                    <div key="galleries-mobile">
                      <button
                        type="button"
                        onClick={() =>
                          setMobileGalleriesOpen(!mobileGalleriesOpen)
                        }
                        aria-expanded={mobileGalleriesOpen}
                        className="w-full flex items-center justify-between py-3 px-2 border-b transition-colors duration-200"
                        style={{ borderColor: "oklch(1 0 0 / 0.06)" }}
                      >
                        <span
                          className="nav-label"
                          style={{
                            color: galleriesActive ? GOLD : GRAY,
                          }}
                        >
                          Galleries
                        </span>
                        <ChevronDown
                          size={14}
                          className="transition-transform duration-200"
                          style={{
                            color: galleriesActive ? GOLD : GRAY,
                            transform: mobileGalleriesOpen
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                          }}
                        />
                      </button>
                      {mobileGalleriesOpen && (
                        <div
                          className="flex flex-col"
                          style={{
                            background: "oklch(0.08 0.02 240 / 0.6)",
                          }}
                        >
                          {galleryLinks.map((g) => (
                            <Link key={g.href} href={g.href}>
                              <span
                                className="nav-label block py-2.5 pl-6 pr-2 border-b transition-colors duration-200"
                                style={{
                                  color: location === g.href ? GOLD : GRAY,
                                  borderColor: "oklch(1 0 0 / 0.04)",
                                }}
                              >
                                {g.label}
                              </span>
                            </Link>
                          ))}
                          <Link href="/galleries">
                            <span
                              className="nav-label block py-2.5 pl-6 pr-2 border-b transition-colors duration-200"
                              style={{
                                color:
                                  location === "/galleries" ? GOLD : GRAY,
                                borderColor: "oklch(1 0 0 / 0.04)",
                              }}
                            >
                              View All Galleries
                            </span>
                          </Link>
                        </div>
                      )}
                    </div>
                  );
                }

                const active = isLinkActive(item.href, location);
                return (
                  <Link key={item.href} href={item.href}>
                    <span
                      className="nav-label block py-3 px-2 border-b transition-colors duration-200"
                      style={{
                        color: active ? GOLD : GRAY,
                        borderColor: "oklch(1 0 0 / 0.06)",
                      }}
                    >
                      {item.label}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
