import { g as createLucideIcon, d as useNavigate, C as useAuth, u as useLanguage, as as useListAddresses, _ as useGetCart, bd as useIsStripeConfigured, at as useAddAddress, au as useUpdateAddress, be as useCreateCheckoutSession, $ as useValidatePromoCode, r as reactExports, j as jsxRuntimeExports, B as Button, am as MapPin, X, t as Label, O as ue, I as Input, s as Badge, x as formatPrice, a3 as CircleAlert } from "./index-Bz7t5j9k.js";
import { S as Separator } from "./separator-Cpx2kxJq.js";
import { S as Skeleton } from "./skeleton--qqzATTA.js";
import { S as Switch } from "./switch-B_bM2P_I.js";
import { M as MAX_SAVED_ADDRESSES, a as DELIVERY_CHARGE_NUM, G as GST_RATE, b as FREE_DELIVERY_THRESHOLD_NUM } from "./constants-KmlrnEnm.js";
import { m as motion } from "./proxy-CuVWi4zi.js";
import { C as ChevronRight } from "./chevron-right-MSBYODSW.js";
import { P as Plus } from "./plus-CKyvvNPa.js";
import { A as AnimatePresence } from "./index-DcbCyYDc.js";
import { L as Lock, T as Tag } from "./tag-CGPMIehV.js";
import { C as CircleCheck } from "./circle-check-8lWYaMYa.js";
import { P as Package } from "./package-DFaULm1K.js";
import { T as Truck } from "./truck-D1n7kfGP.js";
import { P as Pen } from "./pen-B8EQ7at_.js";
import { S as ShoppingBag } from "./shopping-bag-G-w0MWOs.js";
import { R as RefreshCw } from "./refresh-cw-C3u5C5QG.js";
import "./index-CPd62lPc.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" }],
  ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }]
];
const CreditCard = createLucideIcon("credit-card", __iconNode);
const CHECKOUT_PROMO_ERROR_MESSAGES = {
  expired: { en: "Promo code has expired", bn: "প্রমো কোডের মেয়াদ শেষ হয়ে গেছে" },
  minSpend: {
    en: "Minimum order value not met",
    bn: "ন্যূনতম অর্ডার মূল্য পূরণ হয়নি"
  },
  ineligible: {
    en: "Code not valid for these items",
    bn: "এই পণ্যগুলির জন্য কোড প্রযোজ্য নয়"
  },
  notFound: { en: "Invalid promo code", bn: "অবৈধ প্রমো কোড" }
};
const EMPTY_FORM = {
  fullName: "",
  phone: "",
  line1: "",
  line2: "",
  city: "",
  district: "",
  state: "West Bengal",
  pincode: ""
};
const STEPS = [
  { id: 1, labelEn: "Address", labelBn: "ঠিকানা", icon: MapPin },
  { id: 2, labelEn: "Payment", labelBn: "পেমেন্ট", icon: CreditCard },
  { id: 3, labelEn: "Confirm", labelBn: "নিশ্চিত", icon: CircleCheck }
];
function StepIndicator({ current }) {
  const { lang } = useLanguage();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "flex items-center justify-center gap-0 mb-6",
      "aria-label": "Checkout progress",
      children: STEPS.map((step, idx) => {
        const done = step.id < current;
        const active = step.id === current;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                animate: {
                  backgroundColor: done || active ? "oklch(var(--accent))" : "transparent",
                  borderColor: done || active ? "oklch(var(--accent))" : "oklch(var(--border))",
                  scale: active ? 1.1 : 1
                },
                transition: { duration: 0.3 },
                className: "w-9 h-9 rounded-full border-2 flex items-center justify-center relative",
                children: [
                  done ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 16, className: "text-accent-foreground" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                    step.icon,
                    {
                      size: 15,
                      className: active ? "text-accent-foreground" : "text-muted-foreground"
                    }
                  ),
                  active && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.div,
                    {
                      className: "absolute inset-0 rounded-full bg-accent/25",
                      animate: { scale: [1, 1.5, 1], opacity: [0.6, 0, 0.6] },
                      transition: {
                        repeat: Number.POSITIVE_INFINITY,
                        duration: 2
                      }
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: `text-[11px] font-semibold ${active ? "text-accent" : done ? "text-foreground" : "text-muted-foreground"}`,
                children: lang === "bn" ? step.labelBn : step.labelEn
              }
            )
          ] }),
          idx < STEPS.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-0.5 mx-1 mb-6 rounded-full overflow-hidden bg-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              className: "h-full bg-accent rounded-full",
              animate: { width: step.id < current ? "100%" : "0%" },
              transition: { duration: 0.4 }
            }
          ) })
        ] }, step.id);
      })
    }
  );
}
function AddressForm({
  initial = EMPTY_FORM,
  onSave,
  onCancel,
  isSaving
}) {
  const [form, setForm] = reactExports.useState(initial);
  const set = (field, value) => setForm((prev) => ({ ...prev, [field]: value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.fullName.trim() || !form.phone.trim() || !form.line1.trim() || !form.city.trim() || !form.pincode.trim()) {
      ue.error("Please fill all required fields");
      return;
    }
    onSave(form);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.form,
    {
      initial: { opacity: 0, y: -8 },
      animate: { opacity: 1, y: 0 },
      onSubmit: handleSubmit,
      className: "space-y-3 bg-muted/20 border border-border rounded-xl p-4",
      "data-ocid": "address.form",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
          {
            id: "fullName",
            label: "Full Name *",
            placeholder: "Suresh Kumar Das",
            field: "fullName",
            ocid: "address.name.input"
          },
          {
            id: "phone",
            label: "Phone *",
            placeholder: "+91 98765 43210",
            field: "phone",
            ocid: "address.phone.input"
          }
        ].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Label,
            {
              htmlFor: f.id,
              className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide",
              children: f.label
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: f.id,
              value: form[f.field],
              onChange: (e) => set(f.field, e.target.value),
              placeholder: f.placeholder,
              className: "input-field h-9 text-sm rounded-lg",
              required: true,
              "data-ocid": f.ocid
            }
          )
        ] }, f.id)) }),
        [
          {
            id: "line1",
            label: "Address Line 1 *",
            placeholder: "House No., Street Name",
            field: "line1",
            ocid: "address.line1.input",
            required: true
          },
          {
            id: "line2",
            label: "Address Line 2",
            placeholder: "Landmark, Area (optional)",
            field: "line2",
            ocid: "address.line2.input",
            required: false
          }
        ].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Label,
            {
              htmlFor: f.id,
              className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide",
              children: f.label
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: f.id,
              value: form[f.field],
              onChange: (e) => set(f.field, e.target.value),
              placeholder: f.placeholder,
              className: "input-field h-9 text-sm rounded-lg",
              required: f.required,
              "data-ocid": f.ocid
            }
          )
        ] }, f.id)),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2 space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Label,
              {
                htmlFor: "city",
                className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide",
                children: "City *"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "city",
                value: form.city,
                onChange: (e) => set("city", e.target.value),
                placeholder: "Burdwan",
                className: "input-field h-9 text-sm rounded-lg",
                required: true,
                "data-ocid": "address.city.input"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Label,
              {
                htmlFor: "district",
                className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide",
                children: "District *"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "district",
                value: form.district,
                onChange: (e) => set("district", e.target.value),
                placeholder: "Purba Bardhaman",
                className: "input-field h-9 text-sm rounded-lg",
                required: true,
                "data-ocid": "address.district.input"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Label,
              {
                htmlFor: "pincode",
                className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide",
                children: "PIN *"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "pincode",
                value: form.pincode,
                onChange: (e) => set("pincode", e.target.value),
                placeholder: "713101",
                maxLength: 6,
                className: "input-field h-9 text-sm rounded-lg",
                required: true,
                "data-ocid": "address.pincode.input"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Label,
            {
              htmlFor: "state",
              className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide",
              children: "State"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "state",
              value: form.state,
              onChange: (e) => set("state", e.target.value),
              className: "input-field h-9 text-sm rounded-lg",
              "data-ocid": "address.state.input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 pt-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              type: "submit",
              disabled: isSaving,
              className: "cta-primary h-9 px-5 text-sm",
              "data-ocid": "address.save_button",
              children: isSaving ? "Saving…" : "Save Address"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              type: "button",
              variant: "outline",
              onClick: onCancel,
              className: "btn-secondary h-9 px-4 text-sm rounded-lg",
              "data-ocid": "address.cancel_button",
              children: "Cancel"
            }
          )
        ] })
      ]
    }
  );
}
function AddressCard({
  address,
  selected,
  onSelect,
  onEdit,
  index
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.label,
    {
      whileHover: { scale: 1.005 },
      whileTap: { scale: 0.998 },
      className: `relative rounded-xl p-4 cursor-pointer transition-smooth flex items-start gap-3 border-2 ${selected ? "border-accent bg-accent/6 shadow-subtle" : "border-border bg-card hover:border-accent/40"}`,
      "data-ocid": `checkout.address.item.${index}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "radio",
            name: "shipping-address",
            checked: selected,
            onChange: onSelect,
            className: "sr-only"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `mt-0.5 h-5 w-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-smooth ${selected ? "border-accent" : "border-muted-foreground/40"}`,
            children: selected && /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { scale: 0 },
                animate: { scale: 1 },
                className: "h-2.5 w-2.5 rounded-full bg-accent"
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-semibold text-sm text-foreground", children: address.fullName }),
            address.isDefault && /* @__PURE__ */ jsxRuntimeExports.jsx(
              Badge,
              {
                variant: "secondary",
                className: "text-[10px] px-2 py-0 rounded-full font-semibold bg-accent/15 text-accent border-0",
                children: "Default"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-1 leading-relaxed", children: [
            address.line1,
            address.line2 ? `, ${address.line2}` : "",
            ", ",
            address.city,
            ",",
            " ",
            address.district,
            ", ",
            address.state,
            " — ",
            address.pincode
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground/80 mt-0.5", children: address.phone })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: (e) => {
              e.stopPropagation();
              onEdit();
            },
            className: "p-1.5 text-muted-foreground hover:text-accent rounded-lg hover:bg-accent/10 transition-smooth flex-shrink-0",
            "aria-label": "Edit address",
            "data-ocid": `checkout.address.edit_button.${index}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pen, { className: "h-3.5 w-3.5" })
          }
        )
      ]
    }
  );
}
function OrderSummary({
  cartItems,
  isLoading,
  promoDiscount,
  promoApplied,
  promoCode,
  onPromoChange,
  onApplyPromo,
  promoLoading,
  promoError,
  onProceed,
  onRetry,
  isProcessing,
  canProceed,
  stripeConfigured,
  hasPaymentError
}) {
  const { lang } = useLanguage();
  const subtotal = cartItems.reduce(
    (acc, item) => acc + Number(item.priceSnapshotInPaisa) * Number(item.quantity),
    0
  );
  const gst = Math.round(subtotal * GST_RATE);
  const shipping = subtotal >= FREE_DELIVERY_THRESHOLD_NUM ? 0 : DELIVERY_CHARGE_NUM;
  const discountAmount = promoApplied ? Math.round(subtotal * promoDiscount / 100) : 0;
  const total = subtotal + gst + shipping - discountAmount;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "bg-card border border-border rounded-xl shadow-card overflow-hidden sticky top-4",
      "data-ocid": "checkout.order_summary.panel",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-primary px-5 py-3.5 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "h-4 w-4 text-primary-foreground/80" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-primary-foreground text-sm uppercase tracking-wider", children: "Order Summary" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 space-y-4", children: [
          isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "space-y-2",
              "data-ocid": "checkout.order_summary.loading_state",
              children: ["a", "b", "c"].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-full rounded-lg" }, k))
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5 max-h-44 overflow-y-auto", children: cartItems.map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex justify-between gap-2 text-sm",
              "data-ocid": `checkout.order_item.${idx + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground truncate min-w-0 flex-1 leading-tight", children: [
                  "Item #",
                  item.productId.toString(),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-1 text-xs", children: [
                    "×",
                    Number(item.quantity)
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-foreground font-medium flex-shrink-0", children: formatPrice(item.priceSnapshotInPaisa * item.quantity) })
              ]
            },
            item.productId.toString()
          )) }),
          cartItems.length === 0 && !isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "text-xs text-muted-foreground text-center py-3",
              "data-ocid": "checkout.cart.empty_state",
              children: "Your cart is empty"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", "data-ocid": "checkout.promo.section", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "h-3.5 w-3.5 text-accent" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-widest text-muted-foreground", children: "Promo Code" })
            ] }),
            promoApplied ? /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-emerald-600 dark:text-emerald-400 font-medium bg-emerald-500/10 px-3 py-2 rounded-lg border border-emerald-500/20", children: [
              "✓ ",
              promoApplied,
              " applied — ",
              promoDiscount,
              "% off"
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    value: promoCode,
                    onChange: (e) => onPromoChange(e.target.value.toUpperCase()),
                    placeholder: "VIDYA10",
                    className: "input-field h-9 text-xs flex-1 rounded-lg",
                    "data-ocid": "checkout.promo.input"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    type: "button",
                    onClick: onApplyPromo,
                    disabled: promoLoading || !promoCode.trim(),
                    className: "h-9 px-3 text-xs rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 font-semibold shrink-0",
                    "data-ocid": "checkout.promo.submit_button",
                    children: promoLoading ? "…" : "Apply"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: promoError && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.p,
                {
                  initial: { opacity: 0, y: -4 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0 },
                  className: "text-xs text-destructive flex items-center gap-1.5",
                  "data-ocid": "checkout.promo.error_state",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-3 w-3" }),
                    CHECKOUT_PROMO_ERROR_MESSAGES[promoError][lang]
                  ]
                }
              ) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-sm", children: [
            [
              {
                label: "Subtotal",
                value: formatPrice(BigInt(subtotal)),
                muted: true
              },
              {
                label: "GST (18%)",
                value: formatPrice(BigInt(gst)),
                muted: true
              },
              {
                label: "Delivery",
                value: shipping === 0 ? "FREE" : formatPrice(BigInt(shipping)),
                free: shipping === 0,
                muted: shipping !== 0
              }
            ].map((row) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: row.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: row.free ? "text-emerald-500 font-semibold" : "font-medium text-foreground",
                  children: row.value
                }
              )
            ] }, row.label)),
            promoApplied && discountAmount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-emerald-600 dark:text-emerald-400 font-medium", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Promo discount" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "−",
                formatPrice(BigInt(discountAmount))
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-baseline", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-foreground", children: "Total" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-2xl font-bold text-accent", children: formatPrice(BigInt(Math.max(0, total))) })
          ] }),
          !stripeConfigured && stripeConfigured !== void 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-amber-600 bg-amber-500/10 px-3 py-2 rounded-lg border border-amber-500/20", children: "⚠ Payments not configured. Contact admin." }),
          hasPaymentError && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "bg-destructive/10 border border-destructive/30 rounded-xl px-4 py-3 space-y-2",
              "data-ocid": "checkout.payment.error_state",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-destructive flex items-center gap-1.5 font-medium", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-3.5 w-3.5 shrink-0" }),
                  "Payment failed — please try again"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    type: "button",
                    size: "sm",
                    onClick: onRetry,
                    className: "w-full rounded-lg text-xs h-8 bg-accent text-accent-foreground hover:bg-accent/90 gap-1.5",
                    "data-ocid": "checkout.payment.retry_button",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "h-3 w-3" }),
                      "Retry Payment"
                    ]
                  }
                )
              ]
            }
          ),
          !hasPaymentError && /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              className: "w-full cta-primary h-12 gap-2 text-sm font-bold",
              onClick: onProceed,
              disabled: !canProceed || isProcessing || isLoading || cartItems.length === 0 || !stripeConfigured,
              "data-ocid": "checkout.pay_button",
              children: isProcessing ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "h-4 w-4 animate-spin" }),
                "Processing…"
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "h-4 w-4" }),
                "Pay with Stripe",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4" })
              ] })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-1.5 pt-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { size: 11, className: "text-muted-foreground/60" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-muted-foreground/60", children: "256-bit SSL encrypted" })
          ] })
        ] })
      ]
    }
  );
}
function CheckoutPage() {
  const navigate = useNavigate();
  const { isAuthenticated, isInitializing, login } = useAuth();
  const { t } = useLanguage();
  const { data: addresses = [], isLoading: addressesLoading } = useListAddresses();
  const { data: cartItems = [], isLoading: cartLoading } = useGetCart();
  const { data: stripeConfigured } = useIsStripeConfigured();
  const addAddressMut = useAddAddress();
  const updateAddressMut = useUpdateAddress();
  const createSessionMut = useCreateCheckoutSession();
  const validatePromoMut = useValidatePromoCode();
  const [selectedAddressId, setSelectedAddressId] = reactExports.useState(
    null
  );
  const [showAddForm, setShowAddForm] = reactExports.useState(false);
  const [editingAddress, setEditingAddress] = reactExports.useState(null);
  const [billingSameAsShipping, setBillingSameAsShipping] = reactExports.useState(true);
  const [isProcessing, setIsProcessing] = reactExports.useState(false);
  const [hasPaymentError, setHasPaymentError] = reactExports.useState(false);
  const [promoCode, setPromoCode] = reactExports.useState("");
  const [promoDiscount, setPromoDiscount] = reactExports.useState(0);
  const [promoApplied, setPromoApplied] = reactExports.useState("");
  const [promoError, setPromoError] = reactExports.useState(null);
  reactExports.useEffect(() => {
    if (addresses.length > 0 && selectedAddressId === null) {
      const def = addresses.find((a) => a.isDefault) ?? addresses[0];
      setSelectedAddressId(def.id);
    }
  }, [addresses, selectedAddressId]);
  if (isInitializing) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "min-h-[60vh] flex items-center justify-center",
        "data-ocid": "checkout.loading_state",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-48 mx-auto rounded-lg" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-32 mx-auto rounded" })
        ] })
      }
    );
  }
  if (!isAuthenticated) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-[60vh] flex items-center justify-center bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        className: "text-center space-y-5 max-w-sm mx-auto px-4",
        "data-ocid": "checkout.auth_gate",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-20 w-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto shadow-card", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "h-9 w-9 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground", children: t("checkout") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: t("signInDesc") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              onClick: login,
              className: "cta-primary w-full h-11 font-bold",
              "data-ocid": "checkout.login_button",
              children: t("login")
            }
          )
        ]
      }
    ) });
  }
  const handleSaveNewAddress = async (data) => {
    if (addresses.length >= MAX_SAVED_ADDRESSES) {
      ue.error(`You can save up to ${MAX_SAVED_ADDRESSES} addresses only`);
      return;
    }
    try {
      const result = await addAddressMut.mutateAsync(data);
      if (result.__kind__ === "ok") setSelectedAddressId(result.ok);
      setShowAddForm(false);
      ue.success("Address saved successfully");
    } catch {
      ue.error("Failed to save address");
    }
  };
  const handleUpdateAddress = async (data) => {
    if (!editingAddress) return;
    try {
      await updateAddressMut.mutateAsync({
        id: editingAddress.id,
        input: data
      });
      setEditingAddress(null);
      ue.success("Address updated");
    } catch {
      ue.error("Failed to update address");
    }
  };
  const handleApplyPromo = () => {
    if (!promoCode.trim()) return;
    setPromoError(null);
    validatePromoMut.mutate(promoCode.trim().toUpperCase(), {
      onSuccess: (promo) => {
        if (promo) {
          setPromoDiscount(Number(promo.discountPercent));
          setPromoApplied(promoCode.trim().toUpperCase());
          ue.success(`Promo applied! ${promo.discountPercent}% off`);
        } else {
          setPromoError("notFound");
        }
      },
      onError: (err) => {
        const kind = err && typeof err === "object" && "__kind__" in err ? err.__kind__ : "";
        if (kind === "PromoExpired") setPromoError("expired");
        else if (kind === "PromoMinSpendNotMet") setPromoError("minSpend");
        else if (kind === "PromoNotApplicable") setPromoError("ineligible");
        else setPromoError("notFound");
      }
    });
  };
  const doCheckout = async () => {
    if (!selectedAddressId) {
      ue.error("Please select a shipping address");
      return;
    }
    if (cartItems.length === 0) {
      ue.error("Your cart is empty");
      return;
    }
    if (!stripeConfigured) {
      ue.error("Payment is not configured yet. Please contact the store.");
      return;
    }
    setIsProcessing(true);
    setHasPaymentError(false);
    try {
      const origin = window.location.origin;
      const sessionUrl = await createSessionMut.mutateAsync({
        items: cartItems.map((item) => ({
          productName: `Book #${item.productId}`,
          currency: "inr",
          quantity: item.quantity,
          priceInCents: item.priceSnapshotInPaisa,
          productDescription: `Product ID: ${item.productId}`
        })),
        successUrl: `${origin}/orders?payment=success`,
        cancelUrl: `${origin}/checkout?payment=cancelled`
      });
      window.location.href = sessionUrl;
    } catch {
      ue.error("Payment failed — please try again");
      setHasPaymentError(true);
      setIsProcessing(false);
    }
  };
  const canProceed = selectedAddressId !== null && cartItems.length > 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "min-h-screen bg-muted/20 pb-20 md:pb-0",
      "data-ocid": "checkout.page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border-b border-border px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto flex items-center gap-1.5 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => void navigate({ to: "/cart" }),
              className: "hover:text-accent transition-colors font-medium",
              "data-ocid": "checkout.back_to_cart.link",
              children: t("cart")
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-3 w-3 opacity-50" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-semibold", children: t("checkout") })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto px-4 py-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(StepIndicator, { current: 1 }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 12 },
                  animate: { opacity: 1, y: 0 },
                  className: "bg-card border border-border rounded-xl overflow-hidden shadow-subtle",
                  "data-ocid": "checkout.shipping.section",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-3.5 border-b border-border flex items-center justify-between", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-semibold text-foreground text-sm flex items-center gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-7 h-7 rounded-lg bg-accent/15 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3.5 w-3.5 text-accent" }) }),
                        t("shippingAddress")
                      ] }),
                      addresses.length < MAX_SAVED_ADDRESSES && !showAddForm && !editingAddress && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        Button,
                        {
                          variant: "outline",
                          size: "sm",
                          className: "btn-secondary rounded-lg text-xs gap-1 h-8",
                          onClick: () => setShowAddForm(true),
                          "data-ocid": "checkout.add_address.open_modal_button",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3 w-3" }),
                            t("addAddress")
                          ]
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 space-y-3", children: [
                      addressesLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "space-y-2",
                          "data-ocid": "checkout.addresses.loading_state",
                          children: [1, 2].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-20 w-full rounded-xl" }, i))
                        }
                      ) : addresses.length === 0 && !showAddForm ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        motion.div,
                        {
                          initial: { opacity: 0 },
                          animate: { opacity: 1 },
                          className: "border-2 border-dashed border-border rounded-xl p-8 text-center",
                          "data-ocid": "checkout.addresses.empty_state",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-full bg-muted flex items-center justify-center mx-auto mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-5 w-5 text-muted-foreground" }) }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-4", children: "No saved addresses yet" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs(
                              Button,
                              {
                                size: "sm",
                                className: "cta-primary px-6 text-xs h-9",
                                onClick: () => setShowAddForm(true),
                                "data-ocid": "checkout.no_address.add_button",
                                children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3.5 w-3.5 mr-1.5" }),
                                  t("addAddress")
                                ]
                              }
                            )
                          ]
                        }
                      ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "space-y-2.5",
                          "data-ocid": "checkout.address_list",
                          children: addresses.map(
                            (addr, idx) => (editingAddress == null ? void 0 : editingAddress.id) === addr.id ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-wide text-foreground", children: t("editAddress") }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "button",
                                  {
                                    type: "button",
                                    onClick: () => setEditingAddress(null),
                                    className: "text-muted-foreground hover:text-foreground p-1",
                                    "data-ocid": "checkout.edit_address.close_button",
                                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" })
                                  }
                                )
                              ] }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                AddressForm,
                                {
                                  initial: {
                                    fullName: addr.fullName,
                                    phone: addr.phone,
                                    line1: addr.line1,
                                    line2: addr.line2,
                                    city: addr.city,
                                    district: addr.district,
                                    state: addr.state,
                                    pincode: addr.pincode
                                  },
                                  onSave: handleUpdateAddress,
                                  onCancel: () => setEditingAddress(null),
                                  isSaving: updateAddressMut.isPending
                                }
                              )
                            ] }, addr.id.toString()) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                              AddressCard,
                              {
                                address: addr,
                                index: idx + 1,
                                selected: selectedAddressId === addr.id,
                                onSelect: () => setSelectedAddressId(addr.id),
                                onEdit: () => {
                                  setEditingAddress(addr);
                                  setShowAddForm(false);
                                }
                              },
                              addr.id.toString()
                            )
                          )
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: showAddForm && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        motion.div,
                        {
                          initial: { opacity: 0, height: 0 },
                          animate: { opacity: 1, height: "auto" },
                          exit: { opacity: 0, height: 0 },
                          "data-ocid": "checkout.add_address.dialog",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2 mt-1", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-wide text-foreground", children: t("addAddress") }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "button",
                                {
                                  type: "button",
                                  onClick: () => setShowAddForm(false),
                                  className: "text-muted-foreground hover:text-foreground p-1",
                                  "data-ocid": "checkout.add_address.close_button",
                                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" })
                                }
                              )
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              AddressForm,
                              {
                                onSave: handleSaveNewAddress,
                                onCancel: () => setShowAddForm(false),
                                isSaving: addAddressMut.isPending
                              }
                            )
                          ]
                        },
                        "add-form"
                      ) })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 12 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.08 },
                  className: "bg-card border border-border rounded-xl overflow-hidden shadow-subtle",
                  "data-ocid": "checkout.billing.section",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-5 py-3.5 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-semibold text-foreground text-sm flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-7 h-7 rounded-lg bg-primary/15 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "h-3.5 w-3.5 text-primary" }) }),
                      "Billing Address"
                    ] }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-4 flex items-center gap-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Switch,
                        {
                          checked: billingSameAsShipping,
                          onCheckedChange: setBillingSameAsShipping,
                          id: "billing-same",
                          "data-ocid": "checkout.billing_same.toggle"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Label,
                        {
                          htmlFor: "billing-same",
                          className: "text-sm cursor-pointer text-foreground",
                          children: "Same as shipping address"
                        }
                      )
                    ] }),
                    !billingSameAsShipping && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground bg-muted/30 mx-5 mb-4 px-3 py-2 rounded-lg border border-border", children: "Billing address is managed by Stripe during payment." })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 12 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.12 },
                  className: "bg-emerald-500/6 border border-emerald-500/20 rounded-xl p-4 flex items-start gap-3",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-full bg-emerald-500/15 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "h-4 w-4 text-emerald-600" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground leading-relaxed", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: "Secure Checkout via Stripe." }),
                      " ",
                      "Your card details are never stored on our servers. All transactions are 256-bit SSL encrypted."
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 12 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.16 },
                  className: "bg-card border border-border rounded-xl p-5",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3", children: "What happens next" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: [
                      {
                        icon: CreditCard,
                        step: "1",
                        text: "You'll be redirected to Stripe's secure payment page"
                      },
                      {
                        icon: CircleCheck,
                        step: "2",
                        text: "Complete payment with your card or UPI"
                      },
                      {
                        icon: Package,
                        step: "3",
                        text: "Receive order confirmation & tracking details"
                      },
                      {
                        icon: Truck,
                        step: "4",
                        text: "Books delivered to your doorstep in 3–7 days"
                      }
                    ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-6 h-6 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0 mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold text-accent", children: item.step }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: item.text })
                    ] }, item.step)) })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              OrderSummary,
              {
                cartItems,
                isLoading: cartLoading,
                promoDiscount,
                promoApplied,
                promoCode,
                onPromoChange: (v) => {
                  setPromoCode(v);
                  setPromoError(null);
                },
                onApplyPromo: handleApplyPromo,
                promoLoading: validatePromoMut.isPending,
                promoError,
                onProceed: doCheckout,
                onRetry: doCheckout,
                isProcessing,
                canProceed,
                stripeConfigured,
                hasPaymentError
              }
            ) })
          ] })
        ] })
      ]
    }
  );
}
export {
  CheckoutPage as default
};
