/**
 * BookCover — universal book cover component for Vidyamandir.
 *
 * Logic:
 *  1. If coverImageUrl is present → use it directly
 *  2. Else if isbn is present → construct Open Library URL
 *  3. If the image fails to load → fall back to styled text card
 *  4. If no url at all → render styled text card immediately
 */

import { useState } from "react";
import { getBookCoverUrl } from "../lib/bookCover";

interface BookCoverProps {
  coverImageUrl?: string | null;
  isbn?: string | null;
  title: string;
  author?: string;
  /** Tailwind / className forwarded to the outer wrapper div */
  className?: string;
  /** Whether the book is out-of-stock (adds grayscale + slight opacity) */
  isOutOfStock?: boolean;
  /** Applied to the <img> element for group-hover zoom etc. */
  imgClassName?: string;
}

export function BookCover({
  coverImageUrl,
  isbn,
  title,
  author,
  className = "",
  isOutOfStock = false,
  imgClassName = "",
}: BookCoverProps) {
  const src = getBookCoverUrl(coverImageUrl, isbn);
  const [imgError, setImgError] = useState(false);

  const showFallback = !src || imgError;

  const wrapperClass = `w-full h-full ${className}`;

  if (showFallback) {
    return (
      <div
        className={`${wrapperClass} flex flex-col items-center justify-center p-2 select-none`}
        style={{
          background: "#0A1628",
          borderRadius: "inherit",
        }}
        aria-label={title}
      >
        {/* Top accent line */}
        <div
          className="absolute top-0 left-0 right-0 h-1"
          style={{
            background: "linear-gradient(90deg, #F97316, #ea6e0e)",
            borderRadius: "inherit inherit 0 0",
          }}
        />
        <p
          className="font-display font-bold text-center leading-snug line-clamp-4 px-1"
          style={{
            color: "#F97316",
            fontSize: "clamp(8px, 2.2vw, 13px)",
            letterSpacing: "-0.01em",
          }}
        >
          {title}
        </p>
        {author && (
          <p
            className="mt-1.5 text-center leading-tight line-clamp-2 px-1"
            style={{
              color: "#ffffff",
              fontSize: "clamp(6px, 1.7vw, 10px)",
              opacity: 0.75,
            }}
          >
            {author}
          </p>
        )}
        {/* Bottom line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-0.5"
          style={{
            background: "linear-gradient(90deg, #F97316 0%, transparent 100%)",
          }}
        />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={title}
      loading="lazy"
      onError={() => setImgError(true)}
      className={`w-full h-full object-cover ${isOutOfStock ? "grayscale" : ""} ${imgClassName}`}
    />
  );
}
