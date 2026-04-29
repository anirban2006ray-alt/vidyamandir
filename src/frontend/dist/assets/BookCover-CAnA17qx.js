import { r as reactExports, j as jsxRuntimeExports } from "./index-Bz7t5j9k.js";
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
        className: `${wrapperClass} flex flex-col items-center justify-center p-2 select-none`,
        style: {
          background: "#0A1628",
          borderRadius: "inherit"
        },
        "aria-label": title,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute top-0 left-0 right-0 h-1",
              style: {
                background: "linear-gradient(90deg, #F97316, #ea6e0e)",
                borderRadius: "inherit inherit 0 0"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-display font-bold text-center leading-snug line-clamp-4 px-1",
              style: {
                color: "#F97316",
                fontSize: "clamp(8px, 2.2vw, 13px)",
                letterSpacing: "-0.01em"
              },
              children: title
            }
          ),
          author && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "mt-1.5 text-center leading-tight line-clamp-2 px-1",
              style: {
                color: "#ffffff",
                fontSize: "clamp(6px, 1.7vw, 10px)",
                opacity: 0.75
              },
              children: author
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute bottom-0 left-0 right-0 h-0.5",
              style: {
                background: "linear-gradient(90deg, #F97316 0%, transparent 100%)"
              }
            }
          )
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
