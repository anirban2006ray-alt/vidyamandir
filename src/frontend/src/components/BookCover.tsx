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
        className={`${wrapperClass} relative flex flex-col items-center justify-center p-3 select-none overflow-hidden bg-[#0A1628]`}
        style={{ borderRadius: "inherit", minHeight: 160 }}
        aria-label={title}
      >
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-orange-600" />
        {/* Subtle spine lines */}
        <div className="absolute left-0 top-4 bottom-4 w-[3px] bg-orange-500 opacity-35" />
        {/* Title */}
        <p
          className="font-display font-bold text-center leading-snug line-clamp-5 px-2 text-orange-500"
          style={{
            fontSize: "clamp(9px, 2.4vw, 14px)",
            letterSpacing: "-0.01em",
            marginBottom: author ? "0.5rem" : 0,
          }}
        >
          {title}
        </p>
        {author && (
          <p
            className="text-center leading-tight line-clamp-2 px-2 text-[#e2d5c8] opacity-70"
            style={{ fontSize: "clamp(7px, 1.8vw, 11px)" }}
          >
            {author}
          </p>
        )}
        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-transparent" />
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
