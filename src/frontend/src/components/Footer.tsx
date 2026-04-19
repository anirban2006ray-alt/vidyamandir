import { Link } from "@tanstack/react-router";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import { useLanguage } from "../hooks/use-language";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();
  const hostname = encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : "",
  );

  const categories = [
    { key: "fiction" as const, genre: "fiction" },
    { key: "bengaliClassics" as const, genre: "bengaliClassics" },
    { key: "poetry" as const, genre: "poetry" },
    { key: "childrens" as const, genre: "childrens" },
    { key: "academic" as const, genre: "academic" },
    { key: "history" as const, genre: "history" },
  ];

  const quickLinks = [
    { label: t("shop"), href: "/shop" },
    { label: t("flashSales"), href: "/flash-sales" },
    { label: t("myOrders"), href: "/orders" },
    { label: t("account"), href: "/account" },
    { label: t("wishlist"), href: "/wishlist" },
    { label: t("cart"), href: "/cart" },
  ];

  const socialLinks = [
    { Icon: Facebook, label: "Facebook", href: "https://www.facebook.com/" },
    { Icon: Instagram, label: "Instagram", href: "https://www.instagram.com/" },
    { Icon: Twitter, label: "Twitter / X", href: "https://twitter.com/" },
  ];

  return (
    <footer
      className="border-t"
      style={{
        background: "oklch(var(--card))",
        borderColor: "oklch(var(--border))",
      }}
      data-ocid="footer"
    >
      <div className="max-w-7xl mx-auto px-4 pt-12 pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="space-y-4">
          <Link to="/" className="flex items-center gap-3 group w-fit">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center transition-smooth group-hover:scale-105"
              style={{
                background:
                  "linear-gradient(135deg, oklch(var(--accent)), oklch(0.58 0.27 38))",
                boxShadow: "0 2px 8px oklch(var(--accent) / 0.3)",
              }}
            >
              <span
                className="text-sm font-display font-bold"
                style={{ color: "oklch(var(--accent-foreground))" }}
              >
                V
              </span>
            </div>
            <div className="leading-none">
              <div
                className="text-base font-display font-bold tracking-tight"
                style={{
                  color: "oklch(var(--foreground))",
                  letterSpacing: "-0.02em",
                }}
              >
                VIDYAMANDIR
              </div>
              <div
                className="text-xs font-body mt-0.5"
                style={{ color: "oklch(var(--accent))" }}
              >
                বিদ্যামন্দির
              </div>
            </div>
          </Link>
          <p
            className="text-xs leading-relaxed"
            style={{
              color: "oklch(var(--muted-foreground))",
              lineHeight: "1.7",
            }}
          >
            {t("tagline")}
          </p>
          <div
            className="space-y-2 text-xs"
            style={{ color: "oklch(var(--muted-foreground))" }}
          >
            <div className="flex items-start gap-2.5">
              <MapPin
                size={12}
                className="mt-0.5 shrink-0"
                style={{ color: "oklch(var(--accent))" }}
              />
              <span>
                Near 12h, Sitaw, Road City, Purba Bardhaman, West Bengal
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone
                size={12}
                className="shrink-0"
                style={{ color: "oklch(var(--accent))" }}
              />
              <span>+91 97367 67898</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail
                size={12}
                className="shrink-0"
                style={{ color: "oklch(var(--accent))" }}
              />
              <span>vidyamandir@bookshop.in</span>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div>
          <h3
            className="text-xs font-bold uppercase tracking-widest mb-4 pb-2.5 border-b"
            style={{
              color: "oklch(var(--foreground))",
              borderColor: "oklch(var(--border))",
              letterSpacing: "0.1em",
            }}
          >
            {t("categories")}
          </h3>
          <ul className="space-y-2.5">
            {categories.map(({ key, genre }) => (
              <li key={key}>
                <Link
                  to="/shop"
                  search={{
                    genre,
                    q: undefined,
                    lang: undefined,
                    sort: undefined,
                    page: undefined,
                  }}
                  className="footer-link text-xs inline-block"
                >
                  {t(key)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3
            className="text-xs font-bold uppercase tracking-widest mb-4 pb-2.5 border-b"
            style={{
              color: "oklch(var(--foreground))",
              borderColor: "oklch(var(--border))",
              letterSpacing: "0.1em",
            }}
          >
            Quick Links
          </h3>
          <ul className="space-y-2.5">
            {quickLinks.map(({ label, href }) => (
              <li key={href}>
                <Link to={href} className="footer-link text-xs inline-block">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social & Hours */}
        <div>
          <h3
            className="text-xs font-bold uppercase tracking-widest mb-4 pb-2.5 border-b"
            style={{
              color: "oklch(var(--foreground))",
              borderColor: "oklch(var(--border))",
              letterSpacing: "0.1em",
            }}
          >
            Follow Us
          </h3>

          {/* Social icons */}
          <div className="flex items-center gap-2.5 mb-5">
            {socialLinks.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className="w-9 h-9 rounded-full flex items-center justify-center border transition-smooth hover:scale-105"
                style={{
                  borderColor: "oklch(var(--border))",
                  color: "oklch(var(--muted-foreground))",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "oklch(var(--accent))";
                  (e.currentTarget as HTMLElement).style.color =
                    "oklch(var(--accent))";
                  (e.currentTarget as HTMLElement).style.background =
                    "oklch(var(--accent) / 0.08)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "oklch(var(--border))";
                  (e.currentTarget as HTMLElement).style.color =
                    "oklch(var(--muted-foreground))";
                  (e.currentTarget as HTMLElement).style.background =
                    "transparent";
                }}
              >
                <Icon size={14} />
              </a>
            ))}
          </div>

          <div
            className="space-y-1.5 text-xs"
            style={{ color: "oklch(var(--muted-foreground))" }}
          >
            <p>Mon–Sat: 9am – 8pm</p>
            <p>Sunday: 10am – 6pm</p>
            <div className="mt-3 space-y-1">
              <p
                className="text-xs font-semibold px-2.5 py-1 rounded-full inline-block"
                style={{
                  background: "oklch(var(--accent) / 0.1)",
                  color: "oklch(var(--accent))",
                  border: "1px solid oklch(var(--accent) / 0.2)",
                }}
              >
                COD Available
              </p>
              <br />
              <p
                className="text-xs font-semibold px-2.5 py-1 rounded-full inline-block mt-1"
                style={{
                  background: "oklch(0.65 0.18 150 / 0.1)",
                  color: "oklch(0.65 0.18 150)",
                  border: "1px solid oklch(0.65 0.18 150 / 0.2)",
                }}
              >
                Free delivery above ₹499
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t px-4 py-4"
        style={{ borderColor: "oklch(var(--border))" }}
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
          <span style={{ color: "oklch(var(--muted-foreground) / 0.7)" }}>
            © {year} Vidyamandir. All rights reserved.
          </span>
          <span style={{ color: "oklch(var(--muted-foreground) / 0.6)" }}>
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors-fast"
              style={{ color: "oklch(var(--accent))" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.textDecoration =
                  "underline";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.textDecoration = "none";
              }}
            >
              caffeine.ai
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
