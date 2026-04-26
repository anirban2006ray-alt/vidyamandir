import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "@tanstack/react-router";
import {
  AlertTriangle,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Edit2,
  Globe,
  LogIn,
  MapPin,
  MessageSquare,
  Package,
  Plus,
  Save,
  Settings,
  Shield,
  Star,
  Trash2,
  User,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { Variant_bengali_english } from "../backend";
import type {
  Address,
  AddressInput,
  Enquiry,
  OrderStatus,
  UserProfile,
} from "../backend.d.ts";
import { ThankYouImage } from "../components/FloatingEnquiry";
import { LoadingSpinner } from "../components/LoadingSpinner";
import {
  useAuth,
  useCallerLoginStatus,
  useUserProfile,
} from "../hooks/use-auth";
import { useLanguage } from "../hooks/use-language";
import {
  useAddAddress,
  useDeleteAddress,
  useGetMyEnquiries,
  useListAddresses,
  useListMyOrders,
  useSaveUserProfile,
  useSetDefaultAddress,
  useUpdateAddress,
} from "../hooks/useQueries";
import type { Lang } from "../types";

type StatusConfig = {
  label: string;
  labelBn: string;
  className: string;
};

const STATUS_CONFIG: Record<OrderStatus, StatusConfig> = {
  processing: {
    label: "Processing",
    labelBn: "প্রক্রিয়া চলছে",
    className: "bg-blue-500/15 text-blue-400 border-blue-500/30",
  },
  shipped: {
    label: "Shipped",
    labelBn: "পাঠানো হয়েছে",
    className: "bg-amber-500/15 text-amber-400 border-amber-500/30",
  },
  delivered: {
    label: "Delivered",
    labelBn: "পৌঁছে গেছে",
    className: "bg-green-500/15 text-green-400 border-green-500/30",
  },
  cancelled: {
    label: "Cancelled",
    labelBn: "বাতিল",
    className: "bg-red-500/15 text-red-400 border-red-500/30",
  },
  refundRequested: {
    label: "Refund Requested",
    labelBn: "ফেরত চাওয়া হয়েছে",
    className: "bg-orange-500/15 text-orange-400 border-orange-500/30",
  },
  refunded: {
    label: "Refunded",
    labelBn: "ফেরত দেওয়া হয়েছে",
    className: "bg-muted text-muted-foreground border-border",
  },
};

const EMPTY_ADDRESS: AddressInput = {
  fullName: "",
  phone: "",
  line1: "",
  line2: "",
  city: "",
  district: "",
  state: "West Bengal",
  pincode: "",
};

// ─── Auth Gate ────────────────────────────────────────────────────────────────

function AuthGate({
  onLogin,
  isRateLimited,
  rateLimitSeconds = 60,
  isLoggingIn = false,
}: {
  onLogin: () => void;
  isRateLimited?: boolean;
  rateLimitSeconds?: number;
  isLoggingIn?: boolean;
}) {
  const { t, lang } = useLanguage();
  const [countdown, setCountdown] = useState(rateLimitSeconds);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Live countdown when rate-limited
  useEffect(() => {
    if (!isRateLimited) {
      setCountdown(rateLimitSeconds);
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }
    setCountdown(rateLimitSeconds);
    intervalRef.current = setInterval(() => {
      setCountdown((c) => {
        if (c <= 1) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          return 0;
        }
        return c - 1;
      });
    }, 1000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRateLimited, rateLimitSeconds]);

  return (
    <div
      className="max-w-lg mx-auto px-4 py-20 flex flex-col items-center gap-8"
      data-ocid="account.login_required"
    >
      <div className="relative">
        <div className="w-24 h-24 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shadow-elevated">
          <User size={40} className="text-primary/50" />
        </div>
        <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-accent flex items-center justify-center shadow-card">
          <Shield size={14} className="text-accent-foreground" />
        </div>
      </div>
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-display font-bold">{t("account")}</h2>
        <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
          {t("signInDesc")}
        </p>
      </div>

      {isRateLimited ? (
        <div
          className="flex items-start gap-3 rounded-xl border border-accent/40 bg-accent/10 px-5 py-4 max-w-xs text-left"
          data-ocid="account.rate_limit_warning"
          role="alert"
          aria-live="polite"
        >
          <AlertTriangle
            size={18}
            className="shrink-0 mt-0.5 text-accent"
            aria-hidden="true"
          />
          <div>
            <p className="text-sm font-semibold text-accent leading-snug">
              {lang === "bn"
                ? "অনেকবার চেষ্টা করা হয়েছে। অপেক্ষা করুন।"
                : "Too many login attempts."}
            </p>
            <p className="text-xs text-accent/80 mt-1 font-medium">
              {countdown > 0
                ? lang === "bn"
                  ? `${countdown} সেকেন্ড পরে আবার চেষ্টা করুন`
                  : `Try again in ${countdown}s`
                : lang === "bn"
                  ? "এখন আবার চেষ্টা করতে পারবেন"
                  : "You may try again now"}
            </p>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={onLogin}
          disabled={isLoggingIn}
          data-ocid="account.login_button"
          className="cta-primary flex items-center gap-2 px-8 py-3 disabled:opacity-70"
        >
          {isLoggingIn ? (
            <>
              <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
              {lang === "bn" ? "লগইন হচ্ছে..." : "Signing in..."}
            </>
          ) : (
            <>
              <LogIn size={16} />
              {t("login")}
            </>
          )}
        </button>
      )}
    </div>
  );
}

// ─── Field Error ──────────────────────────────────────────────────────────────

function FieldError({ message }: { message: string }) {
  return (
    <p
      className="text-xs text-destructive mt-1 flex items-center gap-1"
      data-ocid="account.field_error"
    >
      <span className="w-1 h-1 rounded-full bg-destructive inline-block" />
      {message}
    </p>
  );
}

// ─── Profile Section ──────────────────────────────────────────────────────────

function ProfileSection({ profile }: { profile: UserProfile | null }) {
  const { t, lang, setLang } = useLanguage();
  const { logout } = useAuth();
  const { mutate: saveProfile, isPending: saving } = useSaveUserProfile();
  const { data: loginStatus } = useCallerLoginStatus();

  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState<{
    name: string;
    email: string;
    phone: string;
    preferredLanguage: Variant_bengali_english;
  }>({
    name: profile?.name ?? "",
    email: profile?.email ?? "",
    phone: profile?.phone ?? "",
    preferredLanguage:
      profile?.preferredLanguage ?? Variant_bengali_english.english,
  });

  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    phone?: string;
  }>({});

  useEffect(() => {
    if (profile) {
      setForm({
        name: profile.name,
        email: profile.email,
        phone: profile.phone,
        preferredLanguage: profile.preferredLanguage,
      });
    }
  }, [profile]);

  const validateField = (field: "name" | "email" | "phone", value: string) => {
    if (field === "name") {
      if (!value.trim()) return lang === "bn" ? "নাম আবশ্যক" : "Name is required";
      if (value.trim().length < 3)
        return lang === "bn"
          ? "নাম কমপক্ষে ৩ অক্ষর হতে হবে"
          : "Name must be at least 3 characters";
    }
    if (field === "email") {
      if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
        return lang === "bn" ? "বৈধ ইমেইল দিন" : "Enter a valid email address";
    }
    if (field === "phone") {
      if (value && !/^\d{10}$/.test(value.replace(/\D/g, "")))
        return lang === "bn"
          ? "ফোন নম্বর ১০ ডিজিট হতে হবে"
          : "Phone must be 10 digits";
    }
    return undefined;
  };

  const handleBlur = (field: "name" | "email" | "phone") => {
    const err = validateField(field, form[field]);
    setErrors((prev) => ({ ...prev, [field]: err }));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!profile) return;
    const nameErr = validateField("name", form.name);
    const emailErr = validateField("email", form.email);
    const phoneErr = validateField("phone", form.phone);
    if (nameErr || emailErr || phoneErr) {
      setErrors({ name: nameErr, email: emailErr, phone: phoneErr });
      return;
    }
    saveProfile(
      {
        ...profile,
        name: form.name,
        email: form.email,
        phone: form.phone,
        preferredLanguage: form.preferredLanguage,
      },
      {
        onSuccess: () => {
          toast.success(
            lang === "bn" ? "সফলভাবে সংরক্ষিত হয়েছে!" : "Saved successfully!",
          );
          setEditing(false);
          setErrors({});
        },
        onError: () => {
          toast.error(
            lang === "bn" ? "সংরক্ষণ ব্যর্থ হয়েছে" : "Failed to save profile",
          );
        },
      },
    );
  };

  const initials = profile?.name
    ? profile.name
        .split(" ")
        .map((n) => n[0])
        .slice(0, 2)
        .join("")
        .toUpperCase()
    : "VM";

  return (
    <div
      className="space-y-5 animate-fade-in"
      data-ocid="account.profile_section"
    >
      {/* Avatar hero card */}
      <div className="card-elevation p-6">
        <div className="flex items-start gap-5">
          {/* Avatar */}
          <div className="relative shrink-0">
            <div className="w-20 h-20 rounded-2xl bg-accent flex items-center justify-center shadow-card">
              <span className="font-display font-bold text-2xl text-accent-foreground">
                {initials}
              </span>
            </div>
            <div className="absolute -bottom-1.5 -right-1.5 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center border-2 border-card">
              <CheckCircle2 size={12} className="text-white" />
            </div>
          </div>

          {/* Identity */}
          <div className="flex-1 min-w-0">
            <p className="font-display font-bold text-xl truncate">
              {profile?.name || (lang === "bn" ? "বই প্রেমী" : "Book Lover")}
            </p>
            <p className="text-sm text-muted-foreground truncate mt-0.5">
              {profile?.email ||
                (lang === "bn" ? "ইমেইল সেট নেই" : "No email set")}
            </p>
            {loginStatus?.lastLoginAt != null && (
              <p
                className="text-xs text-muted-foreground mt-1"
                data-ocid="account.last_login"
              >
                {lang === "bn" ? "শেষ লগইন: " : "Last login: "}
                {new Date(
                  Number(loginStatus.lastLoginAt / BigInt(1_000_000)),
                ).toLocaleString(lang === "bn" ? "bn-IN" : "en-IN", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            )}
            <div className="flex items-center gap-2 mt-3 flex-wrap">
              <Badge className="badge-sale text-[10px] py-0.5">
                {lang === "bn" ? "সক্রিয় সদস্য" : "Active Member"}
              </Badge>
              {profile?.phone && (
                <span className="text-xs text-muted-foreground">
                  📞 {profile.phone}
                </span>
              )}
            </div>
          </div>

          {!editing && (
            <Button
              type="button"
              size="sm"
              variant="ghost"
              onClick={() => setEditing(true)}
              data-ocid="account.edit_profile_button"
              className="shrink-0 rounded-lg text-xs text-muted-foreground hover:text-accent hover:bg-accent/10 transition-smooth"
            >
              <Edit2 size={13} className="mr-1" />
              {lang === "bn" ? "সম্পাদনা" : "Edit"}
            </Button>
          )}
        </div>
      </div>

      {/* Profile form / display */}
      <div className="card-elevation p-6">
        {editing ? (
          <form
            onSubmit={handleSave}
            className="space-y-5"
            data-ocid="account.profile_form"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                {t("profileSettings")}
              </h3>
            </div>
            <Separator />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <Label className="text-xs text-muted-foreground mb-1.5 block font-semibold">
                  {t("name")} <span className="text-accent">*</span>
                </Label>
                <Input
                  type="text"
                  value={form.name}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, name: e.target.value }))
                  }
                  onBlur={() => handleBlur("name")}
                  className="input-field h-11 rounded-lg"
                  data-ocid="account.profile_name_input"
                />
                {errors.name && <FieldError message={errors.name} />}
              </div>

              <div>
                <Label className="text-xs text-muted-foreground mb-1.5 block font-semibold">
                  Email
                </Label>
                <Input
                  type="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, email: e.target.value }))
                  }
                  onBlur={() => handleBlur("email")}
                  className="input-field h-11 rounded-lg"
                  data-ocid="account.profile_email_input"
                />
                {errors.email && <FieldError message={errors.email} />}
              </div>

              <div>
                <Label className="text-xs text-muted-foreground mb-1.5 block font-semibold">
                  {t("phone")}
                </Label>
                <Input
                  type="tel"
                  value={form.phone}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, phone: e.target.value }))
                  }
                  onBlur={() => handleBlur("phone")}
                  className="input-field h-11 rounded-lg"
                  data-ocid="account.profile_phone_input"
                />
                {errors.phone && <FieldError message={errors.phone} />}
              </div>

              <div className="sm:col-span-2">
                <Label className="text-xs text-muted-foreground mb-1.5 block font-semibold">
                  {lang === "bn" ? "পছন্দের ভাষা" : "Preferred Language"}
                </Label>
                <div className="flex gap-2">
                  {(
                    [
                      Variant_bengali_english.english,
                      Variant_bengali_english.bengali,
                    ] as Variant_bengali_english[]
                  ).map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() =>
                        setForm((p) => ({ ...p, preferredLanguage: opt }))
                      }
                      data-ocid={`account.lang_pref_${opt}`}
                      className={`flex-1 py-2.5 text-sm rounded-lg border font-semibold transition-smooth ${
                        form.preferredLanguage === opt
                          ? "bg-accent text-accent-foreground border-accent shadow-card"
                          : "bg-card text-muted-foreground border-border hover:border-accent/60 hover:text-foreground"
                      }`}
                    >
                      {opt === Variant_bengali_english.english
                        ? "🇬🇧 English"
                        : "🇮🇳 বাংলা"}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-2 justify-end pt-1">
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => {
                  setEditing(false);
                  setErrors({});
                }}
                data-ocid="account.profile_cancel_button"
                className="btn-secondary rounded-lg text-xs px-4"
              >
                {lang === "bn" ? "বাতিল" : "Cancel"}
              </Button>
              <button
                type="submit"
                disabled={saving}
                data-ocid="account.profile_save_button"
                className="cta-primary flex items-center gap-1.5 text-xs px-5 py-2 disabled:opacity-60"
              >
                {saving ? (
                  <>
                    <span className="w-3.5 h-3.5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    {lang === "bn" ? "সংরক্ষণ..." : "Saving..."}
                  </>
                ) : (
                  <>
                    <Save size={13} />
                    {lang === "bn" ? "সংরক্ষণ করুন" : "Save Changes"}
                  </>
                )}
              </button>
            </div>
          </form>
        ) : (
          <div className="space-y-4">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
              {t("profileSettings")}
            </h3>
            <Separator />
            <div className="grid grid-cols-2 gap-4 text-sm">
              {[
                [lang === "bn" ? "নাম" : "Name", profile?.name || "—"],
                ["Email", profile?.email || "—"],
                [t("phone"), profile?.phone || "—"],
                [
                  lang === "bn" ? "পছন্দের ভাষা" : "Preferred Language",
                  profile?.preferredLanguage === Variant_bengali_english.bengali
                    ? "বাংলা"
                    : "English",
                ],
              ].map(([label, value]) => (
                <div key={label} className="space-y-1">
                  <span className="text-[11px] text-muted-foreground font-semibold uppercase tracking-wide block">
                    {label}
                  </span>
                  <span className="font-medium text-foreground truncate block">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Language UI toggle */}
      <div className="card-elevation p-4 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-accent/15 flex items-center justify-center">
            <Globe size={15} className="text-accent" />
          </div>
          <div>
            <p className="text-sm font-semibold">
              {lang === "bn" ? "ইন্টারফেস ভাষা" : "Interface Language"}
            </p>
            <p className="text-xs text-muted-foreground">
              {lang === "bn"
                ? "সাইটের ভাষা পরিবর্তন করুন"
                : "Change the display language"}
            </p>
          </div>
        </div>
        <div className="pill-toggle">
          {(["en", "bn"] as Lang[]).map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => setLang(l)}
              data-ocid={`account.ui_lang_${l}`}
              data-active={lang === l ? "true" : "false"}
              className="pill-toggle-btn"
            >
              {l === "en" ? "EN" : "বাং"}
            </button>
          ))}
        </div>
      </div>

      {/* Order History Summary */}
      <div className="card-elevation overflow-hidden">
        <OrderHistorySummary />
      </div>

      {/* Sign Out */}
      <div className="card-elevation p-4 flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold">
            {lang === "bn" ? "লগআউট" : "Sign Out"}
          </p>
          <p className="text-xs text-muted-foreground">
            {lang === "bn"
              ? "আপনার অ্যাকাউন্ট থেকে বের হন"
              : "Sign out from your account"}
          </p>
        </div>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={logout}
          data-ocid="account.logout_button"
          className="rounded-lg text-xs border-destructive/50 text-destructive hover:bg-destructive/10 hover:border-destructive transition-smooth"
        >
          {t("logout")}
        </Button>
      </div>
    </div>
  );
}

// ─── Order History Summary ────────────────────────────────────────────────────

function OrderHistorySummary() {
  const { lang } = useLanguage();
  const { data: orders, isLoading } = useListMyOrders();
  const recent = orders?.slice(0, 3) ?? [];

  return (
    <div data-ocid="account.order_history_summary">
      <div className="flex items-center justify-between px-5 py-4 border-b border-border">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-accent/15 flex items-center justify-center">
            <Package size={14} className="text-accent" />
          </div>
          <span className="text-sm font-semibold">
            {lang === "bn" ? "সাম্প্রতিক অর্ডার" : "Recent Orders"}
          </span>
        </div>
        <Link
          to="/orders"
          data-ocid="account.view_all_orders_link"
          className="flex items-center gap-1 text-xs text-accent hover:text-accent/80 font-semibold transition-smooth"
        >
          {lang === "bn" ? "সব দেখুন" : "View All"}
          <ChevronRight size={12} />
        </Link>
      </div>

      {isLoading ? (
        <div className="p-5 space-y-3" data-ocid="account.orders_loading_state">
          {["ord-sk-1", "ord-sk-2"].map((k) => (
            <Skeleton key={k} className="h-14 w-full rounded-xl" />
          ))}
        </div>
      ) : recent.length === 0 ? (
        <div
          className="flex flex-col items-center py-10 gap-3"
          data-ocid="account.orders_empty_state"
        >
          <div className="w-16 h-16 rounded-2xl bg-muted/50 flex items-center justify-center">
            <BookOpen size={28} className="text-muted-foreground/40" />
          </div>
          <p className="text-sm text-muted-foreground font-medium">
            {lang === "bn" ? "কোনো অর্ডার নেই" : "No orders yet"}
          </p>
          <Link to="/shop">
            <button
              type="button"
              data-ocid="account.shop_now_button"
              className="cta-primary text-xs px-5 py-2 mt-1"
            >
              {lang === "bn" ? "কেনাকাটা শুরু করুন" : "Start Shopping"}
            </button>
          </Link>
        </div>
      ) : (
        <div className="divide-y divide-border">
          {recent.map((order, idx) => (
            <Link
              key={order.id.toString()}
              to="/orders/$id"
              params={{ id: order.id.toString() }}
              data-ocid={`account.order_summary.${idx + 1}`}
              className="flex items-center justify-between px-5 py-3.5 hover:bg-muted/20 transition-smooth"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-muted/50 flex items-center justify-center border border-border shrink-0">
                  <Package size={16} className="text-muted-foreground" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    #{order.id.toString().padStart(6, "0")}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {order.items.length} {lang === "bn" ? "টি বই" : "item(s)"}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span
                  className={`text-xs px-2.5 py-1 rounded-full border font-semibold ${(STATUS_CONFIG[order.status as OrderStatus] ?? STATUS_CONFIG.processing).className}`}
                >
                  {lang === "bn"
                    ? (
                        STATUS_CONFIG[order.status as OrderStatus] ??
                        STATUS_CONFIG.processing
                      ).labelBn
                    : (
                        STATUS_CONFIG[order.status as OrderStatus] ??
                        STATUS_CONFIG.processing
                      ).label}
                </span>
                <ChevronRight size={13} className="text-muted-foreground" />
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Address Book ──────────────────────────────────────────────────────────────

function AddressBook() {
  const { t, lang } = useLanguage();
  const { data: addresses, isLoading: addrLoading } = useListAddresses();
  const { mutate: addAddr, isPending: adding } = useAddAddress();
  const { mutate: updateAddr, isPending: updating } = useUpdateAddress();
  const { mutate: deleteAddr } = useDeleteAddress();
  const { mutate: setDefault } = useSetDefaultAddress();

  const [addrDialog, setAddrDialog] = useState(false);
  const [editingAddr, setEditingAddr] = useState<
    (AddressInput & { id?: bigint }) | null
  >(null);
  const [addrForm, setAddrForm] = useState<AddressInput>(EMPTY_ADDRESS);
  const [deleteConfirmId, setDeleteConfirmId] = useState<bigint | null>(null);

  const isMutating = adding || updating;

  const openAddDialog = () => {
    if ((addresses?.length ?? 0) >= 5) {
      toast.error(
        lang === "bn"
          ? "সর্বোচ্চ ৫টি ঠিকানা সংরক্ষণ করা যাবে"
          : "Max 5 addresses allowed",
      );
      return;
    }
    setEditingAddr(null);
    setAddrForm(EMPTY_ADDRESS);
    setAddrDialog(true);
  };

  const openEditDialog = (addr: Address) => {
    setEditingAddr({
      id: addr.id,
      fullName: addr.fullName,
      phone: addr.phone,
      line1: addr.line1,
      line2: addr.line2,
      city: addr.city,
      district: addr.district,
      state: addr.state,
      pincode: addr.pincode,
    });
    setAddrForm({
      fullName: addr.fullName,
      phone: addr.phone,
      line1: addr.line1,
      line2: addr.line2,
      city: addr.city,
      district: addr.district,
      state: addr.state,
      pincode: addr.pincode,
    });
    setAddrDialog(true);
  };

  const handleSaveAddr = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingAddr?.id) {
      updateAddr(
        { id: editingAddr.id, input: addrForm },
        {
          onSuccess: () => {
            toast.success(
              lang === "bn" ? "ঠিকানা আপডেট হয়েছে!" : "Address updated!",
            );
            setAddrDialog(false);
          },
          onError: () =>
            toast.error(lang === "bn" ? "আপডেট ব্যর্থ হয়েছে" : "Update failed"),
        },
      );
    } else {
      addAddr(addrForm, {
        onSuccess: () => {
          toast.success(lang === "bn" ? "ঠিকানা যোগ হয়েছে!" : "Address added!");
          setAddrDialog(false);
        },
        onError: () =>
          toast.error(lang === "bn" ? "যোগ ব্যর্থ হয়েছে" : "Failed to add"),
      });
    }
  };

  const handleDelete = (id: bigint) => {
    deleteAddr(id, {
      onSuccess: () => {
        toast.success(lang === "bn" ? "ঠিকানা মুছে গেছে" : "Address deleted");
        setDeleteConfirmId(null);
      },
    });
  };

  const addrFormFields: [keyof AddressInput, string, boolean][] = [
    ["fullName", t("name"), true],
    ["phone", t("phone"), true],
    ["line1", t("line1"), true],
    ["line2", t("line2"), false],
    ["city", t("city"), true],
    ["district", t("district"), true],
    ["state", t("state"), true],
    ["pincode", t("pincode"), true],
  ];

  return (
    <div
      className="space-y-4 animate-fade-in"
      data-ocid="account.addresses_section"
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-accent/15 flex items-center justify-center">
            <MapPin size={15} className="text-accent" />
          </div>
          <div>
            <span className="text-sm font-semibold block">
              {t("savedAddresses")}
            </span>
            <span className="text-xs text-muted-foreground">
              {addresses?.length ?? 0}/5{" "}
              {lang === "bn" ? "ঠিকানা সংরক্ষিত" : "saved"}
            </span>
          </div>
        </div>
        <button
          type="button"
          onClick={openAddDialog}
          disabled={(addresses?.length ?? 0) >= 5}
          data-ocid="account.add_address_button"
          className="cta-primary flex items-center gap-1.5 text-xs px-4 py-2 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <Plus size={13} />
          {t("addAddress")}
        </button>
      </div>

      {addrLoading ? (
        <div className="space-y-3" data-ocid="account.addresses_loading_state">
          {["addr-sk-1", "addr-sk-2"].map((k) => (
            <Skeleton key={k} className="h-28 w-full rounded-xl" />
          ))}
        </div>
      ) : !addresses || addresses.length === 0 ? (
        <button
          type="button"
          onClick={openAddDialog}
          data-ocid="account.addresses_empty_state"
          className="w-full flex flex-col items-center py-12 gap-4 border-2 border-dashed border-border rounded-xl bg-card hover:border-accent/40 hover:bg-accent/5 transition-smooth cursor-pointer"
        >
          <div className="w-16 h-16 rounded-2xl bg-muted/50 flex items-center justify-center">
            <MapPin size={28} className="text-muted-foreground/40" />
          </div>
          <div className="text-center">
            <p className="text-sm font-semibold text-foreground">
              {lang === "bn" ? "কোনো সংরক্ষিত ঠিকানা নেই" : "No saved addresses"}
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              {lang === "bn"
                ? "একটি ঠিকানা যোগ করুন"
                : "Click to add your first address"}
            </p>
          </div>
          <span className="flex items-center gap-1.5 text-xs text-accent font-semibold">
            <Plus size={13} />
            {t("addAddress")}
          </span>
        </button>
      ) : (
        <div className="space-y-3">
          {addresses.map((addr, idx) => (
            <div
              key={addr.id.toString()}
              className={`rounded-xl p-4 border transition-smooth ${
                addr.isDefault
                  ? "border-accent/50 bg-accent/5 shadow-card"
                  : "border-border bg-card shadow-subtle hover:shadow-card"
              }`}
              data-ocid={`account.address.${idx + 1}`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="text-sm space-y-1 flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-semibold text-foreground">
                      {addr.fullName}
                    </span>
                    {addr.isDefault && (
                      <span className="badge-sale text-[10px] px-2 py-0.5">
                        {lang === "bn" ? "ডিফল্ট" : "DEFAULT"}
                      </span>
                    )}
                  </div>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {addr.line1}
                    {addr.line2 ? `, ${addr.line2}` : ""}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {addr.city}, {addr.district} — {addr.pincode}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {addr.state} · 📞 {addr.phone}
                  </p>
                </div>

                <div className="flex flex-col gap-1 shrink-0">
                  {!addr.isDefault && (
                    <Button
                      type="button"
                      size="sm"
                      variant="ghost"
                      onClick={() =>
                        setDefault(addr.id, {
                          onSuccess: () =>
                            toast.success(
                              lang === "bn"
                                ? "ডিফল্ট ঠিকানা সেট হয়েছে!"
                                : "Default address set!",
                            ),
                        })
                      }
                      data-ocid={`account.set_default.${idx + 1}`}
                      className="h-7 text-xs rounded-lg text-muted-foreground hover:text-accent hover:bg-accent/10 px-2.5 gap-1 transition-smooth"
                    >
                      <Star size={11} />
                      {lang === "bn" ? "ডিফল্ট" : "Default"}
                    </Button>
                  )}
                  <Button
                    type="button"
                    size="sm"
                    variant="ghost"
                    onClick={() => openEditDialog(addr)}
                    data-ocid={`account.edit_address.${idx + 1}`}
                    className="h-7 text-xs rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 px-2.5 gap-1 transition-smooth"
                  >
                    <Edit2 size={11} />
                    {lang === "bn" ? "সম্পাদনা" : "Edit"}
                  </Button>
                  <Button
                    type="button"
                    size="sm"
                    variant="ghost"
                    onClick={() => setDeleteConfirmId(addr.id)}
                    data-ocid={`account.delete_address.${idx + 1}`}
                    className="h-7 text-xs rounded-lg text-muted-foreground hover:text-destructive hover:bg-destructive/10 px-2.5 gap-1 transition-smooth"
                  >
                    <Trash2 size={11} />
                    {lang === "bn" ? "মুছুন" : "Delete"}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Add/Edit Address Dialog */}
      <Dialog open={addrDialog} onOpenChange={setAddrDialog}>
        <DialogContent
          className="rounded-2xl max-w-md"
          data-ocid="account.address_dialog"
        >
          <DialogHeader>
            <DialogTitle className="font-display text-lg">
              {editingAddr?.id ? t("editAddress") : t("addAddress")}
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSaveAddr} className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              {addrFormFields.map(([field, label, required]) => (
                <div
                  key={field}
                  className={
                    field === "fullName" ||
                    field === "line1" ||
                    field === "line2"
                      ? "col-span-2"
                      : ""
                  }
                >
                  <Label className="text-xs text-muted-foreground mb-1 block font-semibold">
                    {label}
                    {required && <span className="text-accent ml-0.5">*</span>}
                  </Label>
                  <Input
                    value={addrForm[field] ?? ""}
                    onChange={(e) =>
                      setAddrForm((p) => ({ ...p, [field]: e.target.value }))
                    }
                    className="input-field h-10 rounded-lg"
                    required={required}
                    data-ocid={`account.addr_${field}_input`}
                  />
                </div>
              ))}
            </div>
            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => setAddrDialog(false)}
                data-ocid="account.addr_cancel_button"
                className="btn-secondary rounded-lg text-xs"
              >
                {lang === "bn" ? "বাতিল" : "Cancel"}
              </Button>
              <button
                type="submit"
                disabled={isMutating}
                data-ocid="account.addr_save_button"
                className="cta-primary text-xs px-5 py-2 flex items-center gap-1.5 disabled:opacity-60"
              >
                {isMutating ? (
                  <>
                    <span className="w-3.5 h-3.5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    {lang === "bn" ? "সংরক্ষণ..." : "Saving..."}
                  </>
                ) : (
                  t("saveAddress")
                )}
              </button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Delete Confirm Dialog */}
      <Dialog
        open={deleteConfirmId !== null}
        onOpenChange={(open) => !open && setDeleteConfirmId(null)}
      >
        <DialogContent
          className="rounded-2xl max-w-sm"
          data-ocid="account.delete_confirm_dialog"
        >
          <DialogHeader>
            <DialogTitle className="font-display text-base">
              {lang === "bn" ? "ঠিকানা মুছবেন?" : "Delete Address?"}
            </DialogTitle>
          </DialogHeader>
          <p className="text-sm text-muted-foreground">
            {lang === "bn"
              ? "আপনি কি এই ঠিকানাটি মুছতে চান? এটি স্থায়ীভাবে মুছে যাবে।"
              : "Are you sure you want to delete this address? This action cannot be undone."}
          </p>
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => setDeleteConfirmId(null)}
              data-ocid="account.delete_cancel_button"
              className="btn-secondary rounded-lg text-xs"
            >
              {lang === "bn" ? "বাতিল" : "Cancel"}
            </Button>
            <Button
              type="button"
              size="sm"
              onClick={() => deleteConfirmId && handleDelete(deleteConfirmId)}
              data-ocid="account.delete_confirm_button"
              className="bg-destructive text-destructive-foreground rounded-lg text-xs font-bold hover:bg-destructive/90"
            >
              {lang === "bn" ? "মুছুন" : "Delete"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

// ─── Enquiry Thank-You Banner ─────────────────────────────────────────────────

function EnquiryThankYouBanner() {
  return (
    <div
      className="w-full rounded-xl overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.14 0.08 255) 0%, oklch(0.18 0.09 255) 60%, oklch(0.16 0.07 255) 100%)",
        border: "1px solid oklch(0.22 0.07 255)",
      }}
    >
      <div
        className="h-1 w-full"
        style={{
          background:
            "linear-gradient(90deg, oklch(0.72 0.25 40), oklch(0.85 0.2 60), oklch(0.72 0.25 40))",
        }}
      />
      <div className="px-5 py-4 flex flex-col items-center gap-1.5 text-center">
        <div className="flex items-center gap-3">
          <span className="text-xl" role="img" aria-label="books">
            📚
          </span>
          <p
            className="font-display font-bold text-base leading-tight"
            style={{ color: "oklch(0.72 0.25 40)" }}
          >
            ধন্যবাদ • Thank You
          </p>
          <span className="text-xl" role="img" aria-label="books">
            📚
          </span>
        </div>
        <p className="text-xs" style={{ color: "oklch(0.65 0.06 255)" }}>
          — Vidyamandir, Balgona, Purba Bardhaman
        </p>
      </div>
      <div
        className="h-0.5 w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(0.72 0.25 40 / 0.5), transparent)",
        }}
      />
    </div>
  );
}

// ─── Enquiry Card ─────────────────────────────────────────────────────────────

function EnquiryCard({ enquiry, idx }: { enquiry: Enquiry; idx: number }) {
  const { lang } = useLanguage();

  const defaultAiReply =
    "Thank you for contacting Vidyamandir! We have received your enquiry and will get back to you within 24 hours.";

  const dateStr = new Date(
    Number(enquiry.submittedAt / BigInt(1_000_000)),
  ).toLocaleDateString(lang === "bn" ? "bn-IN" : "en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div
      className="rounded-2xl overflow-hidden shadow-card border border-border"
      style={{ background: "oklch(var(--card))" }}
      data-ocid={`account.enquiry.${idx + 1}`}
    >
      {/* Thank-you top banner */}
      <div
        className="px-5 py-3.5 flex items-center gap-2"
        style={{
          background:
            "linear-gradient(90deg, oklch(var(--accent) / 0.15), oklch(var(--accent) / 0.05))",
          borderBottom: "1px solid oklch(var(--accent) / 0.2)",
        }}
      >
        <span className="text-lg">🙏</span>
        <p
          className="text-sm font-semibold leading-snug"
          style={{ color: "oklch(var(--accent))" }}
        >
          {lang === "bn"
            ? `ধন্যবাদ ${enquiry.name}! আপনার বার্তা আমরা পেয়েছি।`
            : `Thank you for your enquiry, ${enquiry.name}! We value your message.`}
        </p>
      </div>

      <div className="p-5 space-y-4">
        {/* Meta row */}
        <div className="flex items-center justify-between flex-wrap gap-2">
          <span className="text-xs text-muted-foreground">{dateStr}</span>
          <span
            className={`text-[11px] px-2.5 py-1 rounded-full font-semibold border ${
              enquiry.status === "replied"
                ? "bg-green-500/10 text-green-400 border-green-500/30"
                : enquiry.status === "viewed"
                  ? "bg-blue-500/10 text-blue-400 border-blue-500/30"
                  : "bg-muted text-muted-foreground border-border"
            }`}
          >
            {enquiry.status === "replied"
              ? lang === "bn"
                ? "উত্তর দেওয়া হয়েছে"
                : "Replied"
              : enquiry.status === "viewed"
                ? lang === "bn"
                  ? "দেখা হয়েছে"
                  : "Viewed"
                : lang === "bn"
                  ? "নতুন"
                  : "New"}
          </span>
        </div>

        {/* Message */}
        <div>
          <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-1.5">
            {lang === "bn" ? "আপনার বার্তা:" : "Your Message:"}
          </p>
          <p className="text-sm text-foreground leading-relaxed">
            {enquiry.message}
          </p>
        </div>

        {/* AI Response */}
        <div
          className="rounded-xl p-4 text-sm leading-relaxed"
          style={{
            background: "oklch(var(--background))",
            border: "1px solid oklch(var(--border))",
            borderLeft: "4px solid oklch(var(--accent))",
          }}
        >
          <p
            className="text-[11px] font-bold uppercase tracking-widest mb-2"
            style={{ color: "oklch(var(--accent))" }}
          >
            {lang === "bn" ? "আমাদের উত্তর:" : "Our Response:"}
          </p>
          <p className="text-foreground">
            {enquiry.aiReply?.trim() ? enquiry.aiReply : defaultAiReply}
          </p>
        </div>

        {/* Decorative bottom banner */}
        <EnquiryThankYouBanner />

        {/* Illustrated Thank-You card */}
        <ThankYouImage />
      </div>
    </div>
  );
}

// ─── My Enquiries ─────────────────────────────────────────────────────────────

function MyEnquiries({ profile }: { profile: UserProfile | null }) {
  const { lang } = useLanguage();
  const email = profile?.email ?? "";
  const { data: enquiries, isLoading } = useGetMyEnquiries(email);

  if (!email) {
    return (
      <div
        className="flex flex-col items-center py-14 gap-4"
        data-ocid="account.enquiries_no_email"
      >
        <div className="w-16 h-16 rounded-2xl bg-muted/50 flex items-center justify-center">
          <MessageSquare size={28} className="text-muted-foreground/40" />
        </div>
        <div className="text-center">
          <p className="text-sm font-semibold text-foreground">
            {lang === "bn" ? "ইমেইল সেট নেই" : "No email address set"}
          </p>
          <p className="text-xs text-muted-foreground mt-1 max-w-xs">
            {lang === "bn"
              ? "অনুসন্ধান ইতিহাস দেখতে প্রোফাইলে ইমেইল যোগ করুন।"
              : "Add your email in profile settings to see your enquiry history."}
          </p>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="space-y-4" data-ocid="account.enquiries_loading_state">
        {["eq-sk-1", "eq-sk-2"].map((k) => (
          <Skeleton key={k} className="h-64 w-full rounded-2xl" />
        ))}
      </div>
    );
  }

  if (!enquiries || enquiries.length === 0) {
    return (
      <div
        className="flex flex-col items-center py-14 gap-4"
        data-ocid="account.enquiries_empty_state"
      >
        <div className="w-16 h-16 rounded-2xl bg-muted/50 flex items-center justify-center">
          <MessageSquare size={28} className="text-muted-foreground/40" />
        </div>
        <div className="text-center">
          <p className="text-sm font-semibold text-foreground">
            {lang === "bn" ? "কোনো অনুসন্ধান নেই" : "No enquiries yet"}
          </p>
          <p className="text-xs text-muted-foreground mt-1 max-w-xs">
            {lang === "bn"
              ? "আপনার প্রশ্ন বা মতামত পাঠাতে নিচের বোতামটি ব্যবহার করুন।"
              : "Use the chat button in the bottom-right corner to send us an enquiry."}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="space-y-5 animate-fade-in"
      data-ocid="account.enquiries_section"
    >
      <div className="flex items-center gap-2 mb-1">
        <div className="w-7 h-7 rounded-lg bg-accent/15 flex items-center justify-center">
          <MessageSquare size={14} className="text-accent" />
        </div>
        <span className="text-sm font-semibold">
          {lang === "bn" ? "আমার অনুসন্ধান" : "My Enquiries"}
        </span>
        <span className="ml-auto text-xs text-muted-foreground">
          {enquiries.length} {lang === "bn" ? "টি" : "total"}
        </span>
      </div>
      {enquiries.map((enquiry, idx) => (
        <EnquiryCard key={enquiry.id} enquiry={enquiry} idx={idx} />
      ))}
    </div>
  );
}

// ─── Main Account Page ────────────────────────────────────────────────────────

export default function AccountPage() {
  const { t, lang } = useLanguage();
  const { isAuthenticated, isLoggingIn, login } = useAuth();
  const {
    data: profile,
    isLoading: profileLoading,
    isError: profileError,
    refetch: refetchProfile,
  } = useUserProfile();
  const { data: loginStatus } = useCallerLoginStatus();

  const rateLimitSeconds =
    loginStatus?.loginAttemptWindowSeconds != null
      ? Number(loginStatus.loginAttemptWindowSeconds)
      : 60;

  if (!isAuthenticated) {
    return (
      <AuthGate
        onLogin={() => void login()}
        isRateLimited={loginStatus?.isRateLimited ?? false}
        rateLimitSeconds={rateLimitSeconds}
        isLoggingIn={isLoggingIn}
      />
    );
  }

  if (profileLoading) {
    return <LoadingSpinner fullPage text={t("loading")} />;
  }

  if (profileError) {
    return (
      <div
        className="max-w-lg mx-auto px-4 py-20 flex flex-col items-center gap-6"
        data-ocid="account.profile_error_state"
      >
        <div className="w-20 h-20 rounded-2xl bg-destructive/10 border border-destructive/20 flex items-center justify-center">
          <AlertTriangle size={32} className="text-destructive/60" />
        </div>
        <div className="text-center space-y-2">
          <h2 className="text-lg font-display font-bold">
            {lang === "bn" ? "তথ্য লোড হয়নি" : "Failed to load profile"}
          </h2>
          <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
            {lang === "bn"
              ? "নেটওয়ার্ক সমস্যা হয়েছে। আবার চেষ্টা করুন।"
              : "There was a network issue. Please try again."}
          </p>
        </div>
        <button
          type="button"
          onClick={() => void refetchProfile()}
          data-ocid="account.retry_button"
          className="cta-primary flex items-center gap-2 px-6 py-2.5 text-sm"
        >
          {lang === "bn" ? "আবার চেষ্টা করুন" : "Retry"}
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-6" data-ocid="account.page">
      {/* Page Header */}
      <div className="flex items-center gap-3 mb-6 pb-5 border-b border-border">
        <div className="w-9 h-9 rounded-xl bg-accent/15 flex items-center justify-center">
          <Settings size={16} className="text-accent" />
        </div>
        <div className="flex-1 min-w-0">
          <h1 className="text-lg font-display font-bold uppercase tracking-wide">
            {t("account")}
          </h1>
          {profile?.name && (
            <p className="text-xs text-muted-foreground truncate">
              {lang === "bn" ? "স্বাগতম" : "Welcome back"}, {profile.name}
            </p>
          )}
        </div>
      </div>

      <Tabs defaultValue="profile" data-ocid="account.tabs">
        <TabsList className="bg-muted/30 rounded-xl h-auto p-1 gap-1 mb-6 w-full flex-wrap">
          <TabsTrigger
            value="profile"
            data-ocid="account.profile_tab"
            className="flex-1 rounded-lg data-[state=active]:bg-card data-[state=active]:text-foreground data-[state=active]:shadow-subtle py-2.5 text-sm font-semibold transition-smooth"
          >
            <User size={13} className="mr-1.5" />
            {lang === "bn" ? "প্রোফাইল" : "Profile"}
          </TabsTrigger>
          <TabsTrigger
            value="addresses"
            data-ocid="account.addresses_tab"
            className="flex-1 rounded-lg data-[state=active]:bg-card data-[state=active]:text-foreground data-[state=active]:shadow-subtle py-2.5 text-sm font-semibold transition-smooth"
          >
            <MapPin size={13} className="mr-1.5" />
            {lang === "bn" ? "ঠিকানা" : "Addresses"}
          </TabsTrigger>
          <TabsTrigger
            value="enquiries"
            data-ocid="account.enquiries_tab"
            className="flex-1 rounded-lg data-[state=active]:bg-card data-[state=active]:text-foreground data-[state=active]:shadow-subtle py-2.5 text-sm font-semibold transition-smooth"
          >
            <MessageSquare size={13} className="mr-1.5" />
            {lang === "bn" ? "অনুসন্ধান" : "Enquiries"}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <ProfileSection profile={profile ?? null} />
        </TabsContent>

        <TabsContent value="addresses">
          <AddressBook />
        </TabsContent>

        <TabsContent value="enquiries">
          <MyEnquiries profile={profile ?? null} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
