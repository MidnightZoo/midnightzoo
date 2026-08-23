/* ============================================================
   Footer — Midnight Zoo Cinematic Observatory Design
   Deep navy background, gold rule, social links, tagline
   ============================================================ */

import { Link } from "wouter";
import { Youtube, Instagram, Facebook, Twitter } from "lucide-react";
import Logo from "@/components/Logo";

const footerLinks = [
  { href: "/starfront-gallery", label: "Starfront Gallery" },
  { href: "/kalamazoo-gallery", label: "Kalamazoo Gallery" },
  { href: "/travel-gallery", label: "Travel Gallery" },
  { href: "/gear-review", label: "Gear Review" },
  { href: "/tutorials", label: "Tutorials" },
  { href: "/store", label: "Store" },
  { href: "/youtube", label: "YouTube" },
  { href: "/about", label: "About" },
];

const socialLinks = [
  { href: "https://www.facebook.com/midnightzoo", icon: Facebook, label: "Facebook" },
  { href: "https://www.instagram.com/midnightzooastro", icon: Instagram, label: "Instagram" },
  { href: "https://twitter.com/midnightzoo", icon: Twitter, label: "X / Twitter" },
  { href: "https://www.youtube.com/@midnightzooastro", icon: Youtube, label: "YouTube" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "oklch(0.08 0.02 240)",
        borderTop: "1px solid oklch(1 0 0 / 0.08)",
      }}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand column */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <Logo className="text-3xl" />
            </div>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "oklch(0.60 0.01 240)", fontFamily: "'Figtree', system-ui, sans-serif" }}
            >
              Midnight Zoo brings the night sky into focus through long-form imaging, technical discipline, and a commitment to realism even under poor sky conditions.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-4">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="transition-colors duration-200"
                  style={{ color: "oklch(0.55 0.01 240)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "oklch(0.72 0.12 75)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.55 0.01 240)")}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation links */}
          <div>
            <h4
              className="nav-label mb-5"
              style={{ color: "oklch(0.72 0.12 75)" }}
            >
              Explore
            </h4>
            <ul className="space-y-3">
              {footerLinks.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span
                      className="text-sm transition-colors duration-200"
                      style={{
                        color: "oklch(0.60 0.01 240)",
                        fontFamily: "'Figtree', system-ui, sans-serif",
                        fontSize: "0.8rem",
                        letterSpacing: "0.04em",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "oklch(0.72 0.12 75)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.60 0.01 240)")}
                    >
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="nav-label mb-5"
              style={{ color: "oklch(0.72 0.12 75)" }}
            >
              Connect
            </h4>
            <ul className="space-y-3">
              {footerLinks.slice(4).map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span
                      className="text-sm transition-colors duration-200"
                      style={{
                        color: "oklch(0.60 0.01 240)",
                        fontFamily: "'Figtree', system-ui, sans-serif",
                        fontSize: "0.8rem",
                        letterSpacing: "0.04em",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "oklch(0.72 0.12 75)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.60 0.01 240)")}
                    >
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Gold rule */}
        <hr className="gold-rule mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="nav-label"
            style={{ color: "oklch(0.45 0.01 240)", fontSize: "0.7rem" }}
          >
            Some stories can only be written at night™
          </p>
          <p
            className="nav-label"
            style={{ color: "oklch(0.40 0.01 240)", fontSize: "0.7rem" }}
          >
            © {new Date().getFullYear()} Midnight Zoo™. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
