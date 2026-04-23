import type { ClassValue } from "clsx";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { AppError } from "../backend.d.ts";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Maps backend AppError variants to user-friendly messages.
 * Use in mutation onError handlers to show specific toasts.
 */
export function getErrorMessage(err: AppError): string {
  switch (err.__kind__) {
    case "rateLimitExceeded":
      return "You have submitted too many requests. Please wait a few minutes and try again.";
    case "validationError":
      return err.validationError;
    case "invalidInput":
      return err.invalidInput;
    case "duplicateEntry":
      return "This has already been submitted. Please refresh the page.";
    case "alreadyExists":
      return "This item already exists.";
    case "alreadyReviewed":
      return "You have already reviewed this product.";
    case "alreadyVoted":
      return "You have already voted on this.";
    case "insufficientStock":
      return "Insufficient stock available for this item.";
    case "unauthorized":
      return "You are not authorised to perform this action.";
    case "notFound":
      return "The requested item was not found.";
    case "expired":
      return "This item or code has expired.";
    case "limitExceeded":
      return "You have reached the limit for this action.";
    case "minSpend":
      return `A minimum spend of ₹${Number(err.minSpend) / 100} is required.`;
    case "serverError":
      return err.serverError
        ? `Something went wrong: ${err.serverError}`
        : "Something went wrong. Please try again.";
    default:
      return "Something went wrong. Please try again.";
  }
}

/**
 * Extracts an error message from an unknown error thrown by a mutation.
 * Handles both AppError-shaped objects (from backend) and standard JS errors.
 */
export function extractErrorMessage(
  err: unknown,
  fallback = "Something went wrong. Please try again.",
): string {
  if (err && typeof err === "object" && "__kind__" in err) {
    return getErrorMessage(err as AppError);
  }
  if (err instanceof Error) {
    return err.message || fallback;
  }
  return fallback;
}
