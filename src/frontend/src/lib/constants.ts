// ─── Shared constants ──────────────────────────────────────────────────────────
// Single source of truth for pricing constants used across CartPage, CheckoutPage, etc.

export const GST_RATE = 0.18; // 18% GST applied on subtotal

export const FREE_DELIVERY_THRESHOLD_PAISA = 49900n; // ₹499 in paisa
export const DELIVERY_CHARGE_PAISA = 4000n; // ₹40 in paisa

export const FREE_DELIVERY_THRESHOLD_NUM = 49900; // numeric (for CheckoutPage comparisons)
export const DELIVERY_CHARGE_NUM = 4000; // numeric (for CheckoutPage comparisons)

export const MAX_SAVED_ADDRESSES = 5;
