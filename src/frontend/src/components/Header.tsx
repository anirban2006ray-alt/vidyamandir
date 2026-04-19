import { Badge } from "@/components/ui/badge";
import { Link, useNavigate } from "@tanstack/react-router";
import {
  Heart,
  LayoutDashboard,
  LogIn,
  Menu,
  Search,
  ShoppingCart,
  User,
  X,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useAuth, useIsAdmin } from "../hooks/use-auth";
import { useCart } from "../hooks/use-cart";
import { useLanguage } from "../hooks/use-language";
import { LanguageToggle } from "./LanguageToggle";

export function Header() {
  const { lang, t } = useLanguage();
  const { isAuthenticated, isInitializing, isLoggingIn, login, logout } =
    useAuth();
  const { data: isAdmin } = useIsAdmin();
  const { totalItems } = useCart();
  const [searchInput, setSearchInput] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleSearchChange = useCallback(
    (value: string) => {
      setSearchInput(value);
      if (debounceRef.current) clearTimeout(debounceRef.current);
      if (!value.trim()) return;
      debounceRef.current = setTimeout(() => {
        void navigate({
          to: "/shop",
          search: {
            q: value.trim(),
            genre: undefined,
            lang: undefined,
            sort: undefined,
            page: 1,
          },
        });
      }, 300);
    },
    [navigate],
  );

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (debounceRef.current) clearTimeout(debounceRef.current);
    if (!searchInput.trim()) return;
    void navigate({
      to: "/shop",
      search: {
        q: searchInput.trim(),
        genre: undefined,
        lang: undefined,
        sort: undefined,
        page: 1,
      },
    });
    setSearchInput("");
  };

  useEffect(() => {
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const searchPlaceholder = lang === "bn" ? "বই খুঁজুন..." : "Search books...";

  return (
    <header
      className="sticky top-0 z-50"
      style={{
        background: "oklch(var(--primary))",
        boxShadow: "0 2px 16px rgba(0,0,0,0.35)",
      }}
      data-ocid="header"
    >
      {/* Top bar */}
      <div
        className="border-b"
        style={{ borderColor: "oklch(var(--primary) / 0.25)" }}
      >
        <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link
            to="/"
            data-ocid="header.logo_link"
            className="flex items-center gap-3 shrink-0 group"
          >
            {/* Logo mark */}
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center relative overflow-hidden transition-smooth group-hover:scale-105"
              style={{
                background:
                  "linear-gradient(135deg, oklch(var(--accent)), oklch(0.58 0.27 38))",
                boxShadow: "0 2px 8px oklch(var(--accent) / 0.4)",
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
                  color: "oklch(var(--primary-foreground))",
                  letterSpacing: "-0.02em",
                }}
              >
                VIDYAMANDIR
              </div>
              <div
                className="text-xs font-body mt-0.5 hidden sm:block"
                style={{ color: "oklch(var(--accent))", opacity: 0.9 }}
              >
                বিদ্যামন্দির
              </div>
            </div>
          </Link>

          {/* Desktop search */}
          <form
            onSubmit={handleSearchSubmit}
            className="flex-1 max-w-xl hidden md:flex"
          >
            <div
              className="flex w-full rounded-full overflow-hidden"
              style={{
                background: "oklch(var(--primary-foreground) / 0.08)",
                border: "1px solid oklch(var(--primary-foreground) / 0.15)",
                boxShadow: "inset 0 1px 3px rgba(0,0,0,0.15)",
              }}
            >
              <input
                type="text"
                value={searchInput}
                onChange={(e) => handleSearchChange(e.target.value)}
                placeholder={searchPlaceholder}
                data-ocid="header.search_input"
                className="flex-1 bg-transparent px-4 py-2 text-sm outline-none min-w-0"
                style={{
                  color: "oklch(var(--primary-foreground))",
                  caretColor: "oklch(var(--accent))",
                }}
              />
              <button
                type="submit"
                data-ocid="header.search_button"
                className="px-4 py-2 rounded-r-full transition-smooth hover:opacity-90 active:scale-95 flex items-center gap-1.5 text-sm font-semibold shrink-0"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(var(--accent)), oklch(0.58 0.27 38))",
                  color: "oklch(var(--accent-foreground))",
                }}
                aria-label="Search"
              >
                <Search size={14} />
              </button>
            </div>
          </form>

          {/* Right actions */}
          <div className="flex items-center gap-1.5 shrink-0">
            <LanguageToggle />

            {isAuthenticated ? (
              <div className="flex items-center gap-0.5">
                {isAdmin && (
                  <Link
                    to="/admin"
                    data-ocid="header.admin_link"
                    className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-smooth"
                    style={{ color: "oklch(var(--accent))" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background =
                        "oklch(var(--accent) / 0.12)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background =
                        "transparent";
                    }}
                  >
                    <LayoutDashboard size={13} />
                    <span>{t("admin")}</span>
                  </Link>
                )}
                {/* Icon buttons with pill hover */}
                {[
                  {
                    to: "/wishlist",
                    icon: Heart,
                    label: t("wishlist"),
                    ocid: "header.wishlist_link",
                    showBadge: false,
                  },
                  {
                    to: "/account",
                    icon: User,
                    label: t("account"),
                    ocid: "header.account_link",
                    showBadge: false,
                  },
                ].map(({ to, icon: Icon, label, ocid }) => (
                  <Link
                    key={to}
                    to={to}
                    data-ocid={ocid}
                    aria-label={label}
                    className="p-2 rounded-lg transition-smooth"
                    style={{ color: "oklch(var(--primary-foreground) / 0.8)" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background =
                        "oklch(var(--primary-foreground) / 0.10)";
                      (e.currentTarget as HTMLElement).style.color =
                        "oklch(var(--accent))";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background =
                        "transparent";
                      (e.currentTarget as HTMLElement).style.color =
                        "oklch(var(--primary-foreground) / 0.8)";
                    }}
                  >
                    <Icon size={18} />
                  </Link>
                ))}

                {/* Cart with badge */}
                <Link
                  to="/cart"
                  data-ocid="header.cart_link"
                  aria-label={t("cart")}
                  className="relative p-2 rounded-lg transition-smooth"
                  style={{ color: "oklch(var(--primary-foreground) / 0.8)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "oklch(var(--primary-foreground) / 0.10)";
                    (e.currentTarget as HTMLElement).style.color =
                      "oklch(var(--accent))";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "transparent";
                    (e.currentTarget as HTMLElement).style.color =
                      "oklch(var(--primary-foreground) / 0.8)";
                  }}
                >
                  <ShoppingCart size={18} />
                  {totalItems > 0 && (
                    <Badge
                      className="absolute -top-0.5 -right-0.5 h-4 min-w-4 px-0.5 text-[10px] font-bold rounded-full flex items-center justify-center border-0"
                      style={{
                        background: "oklch(var(--accent))",
                        color: "oklch(var(--accent-foreground))",
                        boxShadow: "0 0 0 2px oklch(var(--primary))",
                      }}
                    >
                      {totalItems > 9 ? "9+" : totalItems}
                    </Badge>
                  )}
                </Link>

                <button
                  type="button"
                  onClick={logout}
                  data-ocid="header.logout_button"
                  className="hidden sm:flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium border transition-smooth"
                  style={{
                    borderColor: "oklch(var(--primary-foreground) / 0.15)",
                    color: "oklch(var(--primary-foreground) / 0.6)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "oklch(var(--accent) / 0.5)";
                    (e.currentTarget as HTMLElement).style.color =
                      "oklch(var(--accent))";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "oklch(var(--primary-foreground) / 0.15)";
                    (e.currentTarget as HTMLElement).style.color =
                      "oklch(var(--primary-foreground) / 0.6)";
                  }}
                >
                  {t("logout")}
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={login}
                disabled={isInitializing || isLoggingIn}
                data-ocid="header.login_button"
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold transition-smooth disabled:opacity-50 active:scale-95"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(var(--accent)), oklch(0.58 0.27 38))",
                  color: "oklch(var(--accent-foreground))",
                  boxShadow: "0 2px 8px oklch(var(--accent) / 0.4)",
                }}
              >
                <LogIn size={13} />
                {isInitializing ? t("loading") : t("login")}
              </button>
            )}

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-ocid="header.mobile_menu_button"
              className="md:hidden p-2 rounded-lg transition-smooth"
              style={{ color: "oklch(var(--primary-foreground) / 0.8)" }}
              aria-label="Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop nav bar */}
      <nav
        className="hidden md:flex px-4"
        style={{ background: "oklch(var(--primary) / 0.85)" }}
        data-ocid="header.nav"
      >
        <div className="max-w-7xl mx-auto flex items-center gap-0">
          {[
            {
              to: "/" as const,
              label: t("home"),
              ocid: "header.nav_home_link",
            },
            {
              to: "/shop" as const,
              label: t("shop"),
              ocid: "header.nav_shop_link",
            },
            {
              to: "/flash-sales" as const,
              label: t("flashSales"),
              ocid: "header.nav_flash-sales_link",
            },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              data-ocid={item.ocid}
              className="px-4 py-2.5 text-xs font-semibold transition-smooth relative group"
              style={{ color: "oklch(var(--primary-foreground) / 0.75)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color =
                  "oklch(var(--accent))";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color =
                  "oklch(var(--primary-foreground) / 0.75)";
              }}
            >
              {item.label}
              <span
                className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-smooth"
                style={{ background: "oklch(var(--accent))" }}
              />
            </Link>
          ))}
          {isAuthenticated && (
            <Link
              to="/orders"
              data-ocid="header.nav_orders_link"
              className="px-4 py-2.5 text-xs font-semibold transition-smooth relative group"
              style={{ color: "oklch(var(--primary-foreground) / 0.75)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color =
                  "oklch(var(--accent))";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color =
                  "oklch(var(--primary-foreground) / 0.75)";
              }}
            >
              {t("myOrders")}
              <span
                className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-smooth"
                style={{ background: "oklch(var(--accent))" }}
              />
            </Link>
          )}
        </div>
      </nav>

      {/* Mobile search bar */}
      <div
        className="md:hidden px-4 py-2"
        style={{ background: "oklch(var(--primary) / 0.7)" }}
        data-ocid="header.mobile_search"
      >
        <form onSubmit={handleSearchSubmit} className="flex">
          <div
            className="flex w-full rounded-full overflow-hidden"
            style={{
              background: "oklch(var(--primary-foreground) / 0.08)",
              border: "1px solid oklch(var(--primary-foreground) / 0.12)",
            }}
          >
            <input
              type="text"
              value={searchInput}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder={searchPlaceholder}
              data-ocid="header.mobile_search_input"
              className="flex-1 bg-transparent px-4 py-2 text-sm outline-none min-w-0"
              style={{ color: "oklch(var(--primary-foreground))" }}
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-r-full transition-smooth flex items-center"
              style={{
                background:
                  "linear-gradient(135deg, oklch(var(--accent)), oklch(0.58 0.27 38))",
                color: "oklch(var(--accent-foreground))",
              }}
              aria-label="Search"
            >
              <Search size={14} />
            </button>
          </div>
        </form>
      </div>

      {/* Mobile menu slide-in drawer */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 animate-slide-in-right"
          style={{ top: "112px" }}
          data-ocid="header.mobile_menu"
        >
          {/* Backdrop */}
          <button
            type="button"
            aria-label="Close menu"
            className="absolute inset-0 animate-fade-in w-full h-full cursor-default"
            style={{
              background: "oklch(var(--background) / 0.6)",
              backdropFilter: "blur(4px)",
            }}
            onClick={() => setMobileMenuOpen(false)}
          />
          {/* Drawer panel */}
          <div
            className="absolute right-0 top-0 bottom-0 w-72 flex flex-col overflow-y-auto animate-slide-in-right"
            style={{
              background: "oklch(var(--primary))",
              boxShadow: "-4px 0 24px rgba(0,0,0,0.4)",
            }}
          >
            <nav className="flex flex-col p-3 gap-1 flex-1">
              {[
                { to: "/" as const, label: t("home") },
                { to: "/shop" as const, label: t("shop") },
                { to: "/flash-sales" as const, label: t("flashSales") },
                ...(isAuthenticated
                  ? [
                      { to: "/orders" as const, label: t("myOrders") },
                      { to: "/wishlist" as const, label: t("wishlist") },
                      { to: "/cart" as const, label: t("cart") },
                      { to: "/account" as const, label: t("account") },
                      ...(isAdmin
                        ? [{ to: "/admin" as const, label: t("admin") }]
                        : []),
                    ]
                  : []),
              ].map((item, i) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setMobileMenuOpen(false)}
                  data-ocid={`header.mobile_nav.${i + 1}`}
                  className="py-3 px-4 text-sm font-semibold rounded-lg transition-smooth"
                  style={{ color: "oklch(var(--primary-foreground) / 0.85)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "oklch(var(--primary-foreground) / 0.07)";
                    (e.currentTarget as HTMLElement).style.color =
                      "oklch(var(--accent))";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "transparent";
                    (e.currentTarget as HTMLElement).style.color =
                      "oklch(var(--primary-foreground) / 0.85)";
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div
              className="p-4 border-t"
              style={{ borderColor: "oklch(var(--primary-foreground) / 0.1)" }}
            >
              {isAuthenticated ? (
                <button
                  type="button"
                  onClick={() => {
                    logout();
                    setMobileMenuOpen(false);
                  }}
                  data-ocid="header.mobile_logout_button"
                  className="w-full py-2.5 rounded-lg text-sm font-semibold border transition-smooth"
                  style={{
                    borderColor: "oklch(var(--primary-foreground) / 0.15)",
                    color: "oklch(var(--primary-foreground) / 0.7)",
                  }}
                >
                  {t("logout")}
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    login();
                    setMobileMenuOpen(false);
                  }}
                  disabled={isInitializing || isLoggingIn}
                  data-ocid="header.mobile_login_button"
                  className="w-full py-3 rounded-lg text-sm font-bold transition-smooth disabled:opacity-50 flex items-center justify-center gap-2"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(var(--accent)), oklch(0.58 0.27 38))",
                    color: "oklch(var(--accent-foreground))",
                    boxShadow: "0 2px 12px oklch(var(--accent) / 0.4)",
                  }}
                >
                  <LogIn size={14} />
                  {t("login")}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
