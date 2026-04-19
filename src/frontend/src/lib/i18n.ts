import type { Lang } from "../types";

export type TranslationKey =
  | "home"
  | "shop"
  | "flashSales"
  | "myOrders"
  | "wishlist"
  | "cart"
  | "account"
  | "admin"
  | "login"
  | "logout"
  | "search"
  | "searchPlaceholder"
  | "addToCart"
  | "buyNow"
  | "addToWishlist"
  | "removeFromWishlist"
  | "inCart"
  | "outOfStock"
  | "price"
  | "rating"
  | "reviews"
  | "free"
  | "delivery"
  | "sale"
  | "off"
  | "flashSale"
  | "endsIn"
  | "shopNow"
  | "viewAll"
  | "categories"
  | "bengali"
  | "english"
  | "bilingual"
  | "genre"
  | "author"
  | "publisher"
  | "isbn"
  | "language"
  | "description"
  | "qanda"
  | "writeReview"
  | "noProducts"
  | "loading"
  | "error"
  | "tryAgain"
  | "back"
  | "orderPlaced"
  | "processing"
  | "shipped"
  | "delivered"
  | "cancelled"
  | "refundRequested"
  | "refunded"
  | "orderTotal"
  | "shippingAddress"
  | "saveAddress"
  | "addAddress"
  | "editAddress"
  | "deleteAddress"
  | "setDefault"
  | "name"
  | "phone"
  | "line1"
  | "line2"
  | "city"
  | "district"
  | "state"
  | "pincode"
  | "promoCode"
  | "apply"
  | "discount"
  | "subtotal"
  | "total"
  | "placeOrder"
  | "checkout"
  | "emptyCart"
  | "emptyWishlist"
  | "recentlyViewed"
  | "bestsellers"
  | "newArrivals"
  | "featured"
  | "allCategories"
  | "fiction"
  | "nonFiction"
  | "bengaliClassics"
  | "poetry"
  | "childrens"
  | "academic"
  | "history"
  | "biography"
  | "religion"
  | "science"
  | "other"
  | "sortBy"
  | "filter"
  | "priceAsc"
  | "priceDesc"
  | "ratingDesc"
  | "newest"
  | "inStock"
  | "minPrice"
  | "maxPrice"
  | "applyFilters"
  | "clearFilters"
  | "profileSettings"
  | "savedAddresses"
  | "downloadInvoice"
  | "orderHistory"
  | "adminDashboard"
  | "manageProducts"
  | "manageOrders"
  | "analytics"
  | "totalRevenue"
  | "totalOrders"
  | "totalProducts"
  | "totalUsers"
  | "recentOrders"
  | "bestsellersTitle"
  | "addProduct"
  | "editProduct"
  | "deleteProduct"
  | "updateStock"
  | "createFlashSale"
  | "managePromoCodes"
  | "welcome"
  | "signIn"
  | "signInDesc"
  | "tagline"
  | "address"
  // ─── New keys ──────────────────────────────────────────────────────────────
  | "question_posted"
  | "answer_posted"
  | "vote_recorded"
  | "promo_expired"
  | "promo_min_spend"
  | "promo_ineligible"
  | "payment_failed"
  | "refund_confirm_title"
  | "refund_confirm_message"
  | "stock_limit_warning"
  | "tax_label"
  | "delivery_label"
  | "free_delivery_label"
  | "ask_question"
  | "your_question"
  | "answer_this"
  | "your_answer"
  | "no_questions"
  // Required by requirements
  | "noOrdersYet"
  | "startShopping"
  | "filterActive"
  | "clearAllFilters"
  | "noResultsFound"
  | "tryTheseInstead"
  | "noFlashSales"
  | "checkBackSoon"
  | "profileSaved"
  | "deleteAddressConfirm"
  | "searchPlaceholderBooks";

const translations: Record<TranslationKey, Record<Lang, string>> = {
  home: { en: "Home", bn: "হোম" },
  shop: { en: "Shop", bn: "শপ" },
  flashSales: { en: "Flash Sales", bn: "ফ্ল্যাশ সেল" },
  myOrders: { en: "My Orders", bn: "আমার অর্ডার" },
  wishlist: { en: "Wishlist", bn: "উইশলিস্ট" },
  cart: { en: "Cart", bn: "কার্ট" },
  account: { en: "Account", bn: "অ্যাকাউন্ট" },
  admin: { en: "Admin", bn: "অ্যাডমিন" },
  login: { en: "Login", bn: "লগইন" },
  logout: { en: "Logout", bn: "লগআউট" },
  search: { en: "Search", bn: "খুঁজুন" },
  searchPlaceholder: { en: "Search books, authors...", bn: "বই, লেখক খুঁজুন..." },
  addToCart: { en: "Add to Cart", bn: "কার্টে যোগ করুন" },
  buyNow: { en: "Buy Now", bn: "এখনই কিনুন" },
  addToWishlist: { en: "Add to Wishlist", bn: "উইশলিস্টে যোগ করুন" },
  removeFromWishlist: { en: "Remove from Wishlist", bn: "উইশলিস্ট থেকে সরান" },
  inCart: { en: "In Cart", bn: "কার্টে আছে" },
  outOfStock: { en: "Out of Stock", bn: "স্টক নেই" },
  price: { en: "Price", bn: "মূল্য" },
  rating: { en: "Rating", bn: "রেটিং" },
  reviews: { en: "Reviews", bn: "রিভিউ" },
  free: { en: "FREE", bn: "বিনামূল্যে" },
  delivery: { en: "Delivery", bn: "ডেলিভারি" },
  sale: { en: "SALE", bn: "সেল" },
  off: { en: "off", bn: "ছাড়" },
  flashSale: { en: "Flash Sale", bn: "ফ্ল্যাশ সেল" },
  endsIn: { en: "Ends in", bn: "শেষ হবে" },
  shopNow: { en: "Shop Now", bn: "এখনই কিনুন" },
  viewAll: { en: "View All", bn: "সব দেখুন" },
  categories: { en: "Categories", bn: "বিভাগ" },
  bengali: { en: "Bengali", bn: "বাংলা" },
  english: { en: "English", bn: "ইংরেজি" },
  bilingual: { en: "Bilingual", bn: "দ্বিভাষিক" },
  genre: { en: "Genre", bn: "ধরন" },
  author: { en: "Author", bn: "লেখক" },
  publisher: { en: "Publisher", bn: "প্রকাশক" },
  isbn: { en: "ISBN", bn: "আইএসবিএন" },
  language: { en: "Language", bn: "ভাষা" },
  description: { en: "Description", bn: "বিবরণ" },
  qanda: { en: "Q&A", bn: "প্রশ্নোত্তর" },
  writeReview: { en: "Write a Review", bn: "রিভিউ লিখুন" },
  noProducts: { en: "No products found", bn: "কোনো পণ্য পাওয়া যায়নি" },
  loading: { en: "Loading...", bn: "লোড হচ্ছে..." },
  error: { en: "Something went wrong", bn: "কিছু একটা সমস্যা হয়েছে" },
  tryAgain: { en: "Try Again", bn: "আবার চেষ্টা করুন" },
  back: { en: "Back", bn: "ফিরে যান" },
  orderPlaced: { en: "Order Placed", bn: "অর্ডার দেওয়া হয়েছে" },
  processing: { en: "Processing", bn: "প্রক্রিয়া চলছে" },
  shipped: { en: "Shipped", bn: "পাঠানো হয়েছে" },
  delivered: { en: "Delivered", bn: "পৌঁছে গেছে" },
  cancelled: { en: "Cancelled", bn: "বাতিল" },
  refundRequested: { en: "Refund Requested", bn: "ফেরত চাওয়া হয়েছে" },
  refunded: { en: "Refunded", bn: "ফেরত দেওয়া হয়েছে" },
  orderTotal: { en: "Order Total", bn: "মোট মূল্য" },
  shippingAddress: { en: "Shipping Address", bn: "শিপিং ঠিকানা" },
  saveAddress: { en: "Save Address", bn: "ঠিকানা সংরক্ষণ করুন" },
  addAddress: { en: "Add Address", bn: "ঠিকানা যোগ করুন" },
  editAddress: { en: "Edit Address", bn: "ঠিকানা সম্পাদনা করুন" },
  deleteAddress: { en: "Delete Address", bn: "ঠিকানা মুছুন" },
  setDefault: { en: "Set as Default", bn: "ডিফল্ট হিসেবে সেট করুন" },
  name: { en: "Full Name", bn: "পুরো নাম" },
  phone: { en: "Phone", bn: "ফোন" },
  line1: { en: "Address Line 1", bn: "ঠিকানা লাইন ১" },
  line2: { en: "Address Line 2", bn: "ঠিকানা লাইন ২" },
  city: { en: "City", bn: "শহর" },
  district: { en: "District", bn: "জেলা" },
  state: { en: "State", bn: "রাজ্য" },
  pincode: { en: "PIN Code", bn: "পিন কোড" },
  promoCode: { en: "Promo Code", bn: "প্রমো কোড" },
  apply: { en: "Apply", bn: "প্রয়োগ করুন" },
  discount: { en: "Discount", bn: "ছাড়" },
  subtotal: { en: "Subtotal", bn: "সাবটোটাল" },
  total: { en: "Total", bn: "মোট" },
  placeOrder: { en: "Place Order", bn: "অর্ডার দিন" },
  checkout: { en: "Checkout", bn: "চেকআউট" },
  emptyCart: { en: "Your cart is empty", bn: "আপনার কার্ট খালি" },
  emptyWishlist: { en: "Your wishlist is empty", bn: "আপনার উইশলিস্ট খালি" },
  recentlyViewed: { en: "Recently Viewed", bn: "সম্প্রতি দেখা" },
  bestsellers: { en: "Bestsellers", bn: "বেস্টসেলার" },
  newArrivals: { en: "New Arrivals", bn: "নতুন আগমন" },
  featured: { en: "Featured", bn: "বিশেষ" },
  allCategories: { en: "All Categories", bn: "সব বিভাগ" },
  fiction: { en: "Fiction", bn: "কথাসাহিত্য" },
  nonFiction: { en: "Non-Fiction", bn: "তথ্যমূলক" },
  bengaliClassics: { en: "Bengali Classics", bn: "বাংলা ক্লাসিক" },
  poetry: { en: "Poetry", bn: "কবিতা" },
  childrens: { en: "Children's", bn: "শিশু সাহিত্য" },
  academic: { en: "Academic", bn: "একাডেমিক" },
  history: { en: "History", bn: "ইতিহাস" },
  biography: { en: "Biography", bn: "জীবনী" },
  religion: { en: "Religion", bn: "ধর্ম" },
  science: { en: "Science", bn: "বিজ্ঞান" },
  other: { en: "Other", bn: "অন্যান্য" },
  sortBy: { en: "Sort By", bn: "সাজান" },
  filter: { en: "Filter", bn: "ফিল্টার" },
  priceAsc: { en: "Price: Low to High", bn: "মূল্য: কম থেকে বেশি" },
  priceDesc: { en: "Price: High to Low", bn: "মূল্য: বেশি থেকে কম" },
  ratingDesc: { en: "Top Rated", bn: "সর্বোচ্চ রেটিং" },
  newest: { en: "Newest First", bn: "নতুন প্রথমে" },
  inStock: { en: "In Stock Only", bn: "শুধু স্টকে আছে" },
  minPrice: { en: "Min Price", bn: "সর্বনিম্ন মূল্য" },
  maxPrice: { en: "Max Price", bn: "সর্বোচ্চ মূল্য" },
  applyFilters: { en: "Apply Filters", bn: "ফিল্টার প্রয়োগ করুন" },
  clearFilters: { en: "Clear Filters", bn: "ফিল্টার পরিষ্কার করুন" },
  profileSettings: { en: "Profile Settings", bn: "প্রোফাইল সেটিংস" },
  savedAddresses: { en: "Saved Addresses", bn: "সংরক্ষিত ঠিকানা" },
  downloadInvoice: { en: "Download Invoice", bn: "ইনভয়েস ডাউনলোড করুন" },
  orderHistory: { en: "Order History", bn: "অর্ডার ইতিহাস" },
  adminDashboard: { en: "Admin Dashboard", bn: "অ্যাডমিন ড্যাশবোর্ড" },
  manageProducts: { en: "Manage Products", bn: "পণ্য পরিচালনা" },
  manageOrders: { en: "Manage Orders", bn: "অর্ডার পরিচালনা" },
  analytics: { en: "Analytics", bn: "বিশ্লেষণ" },
  totalRevenue: { en: "Total Revenue", bn: "মোট রাজস্ব" },
  totalOrders: { en: "Total Orders", bn: "মোট অর্ডার" },
  totalProducts: { en: "Total Products", bn: "মোট পণ্য" },
  totalUsers: { en: "Total Users", bn: "মোট ব্যবহারকারী" },
  recentOrders: { en: "Recent Orders", bn: "সাম্প্রতিক অর্ডার" },
  bestsellersTitle: { en: "Bestsellers", bn: "বেস্টসেলার" },
  addProduct: { en: "Add Product", bn: "পণ্য যোগ করুন" },
  editProduct: { en: "Edit Product", bn: "পণ্য সম্পাদনা করুন" },
  deleteProduct: { en: "Delete Product", bn: "পণ্য মুছুন" },
  updateStock: { en: "Update Stock", bn: "স্টক আপডেট করুন" },
  createFlashSale: { en: "Create Flash Sale", bn: "ফ্ল্যাশ সেল তৈরি করুন" },
  managePromoCodes: { en: "Manage Promo Codes", bn: "প্রমো কোড পরিচালনা" },
  welcome: { en: "Welcome to Vidyamandir", bn: "বিদ্যামন্দিরে স্বাগতম" },
  signIn: { en: "Sign In", bn: "সাইন ইন করুন" },
  signInDesc: {
    en: "Sign in with Internet Identity to access your cart, orders, and wishlist.",
    bn: "আপনার কার্ট, অর্ডার এবং উইশলিস্ট অ্যাক্সেস করতে ইন্টারনেট আইডেন্টিটি দিয়ে সাইন ইন করুন।",
  },
  tagline: {
    en: "Your trusted bookshop in Purba Bardhaman",
    bn: "পূর্ব বর্ধমানের আপনার বিশ্বস্ত বইয়ের দোকান",
  },
  address: {
    en: "Near 12h, Sitaw, Road City, Sina, Bardihann, Purba Bardhaman | +91 97367 67898",
    bn: "নিকট ১২এইচ, সিতাও, রোড সিটি, সিনা, বর্দিহান, পূর্ব বর্ধমান | +91 97367 67898",
  },
  // ─── New keys ──────────────────────────────────────────────────────────────
  question_posted: {
    en: "Your question has been posted!",
    bn: "আপনার প্রশ্ন পোস্ট হয়েছে!",
  },
  answer_posted: {
    en: "Your answer has been posted!",
    bn: "আপনার উত্তর পোস্ট হয়েছে!",
  },
  vote_recorded: {
    en: "Vote recorded!",
    bn: "ভোট নথিভুক্ত হয়েছে!",
  },
  promo_expired: {
    en: "Promo code has expired",
    bn: "প্রমো কোডের মেয়াদ শেষ হয়ে গেছে",
  },
  promo_min_spend: {
    en: "Minimum order value not met",
    bn: "ন্যূনতম অর্ডার মূল্য পূরণ হয়নি",
  },
  promo_ineligible: {
    en: "Code not valid for these items",
    bn: "এই পণ্যগুলির জন্য কোড প্রযোজ্য নয়",
  },
  payment_failed: {
    en: "Payment failed — please try again",
    bn: "পেমেন্ট ব্যর্থ হয়েছে — আবার চেষ্টা করুন",
  },
  refund_confirm_title: {
    en: "Request a refund?",
    bn: "ফেরত চাইবেন?",
  },
  refund_confirm_message: {
    en: "Are you sure you want to request a refund for this order?",
    bn: "আপনি কি এই অর্ডারের জন্য ফেরত চাইতে চান?",
  },
  stock_limit_warning: {
    en: "Maximum available stock reached",
    bn: "সর্বোচ্চ স্টক সীমায় পৌঁছেছে",
  },
  tax_label: {
    en: "GST (18%)",
    bn: "জিএসটি (১৮%)",
  },
  delivery_label: {
    en: "Delivery",
    bn: "ডেলিভারি",
  },
  free_delivery_label: {
    en: "FREE Delivery",
    bn: "বিনামূল্যে ডেলিভারি",
  },
  ask_question: {
    en: "Ask a Question",
    bn: "প্রশ্ন করুন",
  },
  your_question: {
    en: "Your question",
    bn: "আপনার প্রশ্ন",
  },
  answer_this: {
    en: "Answer This",
    bn: "উত্তর দিন",
  },
  your_answer: {
    en: "Your answer",
    bn: "আপনার উত্তর",
  },
  no_questions: {
    en: "No questions yet. Be the first to ask!",
    bn: "এখনো কোনো প্রশ্ন নেই। প্রথম প্রশ্নটি করুন!",
  },
  // Required by requirements
  noOrdersYet: {
    en: "No orders yet — start shopping!",
    bn: "এখনো কোনো অর্ডার নেই — কেনাকাটা শুরু করুন!",
  },
  startShopping: { en: "Start Shopping", bn: "কেনাকাটা শুরু করুন" },
  filterActive: { en: "Filters active", bn: "ফিল্টার সক্রিয়" },
  clearAllFilters: { en: "Clear All Filters", bn: "সব ফিল্টার মুছুন" },
  noResultsFound: { en: "No results found", bn: "কোনো ফলাফল পাওয়া যায়নি" },
  tryTheseInstead: { en: "Try these instead", bn: "এগুলো দেখুন" },
  noFlashSales: {
    en: "No flash sales active right now — check back soon!",
    bn: "এখন কোনো ফ্ল্যাশ সেল সক্রিয় নেই — শীঘ্রই আবার দেখুন!",
  },
  checkBackSoon: { en: "Check back soon", bn: "শীঘ্রই আবার দেখুন" },
  profileSaved: { en: "Saved successfully!", bn: "সফলভাবে সংরক্ষিত হয়েছে!" },
  deleteAddressConfirm: {
    en: "Are you sure you want to delete this address?",
    bn: "আপনি কি এই ঠিকানাটি মুছতে চান?",
  },
  searchPlaceholderBooks: {
    en: "Search books...",
    bn: "বই খুঁজুন...",
  },
};

export function t(key: TranslationKey, lang: Lang): string {
  return translations[key]?.[lang] ?? key;
}

export function formatPrice(paisa: bigint): string {
  const rupees = Number(paisa) / 100;
  return `₹${rupees.toLocaleString("en-IN")}`;
}

export function formatDiscount(percent: bigint): string {
  return `${percent}% off`;
}
