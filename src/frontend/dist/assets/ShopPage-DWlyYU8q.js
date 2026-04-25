import { g as createLucideIcon, r as reactExports, h as useControllableState, j as jsxRuntimeExports, i as composeEventHandlers, k as Primitive, l as useComposedRefs, m as createContextScope, n as cn, u as useLanguage, o as useSearch, d as useNavigate, a as useListProducts, p as useSearchProducts, q as Search, I as Input, X, B as Button, s as Badge, t as Label } from "./index-Bv-3Ax_9.js";
import { c as clamp, S as Select, a as SelectTrigger, b as SelectValue, d as SelectContent, e as SelectItem, C as ChevronDown } from "./select-Bz5h0K7x.js";
import { S as Separator } from "./separator-BMI_v3JZ.js";
import { S as Skeleton } from "./skeleton-CWQrScHx.js";
import { c as createCollection, u as useDirection } from "./index-BTeRp6xZ.js";
import { u as useSize, a as usePrevious } from "./index-BHqSfdLU.js";
import { S as Switch } from "./switch-BT0woa5T.js";
import { P as ProductCard } from "./ProductCard-DxIxA1eZ.js";
import { C as ChevronRight } from "./chevron-right-D-iKtJgx.js";
import { A as AnimatePresence } from "./index-BcSVGVF_.js";
import { m as motion } from "./proxy-ChrsvNNJ.js";
import { S as Sparkles } from "./sparkles-D6bzKayU.js";
import { C as ChevronLeft } from "./chevron-left-DBajnUZJ.js";
import { S as Star } from "./star-CSAyTHGO.js";
import "./StarRating-BLKGe_aA.js";
import "./zap-CPd3a75H.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "1d0kgt"
    }
  ]
];
const House = createLucideIcon("house", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1", key: "1g98yp" }],
  ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1", key: "6d4xhi" }],
  ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1", key: "nxv5o0" }],
  ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" }]
];
const LayoutGrid = createLucideIcon("layout-grid", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["line", { x1: "21", x2: "14", y1: "4", y2: "4", key: "obuewd" }],
  ["line", { x1: "10", x2: "3", y1: "4", y2: "4", key: "1q6298" }],
  ["line", { x1: "21", x2: "12", y1: "12", y2: "12", key: "1iu8h1" }],
  ["line", { x1: "8", x2: "3", y1: "12", y2: "12", key: "ntss68" }],
  ["line", { x1: "21", x2: "16", y1: "20", y2: "20", key: "14d8ph" }],
  ["line", { x1: "12", x2: "3", y1: "20", y2: "20", key: "m0wm8r" }],
  ["line", { x1: "14", x2: "14", y1: "2", y2: "6", key: "14e1ph" }],
  ["line", { x1: "8", x2: "8", y1: "10", y2: "14", key: "1i6ji0" }],
  ["line", { x1: "16", x2: "16", y1: "18", y2: "22", key: "1lctlv" }]
];
const SlidersHorizontal = createLucideIcon("sliders-horizontal", __iconNode);
var PAGE_KEYS = ["PageUp", "PageDown"];
var ARROW_KEYS = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
var BACK_KEYS = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
};
var SLIDER_NAME = "Slider";
var [Collection, useCollection, createCollectionScope] = createCollection(SLIDER_NAME);
var [createSliderContext] = createContextScope(SLIDER_NAME, [
  createCollectionScope
]);
var [SliderProvider, useSliderContext] = createSliderContext(SLIDER_NAME);
var Slider$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      name,
      min = 0,
      max = 100,
      step = 1,
      orientation = "horizontal",
      disabled = false,
      minStepsBetweenThumbs = 0,
      defaultValue = [min],
      value,
      onValueChange = () => {
      },
      onValueCommit = () => {
      },
      inverted = false,
      form,
      ...sliderProps
    } = props;
    const thumbRefs = reactExports.useRef(/* @__PURE__ */ new Set());
    const valueIndexToChangeRef = reactExports.useRef(0);
    const isHorizontal = orientation === "horizontal";
    const SliderOrientation = isHorizontal ? SliderHorizontal : SliderVertical;
    const [values = [], setValues] = useControllableState({
      prop: value,
      defaultProp: defaultValue,
      onChange: (value2) => {
        var _a;
        const thumbs = [...thumbRefs.current];
        (_a = thumbs[valueIndexToChangeRef.current]) == null ? void 0 : _a.focus();
        onValueChange(value2);
      }
    });
    const valuesBeforeSlideStartRef = reactExports.useRef(values);
    function handleSlideStart(value2) {
      const closestIndex = getClosestValueIndex(values, value2);
      updateValues(value2, closestIndex);
    }
    function handleSlideMove(value2) {
      updateValues(value2, valueIndexToChangeRef.current);
    }
    function handleSlideEnd() {
      const prevValue = valuesBeforeSlideStartRef.current[valueIndexToChangeRef.current];
      const nextValue = values[valueIndexToChangeRef.current];
      const hasChanged = nextValue !== prevValue;
      if (hasChanged) onValueCommit(values);
    }
    function updateValues(value2, atIndex, { commit } = { commit: false }) {
      const decimalCount = getDecimalCount(step);
      const snapToStep = roundValue(Math.round((value2 - min) / step) * step + min, decimalCount);
      const nextValue = clamp(snapToStep, [min, max]);
      setValues((prevValues = []) => {
        const nextValues = getNextSortedValues(prevValues, nextValue, atIndex);
        if (hasMinStepsBetweenValues(nextValues, minStepsBetweenThumbs * step)) {
          valueIndexToChangeRef.current = nextValues.indexOf(nextValue);
          const hasChanged = String(nextValues) !== String(prevValues);
          if (hasChanged && commit) onValueCommit(nextValues);
          return hasChanged ? nextValues : prevValues;
        } else {
          return prevValues;
        }
      });
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      SliderProvider,
      {
        scope: props.__scopeSlider,
        name,
        disabled,
        min,
        max,
        valueIndexToChangeRef,
        thumbs: thumbRefs.current,
        values,
        orientation,
        form,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Collection.Provider, { scope: props.__scopeSlider, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Collection.Slot, { scope: props.__scopeSlider, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          SliderOrientation,
          {
            "aria-disabled": disabled,
            "data-disabled": disabled ? "" : void 0,
            ...sliderProps,
            ref: forwardedRef,
            onPointerDown: composeEventHandlers(sliderProps.onPointerDown, () => {
              if (!disabled) valuesBeforeSlideStartRef.current = values;
            }),
            min,
            max,
            inverted,
            onSlideStart: disabled ? void 0 : handleSlideStart,
            onSlideMove: disabled ? void 0 : handleSlideMove,
            onSlideEnd: disabled ? void 0 : handleSlideEnd,
            onHomeKeyDown: () => !disabled && updateValues(min, 0, { commit: true }),
            onEndKeyDown: () => !disabled && updateValues(max, values.length - 1, { commit: true }),
            onStepKeyDown: ({ event, direction: stepDirection }) => {
              if (!disabled) {
                const isPageKey = PAGE_KEYS.includes(event.key);
                const isSkipKey = isPageKey || event.shiftKey && ARROW_KEYS.includes(event.key);
                const multiplier = isSkipKey ? 10 : 1;
                const atIndex = valueIndexToChangeRef.current;
                const value2 = values[atIndex];
                const stepInDirection = step * multiplier * stepDirection;
                updateValues(value2 + stepInDirection, atIndex, { commit: true });
              }
            }
          }
        ) }) })
      }
    );
  }
);
Slider$1.displayName = SLIDER_NAME;
var [SliderOrientationProvider, useSliderOrientationContext] = createSliderContext(SLIDER_NAME, {
  startEdge: "left",
  endEdge: "right",
  size: "width",
  direction: 1
});
var SliderHorizontal = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      min,
      max,
      dir,
      inverted,
      onSlideStart,
      onSlideMove,
      onSlideEnd,
      onStepKeyDown,
      ...sliderProps
    } = props;
    const [slider, setSlider] = reactExports.useState(null);
    const composedRefs = useComposedRefs(forwardedRef, (node) => setSlider(node));
    const rectRef = reactExports.useRef(void 0);
    const direction = useDirection(dir);
    const isDirectionLTR = direction === "ltr";
    const isSlidingFromLeft = isDirectionLTR && !inverted || !isDirectionLTR && inverted;
    function getValueFromPointer(pointerPosition) {
      const rect = rectRef.current || slider.getBoundingClientRect();
      const input = [0, rect.width];
      const output = isSlidingFromLeft ? [min, max] : [max, min];
      const value = linearScale(input, output);
      rectRef.current = rect;
      return value(pointerPosition - rect.left);
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      SliderOrientationProvider,
      {
        scope: props.__scopeSlider,
        startEdge: isSlidingFromLeft ? "left" : "right",
        endEdge: isSlidingFromLeft ? "right" : "left",
        direction: isSlidingFromLeft ? 1 : -1,
        size: "width",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          SliderImpl,
          {
            dir: direction,
            "data-orientation": "horizontal",
            ...sliderProps,
            ref: composedRefs,
            style: {
              ...sliderProps.style,
              ["--radix-slider-thumb-transform"]: "translateX(-50%)"
            },
            onSlideStart: (event) => {
              const value = getValueFromPointer(event.clientX);
              onSlideStart == null ? void 0 : onSlideStart(value);
            },
            onSlideMove: (event) => {
              const value = getValueFromPointer(event.clientX);
              onSlideMove == null ? void 0 : onSlideMove(value);
            },
            onSlideEnd: () => {
              rectRef.current = void 0;
              onSlideEnd == null ? void 0 : onSlideEnd();
            },
            onStepKeyDown: (event) => {
              const slideDirection = isSlidingFromLeft ? "from-left" : "from-right";
              const isBackKey = BACK_KEYS[slideDirection].includes(event.key);
              onStepKeyDown == null ? void 0 : onStepKeyDown({ event, direction: isBackKey ? -1 : 1 });
            }
          }
        )
      }
    );
  }
);
var SliderVertical = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      min,
      max,
      inverted,
      onSlideStart,
      onSlideMove,
      onSlideEnd,
      onStepKeyDown,
      ...sliderProps
    } = props;
    const sliderRef = reactExports.useRef(null);
    const ref = useComposedRefs(forwardedRef, sliderRef);
    const rectRef = reactExports.useRef(void 0);
    const isSlidingFromBottom = !inverted;
    function getValueFromPointer(pointerPosition) {
      const rect = rectRef.current || sliderRef.current.getBoundingClientRect();
      const input = [0, rect.height];
      const output = isSlidingFromBottom ? [max, min] : [min, max];
      const value = linearScale(input, output);
      rectRef.current = rect;
      return value(pointerPosition - rect.top);
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      SliderOrientationProvider,
      {
        scope: props.__scopeSlider,
        startEdge: isSlidingFromBottom ? "bottom" : "top",
        endEdge: isSlidingFromBottom ? "top" : "bottom",
        size: "height",
        direction: isSlidingFromBottom ? 1 : -1,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          SliderImpl,
          {
            "data-orientation": "vertical",
            ...sliderProps,
            ref,
            style: {
              ...sliderProps.style,
              ["--radix-slider-thumb-transform"]: "translateY(50%)"
            },
            onSlideStart: (event) => {
              const value = getValueFromPointer(event.clientY);
              onSlideStart == null ? void 0 : onSlideStart(value);
            },
            onSlideMove: (event) => {
              const value = getValueFromPointer(event.clientY);
              onSlideMove == null ? void 0 : onSlideMove(value);
            },
            onSlideEnd: () => {
              rectRef.current = void 0;
              onSlideEnd == null ? void 0 : onSlideEnd();
            },
            onStepKeyDown: (event) => {
              const slideDirection = isSlidingFromBottom ? "from-bottom" : "from-top";
              const isBackKey = BACK_KEYS[slideDirection].includes(event.key);
              onStepKeyDown == null ? void 0 : onStepKeyDown({ event, direction: isBackKey ? -1 : 1 });
            }
          }
        )
      }
    );
  }
);
var SliderImpl = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeSlider,
      onSlideStart,
      onSlideMove,
      onSlideEnd,
      onHomeKeyDown,
      onEndKeyDown,
      onStepKeyDown,
      ...sliderProps
    } = props;
    const context = useSliderContext(SLIDER_NAME, __scopeSlider);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.span,
      {
        ...sliderProps,
        ref: forwardedRef,
        onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
          if (event.key === "Home") {
            onHomeKeyDown(event);
            event.preventDefault();
          } else if (event.key === "End") {
            onEndKeyDown(event);
            event.preventDefault();
          } else if (PAGE_KEYS.concat(ARROW_KEYS).includes(event.key)) {
            onStepKeyDown(event);
            event.preventDefault();
          }
        }),
        onPointerDown: composeEventHandlers(props.onPointerDown, (event) => {
          const target = event.target;
          target.setPointerCapture(event.pointerId);
          event.preventDefault();
          if (context.thumbs.has(target)) {
            target.focus();
          } else {
            onSlideStart(event);
          }
        }),
        onPointerMove: composeEventHandlers(props.onPointerMove, (event) => {
          const target = event.target;
          if (target.hasPointerCapture(event.pointerId)) onSlideMove(event);
        }),
        onPointerUp: composeEventHandlers(props.onPointerUp, (event) => {
          const target = event.target;
          if (target.hasPointerCapture(event.pointerId)) {
            target.releasePointerCapture(event.pointerId);
            onSlideEnd(event);
          }
        })
      }
    );
  }
);
var TRACK_NAME = "SliderTrack";
var SliderTrack = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSlider, ...trackProps } = props;
    const context = useSliderContext(TRACK_NAME, __scopeSlider);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.span,
      {
        "data-disabled": context.disabled ? "" : void 0,
        "data-orientation": context.orientation,
        ...trackProps,
        ref: forwardedRef
      }
    );
  }
);
SliderTrack.displayName = TRACK_NAME;
var RANGE_NAME = "SliderRange";
var SliderRange = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSlider, ...rangeProps } = props;
    const context = useSliderContext(RANGE_NAME, __scopeSlider);
    const orientation = useSliderOrientationContext(RANGE_NAME, __scopeSlider);
    const ref = reactExports.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref);
    const valuesCount = context.values.length;
    const percentages = context.values.map(
      (value) => convertValueToPercentage(value, context.min, context.max)
    );
    const offsetStart = valuesCount > 1 ? Math.min(...percentages) : 0;
    const offsetEnd = 100 - Math.max(...percentages);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.span,
      {
        "data-orientation": context.orientation,
        "data-disabled": context.disabled ? "" : void 0,
        ...rangeProps,
        ref: composedRefs,
        style: {
          ...props.style,
          [orientation.startEdge]: offsetStart + "%",
          [orientation.endEdge]: offsetEnd + "%"
        }
      }
    );
  }
);
SliderRange.displayName = RANGE_NAME;
var THUMB_NAME = "SliderThumb";
var SliderThumb = reactExports.forwardRef(
  (props, forwardedRef) => {
    const getItems = useCollection(props.__scopeSlider);
    const [thumb, setThumb] = reactExports.useState(null);
    const composedRefs = useComposedRefs(forwardedRef, (node) => setThumb(node));
    const index = reactExports.useMemo(
      () => thumb ? getItems().findIndex((item) => item.ref.current === thumb) : -1,
      [getItems, thumb]
    );
    return /* @__PURE__ */ jsxRuntimeExports.jsx(SliderThumbImpl, { ...props, ref: composedRefs, index });
  }
);
var SliderThumbImpl = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSlider, index, name, ...thumbProps } = props;
    const context = useSliderContext(THUMB_NAME, __scopeSlider);
    const orientation = useSliderOrientationContext(THUMB_NAME, __scopeSlider);
    const [thumb, setThumb] = reactExports.useState(null);
    const composedRefs = useComposedRefs(forwardedRef, (node) => setThumb(node));
    const isFormControl = thumb ? context.form || !!thumb.closest("form") : true;
    const size = useSize(thumb);
    const value = context.values[index];
    const percent = value === void 0 ? 0 : convertValueToPercentage(value, context.min, context.max);
    const label = getLabel(index, context.values.length);
    const orientationSize = size == null ? void 0 : size[orientation.size];
    const thumbInBoundsOffset = orientationSize ? getThumbInBoundsOffset(orientationSize, percent, orientation.direction) : 0;
    reactExports.useEffect(() => {
      if (thumb) {
        context.thumbs.add(thumb);
        return () => {
          context.thumbs.delete(thumb);
        };
      }
    }, [thumb, context.thumbs]);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "span",
      {
        style: {
          transform: "var(--radix-slider-thumb-transform)",
          position: "absolute",
          [orientation.startEdge]: `calc(${percent}% + ${thumbInBoundsOffset}px)`
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Collection.ItemSlot, { scope: props.__scopeSlider, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Primitive.span,
            {
              role: "slider",
              "aria-label": props["aria-label"] || label,
              "aria-valuemin": context.min,
              "aria-valuenow": value,
              "aria-valuemax": context.max,
              "aria-orientation": context.orientation,
              "data-orientation": context.orientation,
              "data-disabled": context.disabled ? "" : void 0,
              tabIndex: context.disabled ? void 0 : 0,
              ...thumbProps,
              ref: composedRefs,
              style: value === void 0 ? { display: "none" } : props.style,
              onFocus: composeEventHandlers(props.onFocus, () => {
                context.valueIndexToChangeRef.current = index;
              })
            }
          ) }),
          isFormControl && /* @__PURE__ */ jsxRuntimeExports.jsx(
            SliderBubbleInput,
            {
              name: name ?? (context.name ? context.name + (context.values.length > 1 ? "[]" : "") : void 0),
              form: context.form,
              value
            },
            index
          )
        ]
      }
    );
  }
);
SliderThumb.displayName = THUMB_NAME;
var BUBBLE_INPUT_NAME = "RadioBubbleInput";
var SliderBubbleInput = reactExports.forwardRef(
  ({ __scopeSlider, value, ...props }, forwardedRef) => {
    const ref = reactExports.useRef(null);
    const composedRefs = useComposedRefs(ref, forwardedRef);
    const prevValue = usePrevious(value);
    reactExports.useEffect(() => {
      const input = ref.current;
      if (!input) return;
      const inputProto = window.HTMLInputElement.prototype;
      const descriptor = Object.getOwnPropertyDescriptor(inputProto, "value");
      const setValue = descriptor.set;
      if (prevValue !== value && setValue) {
        const event = new Event("input", { bubbles: true });
        setValue.call(input, value);
        input.dispatchEvent(event);
      }
    }, [prevValue, value]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.input,
      {
        style: { display: "none" },
        ...props,
        ref: composedRefs,
        defaultValue: value
      }
    );
  }
);
SliderBubbleInput.displayName = BUBBLE_INPUT_NAME;
function getNextSortedValues(prevValues = [], nextValue, atIndex) {
  const nextValues = [...prevValues];
  nextValues[atIndex] = nextValue;
  return nextValues.sort((a, b) => a - b);
}
function convertValueToPercentage(value, min, max) {
  const maxSteps = max - min;
  const percentPerStep = 100 / maxSteps;
  const percentage = percentPerStep * (value - min);
  return clamp(percentage, [0, 100]);
}
function getLabel(index, totalValues) {
  if (totalValues > 2) {
    return `Value ${index + 1} of ${totalValues}`;
  } else if (totalValues === 2) {
    return ["Minimum", "Maximum"][index];
  } else {
    return void 0;
  }
}
function getClosestValueIndex(values, nextValue) {
  if (values.length === 1) return 0;
  const distances = values.map((value) => Math.abs(value - nextValue));
  const closestDistance = Math.min(...distances);
  return distances.indexOf(closestDistance);
}
function getThumbInBoundsOffset(width, left, direction) {
  const halfWidth = width / 2;
  const halfPercent = 50;
  const offset = linearScale([0, halfPercent], [0, halfWidth]);
  return (halfWidth - offset(left) * direction) * direction;
}
function getStepsBetweenValues(values) {
  return values.slice(0, -1).map((value, index) => values[index + 1] - value);
}
function hasMinStepsBetweenValues(values, minStepsBetweenValues) {
  if (minStepsBetweenValues > 0) {
    const stepsBetweenValues = getStepsBetweenValues(values);
    const actualMinStepsBetweenValues = Math.min(...stepsBetweenValues);
    return actualMinStepsBetweenValues >= minStepsBetweenValues;
  }
  return true;
}
function linearScale(input, output) {
  return (value) => {
    if (input[0] === input[1] || output[0] === output[1]) return output[0];
    const ratio = (output[1] - output[0]) / (input[1] - input[0]);
    return output[0] + ratio * (value - input[0]);
  };
}
function getDecimalCount(value) {
  return (String(value).split(".")[1] || "").length;
}
function roundValue(value, decimalCount) {
  const rounder = Math.pow(10, decimalCount);
  return Math.round(value * rounder) / rounder;
}
var Root = Slider$1;
var Track = SliderTrack;
var Range = SliderRange;
var Thumb = SliderThumb;
function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}) {
  const _values = reactExports.useMemo(
    () => Array.isArray(value) ? value : Array.isArray(defaultValue) ? defaultValue : [min, max],
    [value, defaultValue, min, max]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Root,
    {
      "data-slot": "slider",
      defaultValue,
      value,
      min,
      max,
      className: cn(
        "relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Track,
          {
            "data-slot": "slider-track",
            className: cn(
              "bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"
            ),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Range,
              {
                "data-slot": "slider-range",
                className: cn(
                  "bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
                )
              }
            )
          }
        ),
        Array.from({ length: _values.length }, (value2, _) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Thumb,
          {
            "data-slot": "slider-thumb",
            className: "border-primary bg-background ring-ring/50 block size-4 shrink-0 rounded-full border shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"
          },
          `${value2}`
        ))
      ]
    }
  );
}
const GENRES = [
  {
    value: "fiction",
    labelEn: "Fiction",
    labelBn: "কথাসাহিত্য",
    icon: "📖"
  },
  {
    value: "bengaliClassics",
    labelEn: "Bengali Classics",
    labelBn: "বাংলা ক্লাসিক",
    icon: "🪷"
  },
  { value: "poetry", labelEn: "Poetry", labelBn: "কবিতা", icon: "✍️" },
  {
    value: "nonFiction",
    labelEn: "Non-Fiction",
    labelBn: "তথ্যমূলক",
    icon: "📊"
  },
  {
    value: "childrens",
    labelEn: "Children's",
    labelBn: "শিশু সাহিত্য",
    icon: "🎨"
  },
  {
    value: "academic",
    labelEn: "Academic",
    labelBn: "একাডেমিক",
    icon: "🎓"
  },
  {
    value: "history",
    labelEn: "History",
    labelBn: "ইতিহাস",
    icon: "🏛️"
  },
  {
    value: "biography",
    labelEn: "Biography",
    labelBn: "জীবনী",
    icon: "👤"
  },
  {
    value: "religion",
    labelEn: "Religion",
    labelBn: "ধর্ম",
    icon: "🕊️"
  },
  {
    value: "science",
    labelEn: "Science",
    labelBn: "বিজ্ঞান",
    icon: "🔬"
  },
  { value: "other", labelEn: "Other", labelBn: "অন্যান্য", icon: "📚" }
];
const SORT_OPTIONS = [
  {
    id: "rating_desc",
    labelEn: "Top Rated",
    labelBn: "সর্বোচ্চ রেটিং",
    field: "rating",
    order: "desc"
  },
  {
    id: "price_asc",
    labelEn: "Price: Low to High",
    labelBn: "মূল্য: কম থেকে বেশি",
    field: "price",
    order: "asc"
  },
  {
    id: "price_desc",
    labelEn: "Price: High to Low",
    labelBn: "মূল্য: বেশি থেকে কম",
    field: "price",
    order: "desc"
  },
  {
    id: "newest",
    labelEn: "Newest First",
    labelBn: "নতুন প্রথমে",
    field: "publicationDate",
    order: "desc"
  }
];
const RATING_OPTIONS = [
  { value: 4, labelEn: "4★ & above", labelBn: "৪★ ও তার বেশি", stars: 4 },
  { value: 3, labelEn: "3★ & above", labelBn: "৩★ ও তার বেশি", stars: 3 },
  { value: 2, labelEn: "2★ & above", labelBn: "২★ ও তার বেশি", stars: 2 }
];
const LANGUAGE_LABELS = {
  bengali: { en: "Bengali", bn: "বাংলা" },
  english: { en: "English", bn: "ইংরেজি" },
  bilingual: { en: "Bilingual", bn: "দ্বিভাষিক" }
};
const PAGE_SIZE = BigInt(24);
const MAX_PRICE_RS = 2e3;
const DEFAULT_FILTERS = {
  genre: void 0,
  langFilter: void 0,
  inStock: false,
  minPriceRs: 0,
  maxPriceRs: MAX_PRICE_RS,
  minRating: void 0,
  sortId: ""
};
function FilterSection({
  title,
  children,
  defaultOpen = true
}) {
  const [open, setOpen] = reactExports.useState(defaultOpen);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: () => setOpen(!open),
        className: "flex items-center justify-between w-full text-[11px] font-bold text-foreground uppercase tracking-widest mb-2 hover:text-accent transition-colors",
        "aria-expanded": open,
        children: [
          title,
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.span,
            {
              animate: { rotate: open ? 0 : -90 },
              transition: { duration: 0.18 },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { size: 13, className: "text-muted-foreground" })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { initial: false, children: open && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { height: 0, opacity: 0 },
        animate: { height: "auto", opacity: 1 },
        exit: { height: 0, opacity: 0 },
        transition: { duration: 0.2, ease: "easeInOut" },
        style: { overflow: "hidden" },
        children
      },
      "content"
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "mt-3 opacity-50" })
  ] });
}
function FilterChip({
  label,
  onRemove
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.button,
    {
      type: "button",
      onClick: onRemove,
      initial: { scale: 0.85, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      exit: { scale: 0.85, opacity: 0 },
      transition: { duration: 0.15 },
      className: "inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium border border-accent/40 text-accent bg-accent/10 hover:bg-accent/20 transition-colors cursor-pointer",
      children: [
        label,
        /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 10 })
      ]
    }
  );
}
function StarRow({ count }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex items-center gap-0.5", children: [0, 1, 2, 3, 4].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    Star,
    {
      size: 11,
      className: i < count ? "fill-amber-400 text-amber-400" : "text-muted-foreground/30 fill-current"
    },
    i
  )) });
}
function EmptyState({ lang, onClear }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      className: "col-span-full py-16 flex flex-col items-center gap-5 text-center",
      "data-ocid": "shop.empty_state",
      initial: { opacity: 0, y: 16 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.3 },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "svg",
            {
              width: "100",
              height: "90",
              viewBox: "0 0 100 90",
              fill: "none",
              className: "opacity-60",
              "aria-label": "Empty book stack illustration",
              role: "img",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "rect",
                  {
                    x: "14",
                    y: "54",
                    width: "72",
                    height: "14",
                    rx: "3",
                    fill: "currentColor",
                    className: "text-accent/30"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "rect",
                  {
                    x: "18",
                    y: "42",
                    width: "64",
                    height: "14",
                    rx: "3",
                    fill: "currentColor",
                    className: "text-primary/20"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "rect",
                  {
                    x: "22",
                    y: "30",
                    width: "56",
                    height: "14",
                    rx: "3",
                    fill: "currentColor",
                    className: "text-accent/40"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "rect",
                  {
                    x: "26",
                    y: "18",
                    width: "48",
                    height: "14",
                    rx: "3",
                    fill: "currentColor",
                    className: "text-primary/30"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "circle",
                  {
                    cx: "50",
                    cy: "72",
                    r: "12",
                    fill: "currentColor",
                    className: "text-muted/60"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "path",
                  {
                    d: "M44 72 L56 72 M50 66 L50 78",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    className: "text-muted-foreground"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Sparkles,
            {
              size: 18,
              className: "absolute -top-1 -right-1 text-accent animate-pulse"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base font-display font-bold text-foreground", children: lang === "bn" ? "কোনো ফলাফল পাওয়া যায়নি" : "No results found" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground max-w-xs", children: lang === "bn" ? "অন্য ফিল্টার বা অনুসন্ধান শব্দ ব্যবহার করুন" : "Try adjusting your filters or searching with different keywords" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            type: "button",
            onClick: onClear,
            "data-ocid": "shop.clear_filters_button",
            className: "cta-primary text-xs h-9 px-5",
            children: lang === "bn" ? "সব ফিল্টার মুছুন" : "Clear All Filters"
          }
        )
      ]
    }
  );
}
function ProductGridSkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-dense overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "aspect-[3/4] w-full" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-3/4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-1/2" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-1/3" })
    ] })
  ] }, i)) });
}
function ShopPage() {
  const { lang } = useLanguage();
  const searchParams = useSearch({ from: "/shop" });
  const navigate = useNavigate();
  const [filters, setFilters] = reactExports.useState({
    ...DEFAULT_FILTERS,
    genre: searchParams.genre,
    sortId: searchParams.sort ?? ""
  });
  const [page, setPage] = reactExports.useState(searchParams.page ?? 1);
  const [searchInput, setSearchInput] = reactExports.useState(searchParams.q ?? "");
  const [searchQuery, setSearchQuery] = reactExports.useState(searchParams.q ?? "");
  const [mobileSidebarOpen, setMobileSidebarOpen] = reactExports.useState(false);
  const debounceRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    setSearchInput(searchParams.q ?? "");
    setSearchQuery(searchParams.q ?? "");
  }, [searchParams.q]);
  reactExports.useEffect(() => {
    setFilters((f) => ({
      ...f,
      genre: searchParams.genre
    }));
  }, [searchParams.genre]);
  const handleSearchInputChange = reactExports.useCallback(
    (value) => {
      setSearchInput(value);
      if (debounceRef.current) clearTimeout(debounceRef.current);
      debounceRef.current = setTimeout(() => {
        setSearchQuery(value.trim());
        void navigate({
          to: "/shop",
          search: (prev) => ({
            ...prev,
            q: value.trim() || void 0,
            page: 1
          })
        });
      }, 300);
    },
    [navigate]
  );
  reactExports.useEffect(() => {
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, []);
  const pushFiltersToURL = reactExports.useCallback(
    (newFilters, newPage, q) => {
      void navigate({
        to: "/shop",
        search: {
          q: q ?? (searchQuery || void 0),
          genre: newFilters.genre ?? void 0,
          lang: newFilters.langFilter ?? void 0,
          sort: newFilters.sortId || void 0,
          page: newPage > 1 ? newPage : void 0
        }
      });
    },
    [navigate, searchQuery]
  );
  const isSearchMode = searchQuery.trim().length > 1;
  const offset = BigInt(page - 1) * PAGE_SIZE;
  const filter = {
    inStockOnly: filters.inStock,
    genre: filters.genre,
    language: filters.langFilter,
    searchQuery: isSearchMode ? searchQuery : void 0,
    minPriceInPaisa: filters.minPriceRs > 0 ? BigInt(filters.minPriceRs * 100) : void 0,
    maxPriceInPaisa: filters.maxPriceRs < MAX_PRICE_RS ? BigInt(filters.maxPriceRs * 100) : void 0,
    minRating: filters.minRating
  };
  const activeSortOption = SORT_OPTIONS.find((s) => s.id === filters.sortId);
  const sort = activeSortOption ? { field: activeSortOption.field, order: activeSortOption.order } : null;
  const { data: browseProducts, isLoading: browseLoading } = useListProducts(
    isSearchMode ? null : filter,
    isSearchMode ? null : sort,
    isSearchMode ? BigInt(0) : offset,
    PAGE_SIZE
  );
  const { data: searchResults, isLoading: searchLoading } = useSearchProducts(
    searchQuery,
    PAGE_SIZE
  );
  const { data: relatedProducts } = useListProducts(
    { inStockOnly: false },
    { field: "rating", order: "desc" },
    BigInt(0),
    BigInt(4)
  );
  const products = isSearchMode ? searchResults : browseProducts;
  const isLoading = isSearchMode ? searchLoading : browseLoading;
  const activeChips = [];
  if (searchQuery) {
    activeChips.push({
      key: "q",
      label: `"${searchQuery}"`,
      remove: () => {
        setSearchInput("");
        setSearchQuery("");
        void navigate({
          to: "/shop",
          search: { ...searchParams, q: void 0 }
        });
      }
    });
  }
  if (filters.genre) {
    const g = GENRES.find((x) => x.value === filters.genre);
    activeChips.push({
      key: "genre",
      label: lang === "bn" ? (g == null ? void 0 : g.labelBn) ?? "" : (g == null ? void 0 : g.labelEn) ?? "",
      remove: () => {
        const n = { ...filters, genre: void 0 };
        setFilters(n);
        pushFiltersToURL(n, 1);
      }
    });
  }
  if (filters.langFilter) {
    const lbl = LANGUAGE_LABELS[filters.langFilter];
    activeChips.push({
      key: "lang",
      label: lang === "bn" ? lbl.bn : lbl.en,
      remove: () => {
        const n = { ...filters, langFilter: void 0 };
        setFilters(n);
        pushFiltersToURL(n, 1);
      }
    });
  }
  if (filters.inStock) {
    activeChips.push({
      key: "inStock",
      label: lang === "bn" ? "স্টকে আছে" : "In Stock",
      remove: () => {
        const n = { ...filters, inStock: false };
        setFilters(n);
        pushFiltersToURL(n, 1);
      }
    });
  }
  if (filters.minPriceRs > 0 || filters.maxPriceRs < MAX_PRICE_RS) {
    activeChips.push({
      key: "price",
      label: `₹${filters.minPriceRs}–₹${filters.maxPriceRs}`,
      remove: () => {
        const n = { ...filters, minPriceRs: 0, maxPriceRs: MAX_PRICE_RS };
        setFilters(n);
        pushFiltersToURL(n, 1);
      }
    });
  }
  if (filters.minRating) {
    activeChips.push({
      key: "rating",
      label: `${filters.minRating}★+`,
      remove: () => {
        const n = { ...filters, minRating: void 0 };
        setFilters(n);
        pushFiltersToURL(n, 1);
      }
    });
  }
  if (filters.sortId) {
    const s = SORT_OPTIONS.find((x) => x.id === filters.sortId);
    activeChips.push({
      key: "sort",
      label: lang === "bn" ? (s == null ? void 0 : s.labelBn) ?? "" : (s == null ? void 0 : s.labelEn) ?? "",
      remove: () => {
        const n = { ...filters, sortId: "" };
        setFilters(n);
        pushFiltersToURL(n, 1);
      }
    });
  }
  const clearAllFilters = reactExports.useCallback(() => {
    setFilters(DEFAULT_FILTERS);
    setSearchInput("");
    setSearchQuery("");
    setPage(1);
    void navigate({ to: "/shop", search: {} });
  }, [navigate]);
  const handleSearch = (e) => {
    e.preventDefault();
    if (debounceRef.current) clearTimeout(debounceRef.current);
    const q = searchInput.trim();
    setSearchQuery(q);
    setPage(1);
    void navigate({
      to: "/shop",
      search: (prev) => ({ ...prev, q: q || void 0, page: void 0 })
    });
  };
  const handleGenreClick = (g) => {
    const next = { ...filters, genre: filters.genre === g ? void 0 : g };
    setFilters(next);
    setPage(1);
    pushFiltersToURL(next, 1);
  };
  const SidebarContent = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full space-y-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(FilterSection, { title: lang === "bn" ? "ধরন" : "Genre", defaultOpen: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5 pt-1", children: GENRES.map((g) => {
      const active = filters.genre === g.value;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          "data-ocid": `shop.genre.${g.value}`,
          onClick: () => handleGenreClick(g.value),
          className: [
            "inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium transition-all duration-200 border",
            active ? "bg-accent text-accent-foreground border-accent shadow-sm" : "bg-muted/30 text-muted-foreground border-border hover:border-accent/50 hover:text-foreground hover:bg-muted/60"
          ].join(" "),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px]", children: g.icon }),
            lang === "bn" ? g.labelBn : g.labelEn
          ]
        },
        g.value
      );
    }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FilterSection, { title: lang === "bn" ? "মূল্য পরিসর" : "Price Range", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-1 pt-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-semibold px-2 py-0.5 bg-muted/40 rounded-md text-foreground", children: [
          "₹",
          filters.minPriceRs
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", children: "—" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-semibold px-2 py-0.5 bg-muted/40 rounded-md text-foreground", children: [
          "₹",
          filters.maxPriceRs
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Slider,
        {
          min: 0,
          max: MAX_PRICE_RS,
          step: 50,
          value: [filters.minPriceRs, filters.maxPriceRs],
          onValueChange: ([min, max]) => setFilters((f) => ({ ...f, minPriceRs: min, maxPriceRs: max })),
          onValueCommit: ([min, max]) => {
            pushFiltersToURL(
              { ...filters, minPriceRs: min, maxPriceRs: max },
              1
            );
          },
          "data-ocid": "shop.price_range_slider",
          className: "[&_[role=slider]]:bg-accent [&_[role=slider]]:border-accent [&_[role=slider]]:shadow-md [&_.relative]:h-1.5 [&_.bg-primary]:bg-accent"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between mt-1.5 text-[10px] text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "₹0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "₹",
          MAX_PRICE_RS
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FilterSection, { title: lang === "bn" ? "সর্বনিম্ন রেটিং" : "Min Rating", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-1 pt-1", children: RATING_OPTIONS.map((r) => {
      const active = filters.minRating === r.value;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          "data-ocid": `shop.rating.${r.value}`,
          onClick: () => {
            const n = {
              ...filters,
              minRating: active ? void 0 : r.value
            };
            setFilters(n);
            pushFiltersToURL(n, 1);
          },
          className: [
            "flex items-center gap-2 px-3 py-2 rounded-lg text-xs transition-all duration-200 border",
            active ? "bg-accent/15 border-accent/50 text-foreground font-semibold" : "border-transparent text-muted-foreground hover:bg-muted/30 hover:text-foreground"
          ].join(" "),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(StarRow, { count: r.stars }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: lang === "bn" ? r.labelBn : r.labelEn }),
            active && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto w-1.5 h-1.5 rounded-full bg-accent" })
          ]
        },
        r.value
      );
    }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FilterSection, { title: lang === "bn" ? "ভাষা" : "Language", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-1 pt-1", children: ["bengali", "english", "bilingual"].map((l) => {
      const active = filters.langFilter === l;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          "data-ocid": `shop.lang_filter.${l}`,
          onClick: () => {
            const n = { ...filters, langFilter: active ? void 0 : l };
            setFilters(n);
            pushFiltersToURL(n, 1);
          },
          className: [
            "flex items-center justify-between px-3 py-2 rounded-lg text-xs transition-all duration-200 border",
            active ? "bg-accent/15 border-accent/50 text-foreground font-semibold" : "border-transparent text-muted-foreground hover:bg-muted/30 hover:text-foreground"
          ].join(" "),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: lang === "bn" ? LANGUAGE_LABELS[l].bn : LANGUAGE_LABELS[l].en }),
            active && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-accent" })
          ]
        },
        l
      );
    }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FilterSection,
      {
        title: lang === "bn" ? "সাজান" : "Sort By",
        defaultOpen: false,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-1 pt-1", children: SORT_OPTIONS.map((s) => {
          const active = filters.sortId === s.id;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              "data-ocid": `shop.sort.${s.id}`,
              onClick: () => {
                const n = { ...filters, sortId: active ? "" : s.id };
                setFilters(n);
                setPage(1);
                pushFiltersToURL(n, 1);
              },
              className: [
                "flex items-center justify-between px-3 py-2 rounded-lg text-xs transition-all duration-200 border",
                active ? "bg-accent/15 border-accent/50 text-foreground font-semibold" : "border-transparent text-muted-foreground hover:bg-muted/30 hover:text-foreground"
              ].join(" "),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: lang === "bn" ? s.labelBn : s.labelEn }),
                active && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-accent" })
              ]
            },
            s.id
          );
        }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-3 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Label,
        {
          htmlFor: "inStock",
          className: "text-[11px] font-bold uppercase tracking-widest text-foreground cursor-pointer",
          children: lang === "bn" ? "শুধু স্টকে আছে" : "In Stock Only"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Switch,
        {
          id: "inStock",
          checked: filters.inStock,
          onCheckedChange: (v) => {
            const n = { ...filters, inStock: v };
            setFilters(n);
            pushFiltersToURL(n, 1);
          },
          "data-ocid": "shop.in_stock_switch",
          className: "data-[state=checked]:bg-accent"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: activeChips.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, height: 0 },
        animate: { opacity: 1, height: "auto" },
        exit: { opacity: 0, height: 0 },
        className: "pt-1",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            type: "button",
            variant: "ghost",
            onClick: clearAllFilters,
            "data-ocid": "shop.clear_all_button",
            className: "w-full text-xs h-8 rounded-lg border border-dashed border-accent/40 text-accent hover:bg-accent/10 hover:border-accent gap-1.5",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 11 }),
              lang === "bn" ? "সব ফিল্টার মুছুন" : "Clear All Filters"
            ]
          }
        )
      }
    ) })
  ] });
  const searchPlaceholder = lang === "bn" ? "বই, লেখক বা ধরন অনুসন্ধান করুন..." : "Search books, authors or genres...";
  const currentGenre = GENRES.find((x) => x.value === filters.genre);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", "data-ocid": "shop.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border-b border-border shadow-subtle", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1400px] mx-auto px-4 py-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "nav",
        {
          className: "flex items-center gap-1.5 text-xs text-muted-foreground mb-3",
          "aria-label": "Breadcrumb",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => navigate({ to: "/" }),
                className: "flex items-center gap-1 hover:text-accent transition-colors",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(House, { size: 12 }),
                  lang === "bn" ? "হোম" : "Home"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 11, className: "opacity-50" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: currentGenre ? lang === "bn" ? currentGenre.labelBn : currentGenre.labelEn : lang === "bn" ? "সব বই" : "All Books" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSearch, className: "relative max-w-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Search,
          {
            size: 16,
            className: "absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none z-10"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            type: "text",
            value: searchInput,
            onChange: (e) => handleSearchInputChange(e.target.value),
            placeholder: searchPlaceholder,
            "data-ocid": "shop.search_input",
            className: "pl-10 pr-28 h-11 rounded-full border-border bg-background text-sm focus:ring-2 focus:ring-accent/40 focus:border-accent/60 shadow-subtle transition-shadow hover:shadow-card"
          }
        ),
        searchInput && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              setSearchInput("");
              setSearchQuery("");
              void navigate({
                to: "/shop",
                search: (p) => ({ ...p, q: void 0 })
              });
            },
            className: "absolute right-20 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors p-1",
            "aria-label": "Clear search",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 14 })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            type: "submit",
            "data-ocid": "shop.search_button",
            className: "absolute right-1 top-1/2 -translate-y-1/2 h-9 px-4 rounded-full cta-primary text-xs font-semibold",
            children: lang === "bn" ? "খুঁজুন" : "Search"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1400px] mx-auto px-4 py-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: activeChips.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: -8 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -8 },
          className: "flex flex-wrap items-center gap-1.5 mb-4 p-3 bg-muted/20 rounded-xl border border-border/50",
          "data-ocid": "shop.active_filters",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mr-1", children: lang === "bn" ? "ফিল্টার:" : "Active:" }),
            activeChips.map((chip) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              FilterChip,
              {
                label: chip.label,
                onRemove: chip.remove
              },
              chip.key
            )),
            activeChips.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: clearAllFilters,
                "data-ocid": "shop.clear_all_chips",
                className: "ml-auto text-[11px] text-muted-foreground hover:text-accent transition-colors underline underline-offset-2",
                children: lang === "bn" ? "সব মুছুন" : "Clear all"
              }
            )
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "aside",
          {
            className: "hidden lg:block w-56 flex-shrink-0",
            "data-ocid": "shop.sidebar",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-elevation rounded-xl p-4 sticky top-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-1 pb-3 border-b border-border", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-6 h-6 rounded-lg bg-accent/20 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SlidersHorizontal, { size: 12, className: "text-accent" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold text-foreground", children: lang === "bn" ? "ফিল্টার" : "Filters" })
                ] }),
                activeChips.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-accent text-accent-foreground text-[10px] h-4 w-4 p-0 flex items-center justify-center rounded-full", children: activeChips.length })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarContent, {})
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4 gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  type: "button",
                  variant: "outline",
                  onClick: () => setMobileSidebarOpen(true),
                  "data-ocid": "shop.mobile_filter_toggle",
                  className: "lg:hidden h-9 text-xs rounded-lg flex items-center gap-1.5 border-border hover:border-accent transition-colors",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SlidersHorizontal, { size: 13 }),
                    lang === "bn" ? "ফিল্টার" : "Filter",
                    activeChips.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-accent text-accent-foreground rounded-full h-4 w-4 p-0 flex items-center justify-center text-[10px]", children: activeChips.length })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden sm:block", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-28" }) : products !== void 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: products.length === Number(PAGE_SIZE) ? `${products.length}+` : products.length }),
                " ",
                lang === "bn" ? "টি বই পাওয়া গেছে" : "books found",
                isSearchMode && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-accent font-medium", children: [
                  " ",
                  '— "',
                  searchQuery,
                  '"'
                ] })
              ] }) : null })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-shrink-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                LayoutGrid,
                {
                  size: 14,
                  className: "text-muted-foreground hidden sm:block"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Select,
                {
                  value: filters.sortId || "relevance",
                  onValueChange: (v) => {
                    const sortId = v === "relevance" ? "" : v;
                    const next = { ...filters, sortId };
                    setFilters(next);
                    setPage(1);
                    pushFiltersToURL(next, 1);
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      SelectTrigger,
                      {
                        className: "w-44 text-xs h-9 rounded-lg border-border shadow-subtle hover:border-accent transition-colors",
                        "data-ocid": "shop.sort_select",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          SelectValue,
                          {
                            placeholder: lang === "bn" ? "সাজান" : "Sort By"
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { className: "rounded-xl shadow-elevated", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "relevance", children: lang === "bn" ? "প্রাসঙ্গিকতা" : "Relevance" }),
                      SORT_OPTIONS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s.id, children: lang === "bn" ? s.labelBn : s.labelEn }, s.id))
                    ] })
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { duration: 0.25 },
              className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4",
              "data-ocid": "shop.products_list",
              children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(ProductGridSkeleton, {}) : (products == null ? void 0 : products.length) === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { lang, onClear: clearAllFilters }) : products == null ? void 0 : products.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { opacity: 0, y: 12 },
                  animate: { opacity: 1, y: 0 },
                  transition: {
                    duration: 0.2,
                    delay: Math.min(i * 0.04, 0.4)
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product: p, index: i })
                },
                p.id.toString()
              ))
            },
            `${filters.genre}-${filters.sortId}-${filters.minRating}-${page}-${searchQuery}`
          ),
          !isLoading && (products == null ? void 0 : products.length) === 0 && relatedProducts && relatedProducts.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              className: "mt-8",
              initial: { opacity: 0, y: 16 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.3 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 14, className: "text-accent" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: lang === "bn" ? "এগুলো দেখুন" : "You might like these" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-4", children: relatedProducts.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  ProductCard,
                  {
                    product: p,
                    index: i
                  },
                  p.id.toString()
                )) })
              ]
            }
          ),
          !isLoading && products && products.length > 0 && !isSearchMode && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-center justify-center gap-2 mt-8 pt-6 border-t border-border",
              "data-ocid": "shop.pagination",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    type: "button",
                    variant: "outline",
                    disabled: page === 1,
                    onClick: () => {
                      const np = Math.max(1, page - 1);
                      setPage(np);
                      pushFiltersToURL(filters, np);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    },
                    "data-ocid": "shop.pagination_prev",
                    className: "h-9 px-3 rounded-lg text-xs flex items-center gap-1.5 border-border hover:border-accent hover:text-accent disabled:opacity-40 transition-colors",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { size: 14 }),
                      lang === "bn" ? "আগে" : "Prev"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
                  page > 2 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => {
                        setPage(1);
                        pushFiltersToURL(filters, 1);
                      },
                      className: "w-9 h-9 text-xs rounded-full border border-border hover:border-accent hover:text-accent transition-all",
                      children: "1"
                    }
                  ),
                  page > 3 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground px-1", children: "…" }),
                  page > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => {
                        setPage(page - 1);
                        pushFiltersToURL(filters, page - 1);
                      },
                      className: "w-9 h-9 text-xs rounded-full border border-border hover:border-accent hover:text-accent transition-all",
                      children: page - 1
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      className: "w-9 h-9 text-xs rounded-full font-bold border-2 border-accent bg-accent text-accent-foreground shadow-sm",
                      "aria-current": "page",
                      children: page
                    }
                  ),
                  products.length === Number(PAGE_SIZE) && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => {
                        setPage(page + 1);
                        pushFiltersToURL(filters, page + 1);
                      },
                      className: "w-9 h-9 text-xs rounded-full border border-border hover:border-accent hover:text-accent transition-all",
                      children: page + 1
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    type: "button",
                    variant: "outline",
                    disabled: products.length < Number(PAGE_SIZE),
                    onClick: () => {
                      const np = page + 1;
                      setPage(np);
                      pushFiltersToURL(filters, np);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    },
                    "data-ocid": "shop.pagination_next",
                    className: "h-9 px-3 rounded-lg text-xs flex items-center gap-1.5 border-border hover:border-accent hover:text-accent disabled:opacity-40 transition-colors",
                    children: [
                      lang === "bn" ? "পরে" : "Next",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 14 })
                    ]
                  }
                )
              ]
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: mobileSidebarOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          transition: { duration: 0.2 },
          className: "fixed inset-0 z-40 bg-background/60 backdrop-blur-sm lg:hidden",
          onClick: () => setMobileSidebarOpen(false)
        },
        "backdrop"
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { x: "-100%" },
          animate: { x: 0 },
          exit: { x: "-100%" },
          transition: { type: "spring", damping: 28, stiffness: 280 },
          className: "fixed inset-y-0 left-0 z-50 w-80 max-w-full bg-card border-r border-border shadow-deep lg:hidden flex flex-col",
          "data-ocid": "shop.mobile_sidebar",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-5 py-4 border-b border-border bg-card", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-7 h-7 rounded-lg bg-accent/20 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SlidersHorizontal, { size: 13, className: "text-accent" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-foreground", children: lang === "bn" ? "ফিল্টার" : "Filters" }),
                activeChips.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-accent text-accent-foreground text-[10px] h-5 w-5 p-0 flex items-center justify-center rounded-full", children: activeChips.length })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setMobileSidebarOpen(false),
                  "aria-label": "Close filters",
                  "data-ocid": "shop.mobile_sidebar_close",
                  className: "w-8 h-8 flex items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 16 })
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto px-5 py-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarContent, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-5 py-4 border-t border-border bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "button",
                onClick: () => setMobileSidebarOpen(false),
                className: "w-full cta-primary h-10 rounded-lg text-sm font-semibold",
                "data-ocid": "shop.apply_filters_button",
                children: lang === "bn" ? `${(products == null ? void 0 : products.length) ?? 0} টি ফলাফল দেখুন` : `View ${(products == null ? void 0 : products.length) ?? 0} results`
              }
            ) })
          ]
        },
        "drawer"
      )
    ] }) })
  ] });
}
export {
  ShopPage as default
};
