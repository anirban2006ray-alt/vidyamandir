import { g as createLucideIcon, j as jsxRuntimeExports, a4 as Root, r as reactExports, a5 as Trigger, l as useComposedRefs, a6 as WarningProvider, a7 as Content, i as composeEventHandlers, a8 as Title, a9 as Description, aa as Close, ab as createDialogScope, ac as Portal, ad as Overlay, ae as createSlottable, m as createContextScope, n as cn, af as buttonVariants, z as useParams, u as useLanguage, A as useAuth, ag as useGetOrder, ah as useDownloadInvoice, ai as useCancelOrder, aj as useUpdateOrderStatus, e as Link, a0 as LoadingSpinner, B as Button, x as formatPrice, ak as MapPin, N as ue, t as Label, I as Input } from "./index-CkX-FUTT.js";
import { S as Separator } from "./separator-CbmwW1Ju.js";
import { P as Package } from "./package-Dua9JYTt.js";
import { m as motion } from "./proxy-DTHE9lA6.js";
import { C as Clock } from "./clock-CEhlLa3Q.js";
import { R as RefreshCw } from "./refresh-cw-DYA8-pkm.js";
import { T as Truck } from "./truck-D8y6sfya.js";
import { C as CircleCheck } from "./circle-check-77caLksi.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$5 = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
];
const ArrowLeft = createLucideIcon("arrow-left", __iconNode$5);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
];
const Calendar = createLucideIcon("calendar", __iconNode$4);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
];
const CircleX = createLucideIcon("circle-x", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
];
const Download = createLucideIcon("download", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "m16 16 2 2 4-4", key: "gfu2re" }],
  [
    "path",
    {
      d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",
      key: "e7tb2h"
    }
  ],
  ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }],
  ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }],
  ["line", { x1: "12", x2: "12", y1: "22", y2: "12", key: "a4e8g8" }]
];
const PackageCheck = createLucideIcon("package-check", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",
      key: "18etb6"
    }
  ],
  ["path", { d: "M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4", key: "xoc0q4" }]
];
const Wallet = createLucideIcon("wallet", __iconNode);
var ROOT_NAME = "AlertDialog";
var [createAlertDialogContext] = createContextScope(ROOT_NAME, [
  createDialogScope
]);
var useDialogScope = createDialogScope();
var AlertDialog$1 = (props) => {
  const { __scopeAlertDialog, ...alertDialogProps } = props;
  const dialogScope = useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Root, { ...dialogScope, ...alertDialogProps, modal: true });
};
AlertDialog$1.displayName = ROOT_NAME;
var TRIGGER_NAME = "AlertDialogTrigger";
var AlertDialogTrigger$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, ...triggerProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Trigger, { ...dialogScope, ...triggerProps, ref: forwardedRef });
  }
);
AlertDialogTrigger$1.displayName = TRIGGER_NAME;
var PORTAL_NAME = "AlertDialogPortal";
var AlertDialogPortal$1 = (props) => {
  const { __scopeAlertDialog, ...portalProps } = props;
  const dialogScope = useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Portal, { ...dialogScope, ...portalProps });
};
AlertDialogPortal$1.displayName = PORTAL_NAME;
var OVERLAY_NAME = "AlertDialogOverlay";
var AlertDialogOverlay$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, ...overlayProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Overlay, { ...dialogScope, ...overlayProps, ref: forwardedRef });
  }
);
AlertDialogOverlay$1.displayName = OVERLAY_NAME;
var CONTENT_NAME = "AlertDialogContent";
var [AlertDialogContentProvider, useAlertDialogContentContext] = createAlertDialogContext(CONTENT_NAME);
var Slottable = createSlottable("AlertDialogContent");
var AlertDialogContent$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, children, ...contentProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    const contentRef = reactExports.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, contentRef);
    const cancelRef = reactExports.useRef(null);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      WarningProvider,
      {
        contentName: CONTENT_NAME,
        titleName: TITLE_NAME,
        docsSlug: "alert-dialog",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogContentProvider, { scope: __scopeAlertDialog, cancelRef, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Content,
          {
            role: "alertdialog",
            ...dialogScope,
            ...contentProps,
            ref: composedRefs,
            onOpenAutoFocus: composeEventHandlers(contentProps.onOpenAutoFocus, (event) => {
              var _a;
              event.preventDefault();
              (_a = cancelRef.current) == null ? void 0 : _a.focus({ preventScroll: true });
            }),
            onPointerDownOutside: (event) => event.preventDefault(),
            onInteractOutside: (event) => event.preventDefault(),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Slottable, { children }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DescriptionWarning, { contentRef })
            ]
          }
        ) })
      }
    );
  }
);
AlertDialogContent$1.displayName = CONTENT_NAME;
var TITLE_NAME = "AlertDialogTitle";
var AlertDialogTitle$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, ...titleProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Title, { ...dialogScope, ...titleProps, ref: forwardedRef });
  }
);
AlertDialogTitle$1.displayName = TITLE_NAME;
var DESCRIPTION_NAME = "AlertDialogDescription";
var AlertDialogDescription$1 = reactExports.forwardRef((props, forwardedRef) => {
  const { __scopeAlertDialog, ...descriptionProps } = props;
  const dialogScope = useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Description, { ...dialogScope, ...descriptionProps, ref: forwardedRef });
});
AlertDialogDescription$1.displayName = DESCRIPTION_NAME;
var ACTION_NAME = "AlertDialogAction";
var AlertDialogAction$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, ...actionProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Close, { ...dialogScope, ...actionProps, ref: forwardedRef });
  }
);
AlertDialogAction$1.displayName = ACTION_NAME;
var CANCEL_NAME = "AlertDialogCancel";
var AlertDialogCancel$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, ...cancelProps } = props;
    const { cancelRef } = useAlertDialogContentContext(CANCEL_NAME, __scopeAlertDialog);
    const dialogScope = useDialogScope(__scopeAlertDialog);
    const ref = useComposedRefs(forwardedRef, cancelRef);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Close, { ...dialogScope, ...cancelProps, ref });
  }
);
AlertDialogCancel$1.displayName = CANCEL_NAME;
var DescriptionWarning = ({ contentRef }) => {
  const MESSAGE = `\`${CONTENT_NAME}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${CONTENT_NAME}\` by passing a \`${DESCRIPTION_NAME}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${CONTENT_NAME}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
  reactExports.useEffect(() => {
    var _a;
    const hasDescription = document.getElementById(
      (_a = contentRef.current) == null ? void 0 : _a.getAttribute("aria-describedby")
    );
    if (!hasDescription) console.warn(MESSAGE);
  }, [MESSAGE, contentRef]);
  return null;
};
var Root2 = AlertDialog$1;
var Trigger2 = AlertDialogTrigger$1;
var Portal2 = AlertDialogPortal$1;
var Overlay2 = AlertDialogOverlay$1;
var Content2 = AlertDialogContent$1;
var Action = AlertDialogAction$1;
var Cancel = AlertDialogCancel$1;
var Title2 = AlertDialogTitle$1;
var Description2 = AlertDialogDescription$1;
function AlertDialog({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Root2, { "data-slot": "alert-dialog", ...props });
}
function AlertDialogTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Trigger2, { "data-slot": "alert-dialog-trigger", ...props });
}
function AlertDialogPortal({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Portal2, { "data-slot": "alert-dialog-portal", ...props });
}
function AlertDialogOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Overlay2,
    {
      "data-slot": "alert-dialog-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      ),
      ...props
    }
  );
}
function AlertDialogContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogPortal, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogOverlay, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Content2,
      {
        "data-slot": "alert-dialog-content",
        className: cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          className
        ),
        ...props
      }
    )
  ] });
}
function AlertDialogHeader({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "alert-dialog-header",
      className: cn("flex flex-col gap-2 text-center sm:text-left", className),
      ...props
    }
  );
}
function AlertDialogFooter({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "alert-dialog-footer",
      className: cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      ),
      ...props
    }
  );
}
function AlertDialogTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Title2,
    {
      "data-slot": "alert-dialog-title",
      className: cn("text-lg font-semibold", className),
      ...props
    }
  );
}
function AlertDialogDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Description2,
    {
      "data-slot": "alert-dialog-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}
function AlertDialogAction({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Action,
    {
      className: cn(buttonVariants(), className),
      ...props
    }
  );
}
function AlertDialogCancel({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Cancel,
    {
      className: cn(buttonVariants({ variant: "outline" }), className),
      ...props
    }
  );
}
const STATUS_CONFIG = {
  processing: {
    label: "Processing",
    labelBn: "প্রক্রিয়া চলছে",
    className: "bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/40",
    dotClass: "bg-amber-500"
  },
  packed: {
    label: "Packed",
    labelBn: "প্যাক করা হয়েছে",
    className: "bg-blue-500/15 text-blue-600 dark:text-blue-400 border-blue-500/40",
    dotClass: "bg-blue-500"
  },
  shipped: {
    label: "Shipped",
    labelBn: "পাঠানো হয়েছে",
    className: "bg-purple-500/15 text-purple-600 dark:text-purple-400 border-purple-500/40",
    dotClass: "bg-purple-500"
  },
  outForDelivery: {
    label: "Out for Delivery",
    labelBn: "ডেলিভারিতে আছে",
    className: "bg-orange-500/15 text-orange-600 dark:text-orange-400 border-orange-500/40",
    dotClass: "bg-orange-500"
  },
  delivered: {
    label: "Delivered",
    labelBn: "পৌঁছে গেছে",
    className: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/40",
    dotClass: "bg-emerald-500"
  },
  cancelled: {
    label: "Cancelled",
    labelBn: "বাতিল",
    className: "bg-red-500/15 text-red-600 dark:text-red-400 border-red-500/40",
    dotClass: "bg-red-500"
  },
  refundRequested: {
    label: "Refund Requested",
    labelBn: "ফেরত চাওয়া হয়েছে",
    className: "bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/40",
    dotClass: "bg-amber-500"
  },
  refunded: {
    label: "Refunded",
    labelBn: "ফেরত দেওয়া হয়েছে",
    className: "bg-muted text-muted-foreground border-border",
    dotClass: "bg-muted-foreground"
  }
};
const TIMELINE_STEPS = [
  {
    key: "placed",
    backendStatus: "processing",
    icon: Package,
    en: "Order Placed",
    bn: "অর্ডার দেওয়া হয়েছে"
  },
  {
    key: "packed",
    backendStatus: null,
    // no direct OrderStatus — comes from history
    icon: PackageCheck,
    en: "Packed",
    bn: "প্যাক করা হয়েছে"
  },
  {
    key: "shipped",
    backendStatus: "shipped",
    icon: Truck,
    en: "Shipped",
    bn: "পাঠানো হয়েছে"
  },
  {
    key: "outForDelivery",
    backendStatus: null,
    icon: Truck,
    en: "Out for Delivery",
    bn: "ডেলিভারিতে আছে"
  },
  {
    key: "delivered",
    backendStatus: "delivered",
    icon: CircleCheck,
    en: "Delivered",
    bn: "পৌঁছে গেছে"
  }
];
const STATUS_TO_STEP = {
  processing: 0,
  shipped: 2,
  delivered: 4
};
function formatStepDate(ts, locale) {
  return new Date(Number(ts) / 1e6).toLocaleDateString(locale, {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit"
  });
}
function formatEstDelivery(ts, lang) {
  const date = new Date(Number(ts) / 1e6);
  return date.toLocaleDateString(lang === "bn" ? "bn-IN" : "en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric"
  });
}
function VerticalStepper({
  currentStatus,
  statusHistory,
  estimatedDeliveryDate,
  courierNote,
  lang
}) {
  var _a;
  const locale = lang === "bn" ? "bn-IN" : "en-IN";
  const currentStepIdx = STATUS_TO_STEP[currentStatus] ?? 0;
  const historyByStepKey = {};
  for (const entry of statusHistory) {
    const stepIdx = STATUS_TO_STEP[entry.status];
    if (stepIdx !== void 0) {
      const stepKey = (_a = TIMELINE_STEPS[stepIdx]) == null ? void 0 : _a.key;
      if (stepKey)
        historyByStepKey[stepKey] = {
          timestamp: entry.timestamp,
          note: entry.note
        };
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", "data-ocid": "order_detail.timeline", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xs font-bold uppercase tracking-widest text-muted-foreground", children: lang === "bn" ? "ডেলিভারি স্ট্যাটাস" : "Delivery Status" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative pl-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute left-[18px] top-4 bottom-4 w-0.5",
          style: { background: "oklch(var(--border))" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute left-[18px] top-4 w-0.5 transition-all duration-700",
          style: {
            background: "oklch(0.72 0.25 40)",
            height: `${currentStepIdx / (TIMELINE_STEPS.length - 1) * 100}%`
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-0", children: TIMELINE_STEPS.map((step, i) => {
        const done = i < currentStepIdx;
        const active = i === currentStepIdx;
        const future = i > currentStepIdx;
        const hist = historyByStepKey[step.key];
        const StepIcon = done ? CircleCheck : step.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: -8 },
            animate: { opacity: 1, x: 0 },
            transition: { delay: i * 0.07, duration: 0.3 },
            className: "relative flex items-start gap-4 pb-6 last:pb-0",
            "data-ocid": `order_detail.step.${i + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `absolute -left-10 w-9 h-9 rounded-full flex items-center justify-center z-10 transition-all duration-300 shrink-0 ${done ? "bg-accent text-accent-foreground shadow-elevated" : active ? "bg-accent text-accent-foreground ring-4 ring-accent/25 shadow-elevated" : "bg-card border-2 border-border text-muted-foreground"}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(StepIcon, { size: 15 })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0 pt-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: `text-sm font-bold leading-tight ${active ? "text-accent" : done ? "text-foreground" : "text-muted-foreground/60"}`,
                      children: lang === "bn" ? step.bn : step.en
                    }
                  ),
                  active && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-semibold px-2 py-0.5 rounded-full bg-accent/15 text-accent", children: lang === "bn" ? "বর্তমান" : "Current" })
                ] }),
                hist && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-0.5 leading-relaxed", children: [
                  formatStepDate(hist.timestamp, locale),
                  hist.note && hist.note !== "Order placed" && ` · ${hist.note}`
                ] }),
                future && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground/40 mt-0.5", children: lang === "bn" ? "অপেক্ষমাণ" : "Pending" })
              ] })
            ]
          },
          step.key
        );
      }) })
    ] }),
    estimatedDeliveryDate && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center gap-2.5 px-4 py-3 rounded-xl border border-accent/30 bg-accent/8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 15, className: "text-accent shrink-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-semibold text-accent", children: [
        lang === "bn" ? "আনুমানিক ডেলিভারি: " : "Estimated Delivery: ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: formatEstDelivery(estimatedDeliveryDate, lang) })
      ] })
    ] }),
    courierNote && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2.5 px-4 py-3 rounded-xl border border-border bg-muted/30", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { size: 14, className: "text-muted-foreground shrink-0 mt-0.5" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground leading-relaxed", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: lang === "bn" ? "কুরিয়ার নোট: " : "Courier Note: " }),
        courierNote
      ] })
    ] })
  ] });
}
function AdminStatusForm({
  orderId,
  currentStatus
}) {
  const [status, setStatus] = reactExports.useState(currentStatus);
  const [note, setNote] = reactExports.useState("");
  const [estDate, setEstDate] = reactExports.useState("");
  const [courierNote, setCourierNote] = reactExports.useState("");
  const { mutate: updateStatus, isPending } = useUpdateOrderStatus();
  const ADMIN_STATUSES = [
    { value: "processing", label: "Processing" },
    { value: "shipped", label: "Shipped" },
    { value: "delivered", label: "Delivered" },
    { value: "cancelled", label: "Cancelled" },
    { value: "refundRequested", label: "Refund Requested" },
    { value: "refunded", label: "Refunded" }
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    const estDeliveryBigInt = estDate ? BigInt(new Date(estDate).getTime()) * BigInt(1e6) : null;
    updateStatus(
      {
        orderId,
        status,
        note: note.trim() || "Status updated by admin",
        estimatedDeliveryDate: estDeliveryBigInt,
        courierNote: courierNote.trim() || null
      },
      {
        onSuccess: () => {
          ue.success("Order status updated!");
          setNote("");
          setEstDate("");
          setCourierNote("");
        },
        onError: () => ue.error("Failed to update status")
      }
    );
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "form",
    {
      onSubmit: handleSubmit,
      className: "space-y-4 pt-4 border-t border-border",
      "data-ocid": "order_detail.admin_form",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs font-bold uppercase tracking-widest text-muted-foreground", children: "Admin: Update Status" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-muted-foreground font-semibold uppercase tracking-wider", children: "New Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "select",
              {
                value: status,
                onChange: (e) => setStatus(e.target.value),
                className: "w-full h-9 rounded-lg border border-input bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50",
                "data-ocid": "order_detail.admin_status_select",
                children: ADMIN_STATUSES.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: s.value, children: s.label }, s.value))
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-muted-foreground font-semibold uppercase tracking-wider", children: "Estimated Delivery Date (optional)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "date",
                value: estDate,
                onChange: (e) => setEstDate(e.target.value),
                className: "h-9 rounded-lg bg-background border-input text-sm",
                "data-ocid": "order_detail.admin_est_delivery_input"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-muted-foreground font-semibold uppercase tracking-wider", children: "Courier Note (optional)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              type: "text",
              value: courierNote,
              onChange: (e) => setCourierNote(e.target.value),
              placeholder: "e.g. Blue Dart - AWB 123456789",
              className: "h-9 rounded-lg bg-background border-input text-sm",
              "data-ocid": "order_detail.admin_courier_note_input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-muted-foreground font-semibold uppercase tracking-wider", children: "Internal Note (optional)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              type: "text",
              value: note,
              onChange: (e) => setNote(e.target.value),
              placeholder: "e.g. Picked up from warehouse",
              className: "h-9 rounded-lg bg-background border-input text-sm",
              "data-ocid": "order_detail.admin_note_input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            type: "submit",
            disabled: isPending,
            className: "cta-primary h-9 px-5 text-sm",
            "data-ocid": "order_detail.admin_update_button",
            children: isPending ? "Updating…" : "Update Status"
          }
        )
      ]
    }
  );
}
function OrderDetailPage() {
  const { id } = useParams({ from: "/orders/$id" });
  const { t, lang } = useLanguage();
  const { isAuthenticated } = useAuth();
  const orderId = BigInt(id);
  const { data: order, isLoading } = useGetOrder(orderId);
  const { mutate: downloadInvoice, isPending: isDownloading } = useDownloadInvoice();
  const { mutate: cancelOrder, isPending: isCancelling } = useCancelOrder();
  const { mutate: updateStatus, isPending: isRefundPending } = useUpdateOrderStatus();
  const [isAdmin] = reactExports.useState(() => {
    try {
      return sessionStorage.getItem("adminUnlocked") === "true";
    } catch {
      return false;
    }
  });
  const handleDownloadInvoice = () => {
    downloadInvoice(orderId, {
      onSuccess: (data) => {
        const blob = new Blob([data], { type: "application/pdf" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `invoice-${id}.pdf`;
        a.click();
        URL.revokeObjectURL(url);
        ue.success("Invoice downloaded!");
      },
      onError: () => ue.error("Failed to download invoice")
    });
  };
  const handleCancelOrder = () => {
    cancelOrder(orderId, {
      onSuccess: () => ue.success(
        lang === "bn" ? "অর্ডার বাতিল করা হয়েছে" : "Order cancelled successfully"
      ),
      onError: () => ue.error(
        lang === "bn" ? "অর্ডার বাতিল করতে ব্যর্থ" : "Failed to cancel order"
      )
    });
  };
  const handleRefundRequest = () => {
    updateStatus(
      {
        orderId,
        status: "refundRequested",
        note: "Refund requested by customer",
        estimatedDeliveryDate: null,
        courierNote: null
      },
      {
        onSuccess: () => ue.success(
          lang === "bn" ? "ফেরতের অনুরোধ সম্পন্ন" : "Refund request submitted"
        ),
        onError: () => ue.error(
          lang === "bn" ? "ফেরতের অনুরোধ ব্যর্থ" : "Failed to request refund"
        )
      }
    );
  };
  if (!isAuthenticated) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "max-w-3xl mx-auto px-4 py-16 text-center",
        "data-ocid": "order_detail.login_required",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: t("signInDesc") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/orders",
              className: "text-accent hover:underline text-sm mt-2 inline-block",
              children: t("back")
            }
          )
        ]
      }
    );
  }
  if (isLoading) return /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingSpinner, { text: t("loading") });
  if (!order) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "max-w-3xl mx-auto px-4 py-16 flex flex-col items-center gap-3",
        "data-ocid": "order_detail.error_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { size: 52, className: "text-muted-foreground/30" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground font-semibold", children: "Order not found" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/orders",
              "data-ocid": "order_detail.back_link",
              className: "text-accent hover:underline text-sm",
              children: [
                "← ",
                t("back")
              ]
            }
          )
        ]
      }
    );
  }
  const cfg = STATUS_CONFIG[order.status] ?? STATUS_CONFIG.processing;
  const isActiveOrder = !["cancelled", "refundRequested", "refunded"].includes(
    order.status
  );
  const canCancel = order.status === "processing";
  const canRefund = order.status === "delivered";
  const orderDate = new Date(Number(order.createdAt) / 1e6);
  const statusHistory = (order.statusHistory ?? []).map((h) => ({
    status: h.status,
    timestamp: h.updatedAt,
    note: h.note
  }));
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-muted/20 min-h-screen", "data-ocid": "order_detail.page", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-4 py-6 sm:py-10 space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: -8 },
        animate: { opacity: 1, y: 0 },
        className: "card-elevation p-5",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/orders",
              "data-ocid": "order_detail.back_link",
              className: "p-1.5 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-accent mt-0.5",
              "aria-label": "Back to orders",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 18 })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-display font-bold text-foreground tracking-tight", children: lang === "bn" ? "অর্ডার" : "Order" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-accent text-base font-bold", children: [
                "#",
                id
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "span",
                {
                  className: `inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${cfg.className}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: `w-1.5 h-1.5 rounded-full ${cfg.dotClass}`
                      }
                    ),
                    lang === "bn" ? cfg.labelBn : cfg.label
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mt-1 flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 13 }),
              orderDate.toLocaleDateString(
                lang === "bn" ? "bn-IN" : "en-IN",
                {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                  year: "numeric"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              type: "button",
              variant: "outline",
              onClick: handleDownloadInvoice,
              disabled: isDownloading,
              "data-ocid": "order_detail.download_invoice_button",
              className: "btn-secondary text-xs px-3 py-2 h-auto shrink-0 hidden sm:flex items-center gap-1.5",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { size: 13 }),
                isDownloading ? lang === "bn" ? "ডাউনলোড..." : "Downloading..." : lang === "bn" ? "ইনভয়েস" : "Invoice"
              ]
            }
          )
        ] })
      }
    ),
    isActiveOrder && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.07 },
        className: "card-elevation p-5",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            VerticalStepper,
            {
              currentStatus: order.status,
              statusHistory,
              estimatedDeliveryDate: order.estimatedDeliveryDate !== void 0 && order.estimatedDeliveryDate !== null ? order.estimatedDeliveryDate : void 0,
              courierNote: order.courierNote !== void 0 && order.courierNote !== null ? order.courierNote : void 0,
              lang
            }
          ),
          isAdmin && /* @__PURE__ */ jsxRuntimeExports.jsx(AdminStatusForm, { orderId, currentStatus: order.status })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.12 },
        className: "card-elevation overflow-hidden",
        "data-ocid": "order_detail.items",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-3 border-b border-border bg-muted/30 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { size: 15, className: "text-accent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-sm font-bold text-foreground", children: [
              order.items.length,
              " ",
              lang === "bn" ? "টি বই" : order.items.length === 1 ? "Item" : "Items"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border", children: order.items.map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-start gap-4 px-5 py-4 hover:bg-muted/20 transition-colors group",
              "data-ocid": `order_detail.item.${idx + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: "/product/$id",
                    params: { id: item.productId.toString() },
                    className: "shrink-0 w-14 rounded-lg bg-primary/10 border border-border overflow-hidden flex items-center justify-center hover:opacity-80 transition-opacity",
                    style: { height: "72px" },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "📚" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Link,
                    {
                      to: "/product/$id",
                      params: { id: item.productId.toString() },
                      className: "text-sm font-semibold text-foreground hover:text-accent transition-colors line-clamp-2 leading-snug",
                      children: item.titleEn
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-1", children: [
                    lang === "bn" ? "পরিমাণ" : "Qty",
                    ": ",
                    Number(item.quantity),
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-1", children: "·" }),
                    formatPrice(item.priceInPaisa),
                    " ",
                    lang === "bn" ? "প্রতিটি" : "each"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-right shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold font-mono text-accent", children: formatPrice(
                  BigInt(Number(item.priceInPaisa) * Number(item.quantity))
                ) }) })
              ]
            },
            item.productId.toString()
          )) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 8 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.16 },
          className: "card-elevation p-5",
          "data-ocid": "order_detail.price_summary",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4", children: lang === "bn" ? "মূল্য বিবরণ" : "Price Details" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2.5 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
                  t("subtotal"),
                  " (",
                  order.items.length,
                  ")"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: formatPrice(order.totalInPaisa + order.discountInPaisa) })
              ] }),
              order.promoCodeApplied && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-emerald-600 dark:text-emerald-400", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  lang === "bn" ? "ছাড়" : "Promo",
                  ":",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs", children: order.promoCodeApplied })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  "−",
                  formatPrice(order.discountInPaisa)
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: t("delivery") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-600 dark:text-emerald-400 font-semibold", children: "FREE" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "my-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-base", children: t("total") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-bold font-mono text-accent", children: formatPrice(order.totalInPaisa) })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 8 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.2 },
          className: "card-elevation p-5 space-y-3",
          "data-ocid": "order_detail.shipping_address",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xs font-bold uppercase tracking-widest text-muted-foreground", children: lang === "bn" ? "ডেলিভারি ঠিকানা" : "Delivery Address" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-lg bg-accent/15 flex items-center justify-center shrink-0 mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 16, className: "text-accent" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm space-y-0.5 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: order.shippingAddress.fullName }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: order.shippingAddress.line1 }),
                order.shippingAddress.line2 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: order.shippingAddress.line2 }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground", children: [
                  order.shippingAddress.city,
                  ", ",
                  order.shippingAddress.district
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground", children: [
                  order.shippingAddress.state,
                  " —",
                  " ",
                  order.shippingAddress.pincode
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-xs mt-1 flex items-center gap-1", children: [
                  "📞 ",
                  order.shippingAddress.phone
                ] })
              ] })
            ] })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.24 },
        className: "card-elevation p-5",
        "data-ocid": "order_detail.payment_method",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-lg bg-accent/15 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { size: 16, className: "text-accent" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-bold uppercase tracking-widest", children: lang === "bn" ? "পেমেন্ট পদ্ধতি" : "Payment Method" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground mt-0.5", children: order.stripePaymentIntentId ? `Card · ****${order.stripePaymentIntentId.slice(-4).toUpperCase()}` : lang === "bn" ? "অনলাইন পেমেন্ট" : "Online Payment" })
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.28 },
        className: "flex flex-col sm:flex-row gap-3",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              type: "button",
              onClick: handleDownloadInvoice,
              disabled: isDownloading,
              "data-ocid": "order_detail.download_invoice_button_mobile",
              className: "sm:hidden btn-secondary flex items-center justify-center gap-2 h-11",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { size: 15 }),
                isDownloading ? lang === "bn" ? "ডাউনলোড হচ্ছে..." : "Downloading..." : t("downloadInvoice")
              ]
            }
          ),
          canCancel && /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialog, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                type: "button",
                variant: "outline",
                "data-ocid": "order_detail.cancel_order_button",
                className: "flex-1 h-11 rounded-lg border-red-500/50 text-red-600 dark:text-red-400 hover:bg-red-500/10 font-semibold gap-2",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { size: 15 }),
                  lang === "bn" ? "অর্ডার বাতিল করুন" : "Cancel Order"
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              AlertDialogContent,
              {
                "data-ocid": "order_detail.cancel_dialog",
                className: "rounded-xl",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTitle, { children: lang === "bn" ? "অর্ডার বাতিল করবেন?" : "Cancel this order?" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogDescription, { children: lang === "bn" ? "এই অর্ডারটি বাতিল হয়ে যাবে। এই পদক্ষেপটি পূর্বাবস্থায় ফেরানো যাবে না।" : "This order will be permanently cancelled and cannot be undone." })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogFooter, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogCancel, { "data-ocid": "order_detail.cancel_dialog_cancel_button", children: lang === "bn" ? "না, রাখুন" : "Keep Order" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      AlertDialogAction,
                      {
                        onClick: handleCancelOrder,
                        disabled: isCancelling,
                        "data-ocid": "order_detail.cancel_dialog_confirm_button",
                        className: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                        children: isCancelling ? lang === "bn" ? "বাতিল হচ্ছে..." : "Cancelling..." : lang === "bn" ? "হ্যাঁ, বাতিল করুন" : "Yes, Cancel"
                      }
                    )
                  ] })
                ]
              }
            )
          ] }),
          canRefund && /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialog, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                type: "button",
                variant: "outline",
                "data-ocid": "order_detail.refund_button",
                className: "flex-1 h-11 rounded-lg border-amber-500/50 text-amber-600 dark:text-amber-400 hover:bg-amber-500/10 font-semibold gap-2",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { size: 15 }),
                  lang === "bn" ? "ফেরত চাইুন" : "Request Refund"
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              AlertDialogContent,
              {
                "data-ocid": "order_detail.refund_dialog",
                className: "rounded-xl",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTitle, { children: lang === "bn" ? "ফেরত চাইবেন?" : "Request a refund?" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogDescription, { children: lang === "bn" ? "আপনি কি এই অর্ডারের জন্য ফেরত চাইতে চান?" : "Are you sure you want to request a refund for this order?" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogFooter, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogCancel, { "data-ocid": "order_detail.refund_dialog_cancel_button", children: lang === "bn" ? "না" : "Cancel" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      AlertDialogAction,
                      {
                        onClick: handleRefundRequest,
                        disabled: isRefundPending,
                        "data-ocid": "order_detail.refund_dialog_confirm_button",
                        className: "cta-primary",
                        children: isRefundPending ? lang === "bn" ? "পাঠানো হচ্ছে..." : "Submitting..." : lang === "bn" ? "হ্যাঁ, ফেরত চাই" : "Yes, Request Refund"
                      }
                    )
                  ] })
                ]
              }
            )
          ] })
        ]
      }
    )
  ] }) });
}
export {
  OrderDetailPage as default
};
