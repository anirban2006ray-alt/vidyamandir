import { r as reactExports, j as jsxRuntimeExports } from "./index-BsrN2Mb5.js";
function getBookCoverUrl(coverImageUrl, isbn) {
  if (coverImageUrl && coverImageUrl.trim() !== "") {
    return coverImageUrl.trim();
  }
  if (isbn && isbn.trim() !== "") {
    return `https://covers.openlibrary.org/b/isbn/${isbn.trim()}-L.jpg`;
  }
  return null;
}
function BookCover({
  coverImageUrl,
  isbn,
  title,
  author,
  className = "",
  isOutOfStock = false,
  imgClassName = ""
}) {
  const src = getBookCoverUrl(coverImageUrl, isbn);
  const [imgError, setImgError] = reactExports.useState(false);
  const showFallback = !src || imgError;
  const wrapperClass = `w-full h-full ${className}`;
  if (showFallback) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: `${wrapperClass} relative flex flex-col items-center justify-center p-3 select-none overflow-hidden bg-[#0A1628]`,
        style: { borderRadius: "inherit", minHeight: 160 },
        "aria-label": title,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-orange-600" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-0 top-4 bottom-4 w-[3px] bg-orange-500 opacity-35" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-display font-bold text-center leading-snug line-clamp-5 px-2 text-orange-500",
              style: {
                fontSize: "clamp(9px, 2.4vw, 14px)",
                letterSpacing: "-0.01em",
                marginBottom: author ? "0.5rem" : 0
              },
              children: title
            }
          ),
          author && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "text-center leading-tight line-clamp-2 px-2 text-[#e2d5c8] opacity-70",
              style: { fontSize: "clamp(7px, 1.8vw, 11px)" },
              children: author
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-transparent" })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "img",
    {
      src,
      alt: title,
      loading: "lazy",
      onError: () => setImgError(true),
      className: `w-full h-full object-cover ${isOutOfStock ? "grayscale" : ""} ${imgClassName}`
    }
  );
}
export {
  BookCover as B
};
