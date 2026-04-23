import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "@tanstack/react-router";
import { ShieldCheck } from "lucide-react";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageCircleMore,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useLanguage } from "../hooks/use-language";
import { useSubmitEnquiry } from "../hooks/useQueries";
import { getErrorMessage } from "../lib/utils";

interface EnquiryForm {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const EMPTY: EnquiryForm = { name: "", email: "", phone: "", message: "" };

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();
  const hostname = encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : "",
  );
  const [form, setForm] = useState<EnquiryForm>(EMPTY);
  const [submitted, setSubmitted] = useState(false);
  const { mutate: submitEnquiry, isPending } = useSubmitEnquiry();

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

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitEnquiry(form, {
      onSuccess: (result) => {
        if (result.__kind__ === "ok") {
          setSubmitted(true);
          setForm(EMPTY);
        } else {
          toast.error(getErrorMessage(result.err));
        }
      },
      onError: () => toast.error("Failed to send enquiry."),
    });
  };

  return (
    <footer
      className="border-t"
      style={{
        background: "oklch(var(--card))",
        borderColor: "oklch(var(--border))",
      }}
      data-ocid="footer"
    >
      {/* ── Contact Us / Enquiry Section ── */}
      <div
        className="border-b"
        style={{ borderColor: "oklch(var(--border))" }}
        data-ocid="footer.contact_section"
      >
        <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Store contact info */}
          <div className="space-y-6">
            <div>
              <h2
                className="font-display font-bold text-lg mb-1"
                style={{ color: "oklch(var(--foreground))" }}
              >
                {t("contactUs")}
                <span
                  className="text-sm font-body font-normal ml-2"
                  style={{ color: "oklch(var(--accent))" }}
                >
                  / যোগাযোগ করুন
                </span>
              </h2>
              <p
                className="text-xs"
                style={{ color: "oklch(var(--muted-foreground))" }}
              >
                {t("enquirySubtitle")}
              </p>
            </div>

            <div className="space-y-3">
              <a
                href="https://wa.me/919475727810"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="footer.whatsapp_button"
                className="flex items-center gap-3 w-fit px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-105 hover:shadow-lg"
                style={{
                  background: "oklch(0.60 0.20 148 / 0.15)",
                  border: "1px solid oklch(0.60 0.20 148 / 0.35)",
                  color: "oklch(0.60 0.20 148)",
                }}
              >
                <MessageCircleMore size={18} />
                {t("whatsappChat")}
              </a>

              <div
                className="space-y-2 text-xs"
                style={{ color: "oklch(var(--muted-foreground))" }}
              >
                <div className="flex items-start gap-2.5">
                  <MapPin
                    size={13}
                    className="mt-0.5 shrink-0"
                    style={{ color: "oklch(var(--accent))" }}
                  />
                  <span>
                    Balgona, GT Road, Purba Bardhaman, West Bengal — Pin 713125
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone
                    size={13}
                    className="shrink-0"
                    style={{ color: "oklch(var(--accent))" }}
                  />
                  <a href="tel:+919475727810" className="hover:underline">
                    +91 94757 27810
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail
                    size={13}
                    className="shrink-0"
                    style={{ color: "oklch(var(--accent))" }}
                  />
                  <a
                    href="mailto:anirbanray030000@gmail.com"
                    className="hover:underline"
                  >
                    anirbanray030000@gmail.com
                  </a>
                </div>
              </div>

              <div
                className="space-y-1 text-xs"
                style={{ color: "oklch(var(--muted-foreground))" }}
              >
                <p>Mon–Sat: 9am – 8pm</p>
                <p>Sunday: 10am – 6pm</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{
                      background: "oklch(var(--accent) / 0.1)",
                      color: "oklch(var(--accent))",
                      border: "1px solid oklch(var(--accent) / 0.2)",
                    }}
                  >
                    COD Available
                  </span>
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{
                      background: "oklch(0.65 0.18 150 / 0.1)",
                      color: "oklch(0.65 0.18 150)",
                      border: "1px solid oklch(0.65 0.18 150 / 0.2)",
                    }}
                  >
                    Free delivery above ₹499
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Enquiry Form */}
          <div>
            <h3
              className="font-display font-bold text-sm uppercase tracking-widest mb-4"
              style={{ color: "oklch(var(--foreground))" }}
            >
              {t("enquiryTitle")}
            </h3>

            {submitted ? (
              <div
                className="flex flex-col items-center gap-4 py-10 rounded-2xl border"
                style={{
                  borderColor: "oklch(var(--border))",
                  background: "oklch(0.60 0.20 148 / 0.05)",
                }}
                data-ocid="footer.enquiry.success_state"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ background: "oklch(0.60 0.20 148 / 0.15)" }}
                >
                  <Send size={22} style={{ color: "oklch(0.60 0.20 148)" }} />
                </div>
                <div className="text-center">
                  <p className="font-bold text-base">{t("enquirySuccess")}</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {t("enquirySuccessMsg")}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-semibold underline"
                  style={{ color: "oklch(var(--accent))" }}
                >
                  Send another
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleEnquirySubmit}
                className="space-y-3"
                data-ocid="footer.enquiry_form"
              >
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <Label className="text-xs text-muted-foreground font-semibold">
                      {t("enquiryName")} *
                    </Label>
                    <Input
                      value={form.name}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, name: e.target.value }))
                      }
                      className="input-field h-9 rounded-lg text-sm"
                      data-ocid="footer.enquiry.name_input"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <Label className="text-xs text-muted-foreground font-semibold">
                      {t("enquiryPhone")} *
                    </Label>
                    <Input
                      value={form.phone}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, phone: e.target.value }))
                      }
                      className="input-field h-9 rounded-lg text-sm"
                      data-ocid="footer.enquiry.phone_input"
                      placeholder="+91 XXXXX XXXXX"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <Label className="text-xs text-muted-foreground font-semibold">
                    {t("enquiryEmail")} *
                  </Label>
                  <Input
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }
                    className="input-field h-9 rounded-lg text-sm"
                    data-ocid="footer.enquiry.email_input"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <Label className="text-xs text-muted-foreground font-semibold">
                    {t("enquiryMessage")} *
                  </Label>
                  <Textarea
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    className="rounded-lg text-sm resize-none"
                    data-ocid="footer.enquiry.message_input"
                    rows={3}
                    placeholder="Your question or feedback..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isPending}
                  data-ocid="footer.enquiry.submit_button"
                  className="cta-primary w-full flex items-center justify-center gap-2 py-2.5 text-sm disabled:opacity-60"
                >
                  {isPending ? (
                    <span className="flex items-center gap-2">
                      <span className="w-3.5 h-3.5 rounded-full border-2 border-current border-t-transparent animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <>
                      <Send size={14} />
                      {t("enquirySubmit")}
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* ── Main Footer Columns ── */}
      <div className="max-w-7xl mx-auto px-4 pt-10 pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
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
              <span>Balgona, GT Road, Purba Bardhaman, Pin-713125</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone
                size={12}
                className="shrink-0"
                style={{ color: "oklch(var(--accent))" }}
              />
              <a href="tel:+919475727810" className="hover:underline">
                +91 94757 27810
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail
                size={12}
                className="shrink-0"
                style={{ color: "oklch(var(--accent))" }}
              />
              <a
                href="mailto:anirbanray030000@gmail.com"
                className="hover:underline truncate"
              >
                anirbanray030000@gmail.com
              </a>
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

        {/* Social */}
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
            <a
              href="https://wa.me/919475727810"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              title="WhatsApp"
              className="w-9 h-9 rounded-full flex items-center justify-center border transition-smooth hover:scale-105"
              style={{
                borderColor: "oklch(0.60 0.20 148 / 0.4)",
                color: "oklch(0.60 0.20 148)",
              }}
              data-ocid="footer.whatsapp_icon_button"
            >
              <MessageCircleMore size={14} />
            </a>
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
        {/* Staff Admin link — subtle, developer access */}
        <div
          className="max-w-7xl mx-auto mt-3 pt-3 border-t flex justify-center"
          style={{ borderColor: "oklch(var(--border) / 0.4)" }}
        >
          <Link
            to="/admin"
            className="inline-flex items-center gap-1.5 text-xs transition-smooth"
            style={{ color: "oklch(var(--muted-foreground) / 0.4)" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color =
                "oklch(var(--accent))";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color =
                "oklch(var(--muted-foreground) / 0.4)";
            }}
            data-ocid="footer.staff_admin_link"
          >
            <ShieldCheck size={11} />
            Staff Admin
          </Link>
        </div>
      </div>
    </footer>
  );
}
