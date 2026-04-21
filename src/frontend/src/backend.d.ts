import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type FlashSaleId = bigint;
export interface Address {
    id: AddressId;
    city: string;
    userId: UserId;
    createdAt: Timestamp;
    fullName: string;
    line1: string;
    line2: string;
    district: string;
    state: string;
    isDefault: boolean;
    phone: string;
    pincode: string;
}
export type Timestamp = bigint;
export interface TransformationOutput {
    status: bigint;
    body: Uint8Array;
    headers: Array<http_header>;
}
export interface PromoCode {
    id: PromoCodeId;
    validFrom: Timestamp;
    code: string;
    maxUsageCount?: bigint;
    createdAt: Timestamp;
    usageCount: bigint;
    discountPercent: bigint;
    isActive: boolean;
    minSpendInPaisa: bigint;
    validUntil: Timestamp;
}
export interface OrderItem {
    priceInPaisa: bigint;
    productId: ProductId;
    quantity: bigint;
    titleEn: string;
}
export type AppError = {
    __kind__: "expired";
    expired: null;
} | {
    __kind__: "alreadyVoted";
    alreadyVoted: null;
} | {
    __kind__: "alreadyExists";
    alreadyExists: null;
} | {
    __kind__: "invalidInput";
    invalidInput: string;
} | {
    __kind__: "minSpend";
    minSpend: bigint;
} | {
    __kind__: "notFound";
    notFound: null;
} | {
    __kind__: "limitExceeded";
    limitExceeded: null;
} | {
    __kind__: "unauthorized";
    unauthorized: null;
} | {
    __kind__: "insufficientStock";
    insufficientStock: null;
} | {
    __kind__: "alreadyReviewed";
    alreadyReviewed: null;
};
export type PromoCodeId = bigint;
export interface StatusUpdate {
    status: OrderStatus;
    note: string;
    updatedAt: Timestamp;
}
export interface ProductLabel {
    descriptionBn: string;
    descriptionEn: string;
    authorBn: string;
    authorEn: string;
    titleBn: string;
    titleEn: string;
}
export interface UpdateProductInput {
    id: ProductId;
    coverImageUrl?: string;
    info?: ProductLabel;
    isbn?: string;
    publisher?: string;
    priceInPaisa?: bigint;
    language?: Language;
    stockCount?: bigint;
    genre?: Genre;
    publicationDate?: Timestamp;
}
export interface AdminAnalytics {
    totalProducts: bigint;
    totalOrders: bigint;
    recentRevenueInPaisa: bigint;
    recentOrderCount: bigint;
    bestsellers: Array<[ProductId, bigint]>;
    totalUsers: bigint;
    totalRevenueInPaisa: bigint;
}
export interface AddressInput {
    city: string;
    fullName: string;
    line1: string;
    line2: string;
    district: string;
    state: string;
    phone: string;
    pincode: string;
}
export type AddressId = bigint;
export interface TransformationInput {
    context: Uint8Array;
    response: http_request_result;
}
export interface CreateOrderInput {
    shippingAddressId: AddressId;
    promoCode?: string;
    stripePaymentIntentId: string;
    items: Array<OrderItem>;
}
export type StripeSessionStatus = {
    __kind__: "completed";
    completed: {
        userPrincipal?: string;
        response: string;
    };
} | {
    __kind__: "failed";
    failed: {
        error: string;
    };
};
export interface StripeConfiguration {
    allowedCountries: Array<string>;
    secretKey: string;
}
export type ReviewId = bigint;
export interface CreateReviewInput {
    bodyEn: string;
    productId: ProductId;
    rating: bigint;
    titleEn: string;
}
export interface Review {
    id: ReviewId;
    userId: UserId;
    createdAt: Timestamp;
    bodyEn: string;
    productId: ProductId;
    isVerifiedPurchase: boolean;
    rating: bigint;
    helpfulVotes: bigint;
    titleEn: string;
}
export interface FlashSaleView {
    id: FlashSaleId;
    startTime: Timestamp;
    endTime: Timestamp;
    createdAt: Timestamp;
    isCurrentlyActive: boolean;
    items: Array<FlashSaleItem>;
    titleBn: string;
    titleEn: string;
}
export type QuestionId = bigint;
export interface Enquiry {
    id: string;
    status: EnquiryStatus;
    name: string;
    submittedAt: Timestamp;
    email: string;
    message: string;
    phone: string;
}
export interface Order {
    id: OrderId;
    totalInPaisa: bigint;
    status: OrderStatus;
    idempotencyKey: string;
    userId: UserId;
    discountInPaisa: bigint;
    promoCodeApplied?: string;
    createdAt: Timestamp;
    estimatedDeliveryDate?: Timestamp;
    courierNote?: string;
    statusHistory: Array<StatusUpdate>;
    updatedAt: Timestamp;
    shippingAddress: Address;
    stripePaymentIntentId: string;
    items: Array<OrderItem>;
}
export interface http_header {
    value: string;
    name: string;
}
export interface http_request_result {
    status: bigint;
    body: Uint8Array;
    headers: Array<http_header>;
}
export interface ProductFilter {
    minRating?: number;
    inStockOnly: boolean;
    minPriceInPaisa?: bigint;
    language?: Language;
    genre?: Genre;
    searchQuery?: string;
    maxPriceInPaisa?: bigint;
}
export type UserId = Principal;
export interface FlashSaleItem {
    discountedPriceInPaisa: bigint;
    discountPercent: bigint;
    productId: ProductId;
    quantityLimit?: bigint;
    originalPriceInPaisa: bigint;
    soldCount: bigint;
}
export interface ShoppingItem {
    productName: string;
    currency: string;
    quantity: bigint;
    priceInCents: bigint;
    productDescription: string;
}
export interface ProductView {
    id: ProductId;
    coverImageUrl: string;
    info: ProductLabel;
    isbn: string;
    publisher: string;
    createdAt: Timestamp;
    priceInPaisa: bigint;
    language: Language;
    averageRating: number;
    stockCount: bigint;
    genre: Genre;
    publicationDate: Timestamp;
    reviewCount: bigint;
}
export interface CreateProductInput {
    coverImageUrl: string;
    info: ProductLabel;
    isbn: string;
    publisher: string;
    priceInPaisa: bigint;
    language: Language;
    stockCount: bigint;
    genre: Genre;
    publicationDate: Timestamp;
}
export interface CreateFlashSaleInput {
    startTime: Timestamp;
    endTime: Timestamp;
    items: Array<FlashSaleItem>;
    titleBn: string;
    titleEn: string;
}
export interface ProductSort {
    field: SortField;
    order: SortOrder;
}
export type AnswerId = bigint;
export interface Answer {
    id: AnswerId;
    createdAt: Timestamp;
    questionId: QuestionId;
    helpfulVotes: bigint;
    answerText: string;
    answeredBy: UserId;
}
export type ProductId = bigint;
export interface Question {
    id: QuestionId;
    createdAt: Timestamp;
    productId: ProductId;
    questionText: string;
    askedBy: UserId;
}
export interface CartItem {
    productId: ProductId;
    priceSnapshotInPaisa: bigint;
    addedAt: Timestamp;
    quantity: bigint;
}
export interface UserProfile {
    preferredLanguage: Variant_bengali_english;
    name: string;
    createdAt: Timestamp;
    email: string;
    phone: string;
}
export type OrderId = bigint;
export enum EnquiryStatus {
    new_ = "new",
    replied = "replied",
    viewed = "viewed"
}
export enum Genre {
    other = "other",
    biography = "biography",
    nonFiction = "nonFiction",
    academic = "academic",
    history = "history",
    bengaliClassics = "bengaliClassics",
    religion = "religion",
    fiction = "fiction",
    childrens = "childrens",
    poetry = "poetry",
    science = "science"
}
export enum Language {
    bilingual = "bilingual",
    bengali = "bengali",
    english = "english"
}
export enum OrderStatus {
    shipped = "shipped",
    cancelled = "cancelled",
    refundRequested = "refundRequested",
    refunded = "refunded",
    delivered = "delivered",
    processing = "processing"
}
export enum SortField {
    title = "title",
    publicationDate = "publicationDate",
    rating = "rating",
    price = "price"
}
export enum SortOrder {
    asc = "asc",
    desc = "desc"
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export enum Variant_bengali_english {
    bengali = "bengali",
    english = "english"
}
export enum Variant_helpfulness_recency_rating {
    helpfulness = "helpfulness",
    recency = "recency",
    rating = "rating"
}
export interface backendInterface {
    addAddress(input: AddressInput): Promise<{
        __kind__: "ok";
        ok: AddressId;
    } | {
        __kind__: "err";
        err: AppError;
    }>;
    addToCart(productId: ProductId, quantity: bigint): Promise<{
        __kind__: "ok";
        ok: null;
    } | {
        __kind__: "err";
        err: AppError;
    }>;
    addToWishlist(productId: ProductId): Promise<{
        __kind__: "ok";
        ok: null;
    } | {
        __kind__: "err";
        err: AppError;
    }>;
    askQuestion(productId: ProductId, questionText: string): Promise<{
        __kind__: "ok";
        ok: QuestionId;
    } | {
        __kind__: "err";
        err: AppError;
    }>;
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    clearCart(): Promise<void>;
    createCheckoutSession(items: Array<ShoppingItem>, successUrl: string, cancelUrl: string): Promise<string>;
    createFlashSale(input: CreateFlashSaleInput): Promise<FlashSaleId>;
    createOrder(input: CreateOrderInput): Promise<{
        __kind__: "ok";
        ok: OrderId;
    } | {
        __kind__: "err";
        err: AppError;
    }>;
    createProduct(input: CreateProductInput): Promise<{
        __kind__: "ok";
        ok: ProductId;
    } | {
        __kind__: "err";
        err: AppError;
    }>;
    createPromoCode(code: string, discountPercent: bigint, maxUsageCount: bigint | null, minSpendInPaisa: bigint, validFrom: Timestamp, validUntil: Timestamp): Promise<{
        __kind__: "ok";
        ok: PromoCodeId;
    } | {
        __kind__: "err";
        err: AppError;
    }>;
    createReview(input: CreateReviewInput): Promise<{
        __kind__: "ok";
        ok: ReviewId;
    } | {
        __kind__: "err";
        err: AppError;
    }>;
    deactivateFlashSale(id: FlashSaleId): Promise<boolean>;
    deactivatePromoCode(code: string): Promise<boolean>;
    deleteAddress(addressId: AddressId): Promise<boolean>;
    deleteProduct(id: ProductId): Promise<boolean>;
    downloadInvoice(orderId: OrderId): Promise<string>;
    getAdminAnalytics(): Promise<AdminAnalytics>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getCart(): Promise<Array<CartItem>>;
    getFlashSale(id: FlashSaleId): Promise<FlashSaleView | null>;
    getOrder(orderId: OrderId): Promise<Order | null>;
    getProduct(id: ProductId): Promise<ProductView | null>;
    getRecentlyViewed(): Promise<Array<ProductView>>;
    getReview(id: ReviewId): Promise<Review | null>;
    getStripeSessionStatus(sessionId: string): Promise<StripeSessionStatus>;
    getUserProfile(user: UserId): Promise<UserProfile | null>;
    getWishlist(): Promise<Array<ProductId>>;
    isCallerAdmin(): Promise<boolean>;
    isStripeConfigured(): Promise<boolean>;
    listAddresses(): Promise<Array<Address>>;
    listAllEnquiries(): Promise<Array<Enquiry>>;
    listAllOrders(offset: bigint, limit: bigint): Promise<Array<Order>>;
    listAnswers(questionId: QuestionId): Promise<Array<Answer>>;
    listFlashSales(activeOnly: boolean): Promise<Array<FlashSaleView>>;
    listMyOrders(): Promise<Array<Order>>;
    listProducts(filterOpt: ProductFilter | null, sortOpt: ProductSort | null, offset: bigint, limit: bigint): Promise<Array<ProductView>>;
    listQuestions(productId: ProductId): Promise<Array<Question>>;
    listReviews(productId: ProductId): Promise<Array<Review>>;
    listReviewsSorted(productId: ProductId, sortMode: Variant_helpfulness_recency_rating): Promise<Array<Review>>;
    postAnswer(questionId: QuestionId, answerText: string): Promise<{
        __kind__: "ok";
        ok: AnswerId;
    } | {
        __kind__: "err";
        err: AppError;
    }>;
    recordRecentlyViewed(productId: ProductId): Promise<void>;
    removeFromCart(productId: ProductId): Promise<void>;
    removeFromWishlist(productId: ProductId): Promise<void>;
    saveCallerUserProfile(profile: UserProfile): Promise<{
        __kind__: "ok";
        ok: null;
    } | {
        __kind__: "err";
        err: AppError;
    }>;
    searchProducts(searchTerm: string, limit: bigint): Promise<Array<ProductView>>;
    setDefaultAddress(addressId: AddressId): Promise<boolean>;
    setStripeConfiguration(config: StripeConfiguration): Promise<void>;
    submitEnquiry(name: string, email: string, phone: string, message: string): Promise<{
        __kind__: "ok";
        ok: string;
    } | {
        __kind__: "err";
        err: AppError;
    }>;
    transform(input: TransformationInput): Promise<TransformationOutput>;
    updateAddress(addressId: AddressId, input: AddressInput): Promise<{
        __kind__: "ok";
        ok: boolean;
    } | {
        __kind__: "err";
        err: AppError;
    }>;
    updateCartQuantity(productId: ProductId, quantity: bigint): Promise<{
        __kind__: "ok";
        ok: null;
    } | {
        __kind__: "err";
        err: AppError;
    }>;
    updateEnquiryStatus(id: string, status: EnquiryStatus): Promise<boolean>;
    updateOrderStatus(orderId: OrderId, status: OrderStatus, note: string, estimatedDeliveryDate: bigint | null, courierNote: string | null): Promise<boolean>;
    updateProduct(input: UpdateProductInput): Promise<{
        __kind__: "ok";
        ok: boolean;
    } | {
        __kind__: "err";
        err: AppError;
    }>;
    updateStock(id: ProductId, delta: bigint): Promise<boolean>;
    validatePromoCode(code: string): Promise<PromoCode | null>;
    voteAnswerHelpful(answerId: AnswerId): Promise<{
        __kind__: "ok";
        ok: boolean;
    } | {
        __kind__: "err";
        err: AppError;
    }>;
    voteReviewHelpful(reviewId: ReviewId): Promise<{
        __kind__: "ok";
        ok: boolean;
    } | {
        __kind__: "err";
        err: AppError;
    }>;
}
