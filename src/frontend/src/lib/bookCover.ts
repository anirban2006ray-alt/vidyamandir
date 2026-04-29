/**
 * Book cover utilities for Vidyamandir.
 *
 * Priority order:
 *  1. coverImageUrl from the product (already a full URL)
 *  2. Open Library Covers API derived from isbn
 *  3. Styled fallback (rendered as a data-attribute pair for BookCover component)
 */

/**
 * Returns the best available book cover URL, or null if only a styled fallback
 * should be rendered. Pass the result to <BookCover> or use getBookCoverUrl()
 * for places that just need a plain src string with no fallback component.
 */
export function getBookCoverUrl(
  coverImageUrl: string | undefined | null,
  isbn: string | undefined | null,
): string | null {
  if (coverImageUrl && coverImageUrl.trim() !== "") {
    return coverImageUrl.trim();
  }
  if (isbn && isbn.trim() !== "") {
    return `https://covers.openlibrary.org/b/isbn/${isbn.trim()}-L.jpg`;
  }
  return null;
}
