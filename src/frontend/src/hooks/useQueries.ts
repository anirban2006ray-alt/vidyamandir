import { useActor, useInternetIdentity } from "@caffeineai/core-infrastructure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createActor } from "../backend";
import type {
  Address,
  AddressInput,
  AdminAnalytics,
  Answer,
  CartItem,
  CreateFlashSaleInput,
  CreateOrderInput,
  CreateProductInput,
  CreateReviewInput,
  Enquiry,
  EnquiryStatus,
  FlashSaleView,
  Order,
  OrderStatus,
  ProductFilter,
  ProductSort,
  ProductView,
  PromoCode,
  Question,
  Review,
  UpdateProductInput,
  UserProfile,
} from "../backend.d.ts";

// ─── Products ───────────────────────────────────────────────────────────────

export function useListProducts(
  filter: ProductFilter | null = null,
  sort: ProductSort | null = null,
  offset = BigInt(0),
  limit = BigInt(24),
) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<ProductView[]>({
    queryKey: ["products", filter, sort, offset.toString(), limit.toString()],
    queryFn: async () => {
      if (!actor) return [];
      return actor.listProducts(filter, sort, offset, limit);
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetProduct(id: bigint | null) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<ProductView | null>({
    queryKey: ["product", id?.toString()],
    queryFn: async () => {
      if (!actor || !id) return null;
      return actor.getProduct(id);
    },
    enabled: !!actor && !isFetching && id !== null,
  });
}

export function useSearchProducts(term: string, limit = BigInt(20)) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<ProductView[]>({
    queryKey: ["searchProducts", term, limit.toString()],
    queryFn: async () => {
      if (!actor || !term.trim()) return [];
      return actor.searchProducts(term, limit);
    },
    enabled: !!actor && !isFetching && term.trim().length > 1,
  });
}

export function useCreateProduct() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (input: CreateProductInput) => {
      if (!actor) throw new Error("Actor not available");
      return actor.createProduct(input);
    },
    onSuccess: () => {
      void qc.invalidateQueries({ queryKey: ["products"] });
    },
  });
}

export function useUpdateProduct() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (input: UpdateProductInput) => {
      if (!actor) throw new Error("Actor not available");
      return actor.updateProduct(input);
    },
    onSuccess: () => {
      void qc.invalidateQueries({ queryKey: ["products"] });
    },
  });
}

export function useDeleteProduct() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (id: bigint) => {
      if (!actor) throw new Error("Actor not available");
      return actor.deleteProduct(id);
    },
    onSuccess: () => {
      void qc.invalidateQueries({ queryKey: ["products"] });
    },
  });
}

export function useUpdateStock() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, delta }: { id: bigint; delta: bigint }) => {
      if (!actor) throw new Error("Actor not available");
      return actor.updateStock(id, delta);
    },
    onSuccess: () => {
      void qc.invalidateQueries({ queryKey: ["products"] });
    },
  });
}

export function useRecordRecentlyViewed() {
  const { actor } = useActor(createActor);
  return useMutation({
    mutationFn: async (productId: bigint) => {
      if (!actor) return;
      return actor.recordRecentlyViewed(productId);
    },
  });
}

export function useGetRecentlyViewed() {
  const { actor, isFetching } = useActor(createActor);
  const { isAuthenticated } = useInternetIdentity();
  return useQuery<ProductView[]>({
    queryKey: ["recentlyViewed"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getRecentlyViewed();
    },
    enabled: !!actor && !isFetching && isAuthenticated,
  });
}

// ─── Flash Sales ─────────────────────────────────────────────────────────────

export function useListFlashSales(activeOnly = false) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<FlashSaleView[]>({
    queryKey: ["flashSales", activeOnly],
    queryFn: async () => {
      if (!actor) return [];
      return actor.listFlashSales(activeOnly);
    },
    enabled: !!actor && !isFetching,
    refetchInterval: 30_000,
  });
}

export function useGetFlashSale(id: bigint | null) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<FlashSaleView | null>({
    queryKey: ["flashSale", id?.toString()],
    queryFn: async () => {
      if (!actor || !id) return null;
      return actor.getFlashSale(id);
    },
    enabled: !!actor && !isFetching && id !== null,
  });
}

export function useCreateFlashSale() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (input: CreateFlashSaleInput) => {
      if (!actor) throw new Error("Actor not available");
      return actor.createFlashSale(input);
    },
    onSuccess: () => {
      void qc.invalidateQueries({ queryKey: ["flashSales"] });
    },
  });
}

export function useDeactivateFlashSale() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (id: bigint) => {
      if (!actor) throw new Error("Actor not available");
      return actor.deactivateFlashSale(id);
    },
    onSuccess: () => {
      void qc.invalidateQueries({ queryKey: ["flashSales"] });
    },
  });
}

// ─── Cart ─────────────────────────────────────────────────────────────────────

export function useGetCart() {
  const { actor, isFetching } = useActor(createActor);
  const { isAuthenticated } = useInternetIdentity();
  return useQuery<CartItem[]>({
    queryKey: ["cart"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getCart();
    },
    enabled: !!actor && !isFetching && isAuthenticated,
  });
}

export function useAddToCart() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({
      productId,
      quantity,
    }: { productId: bigint; quantity: bigint }) => {
      if (!actor) throw new Error("Actor not available");
      return actor.addToCart(productId, quantity);
    },
    onSuccess: () => {
      void qc.invalidateQueries({ queryKey: ["cart"] });
    },
  });
}

export function useRemoveFromCart() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (productId: bigint) => {
      if (!actor) throw new Error("Actor not available");
      return actor.removeFromCart(productId);
    },
    onSuccess: () => {
      void qc.invalidateQueries({ queryKey: ["cart"] });
    },
  });
}

export function useUpdateCartQuantity() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({
      productId,
      quantity,
    }: { productId: bigint; quantity: bigint }) => {
      if (!actor) throw new Error("Actor not available");
      return actor.updateCartQuantity(productId, quantity);
    },
    onSuccess: () => {
      void qc.invalidateQueries({ queryKey: ["cart"] });
    },
  });
}

export function useClearCart() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      if (!actor) throw new Error("Actor not available");
      return actor.clearCart();
    },
    onSuccess: () => {
      void qc.invalidateQueries({ queryKey: ["cart"] });
    },
  });
}

// ─── Wishlist ─────────────────────────────────────────────────────────────────

export function useGetWishlist() {
  const { actor, isFetching } = useActor(createActor);
  const { isAuthenticated } = useInternetIdentity();
  return useQuery<bigint[]>({
    queryKey: ["wishlist"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getWishlist();
    },
    enabled: !!actor && !isFetching && isAuthenticated,
  });
}

export function useAddToWishlist() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (productId: bigint) => {
      if (!actor) throw new Error("Actor not available");
      return actor.addToWishlist(productId);
    },
    onSuccess: () => {
      void qc.invalidateQueries({ queryKey: ["wishlist"] });
    },
  });
}

export function useRemoveFromWishlist() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (productId: bigint) => {
      if (!actor) throw new Error("Actor not available");
      return actor.removeFromWishlist(productId);
    },
    onSuccess: () => {
      void qc.invalidateQueries({ queryKey: ["wishlist"] });
    },
  });
}

// ─── User Profile ─────────────────────────────────────────────────────────────

export function useSaveUserProfile() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (profile: UserProfile) => {
      if (!actor) throw new Error("Actor not available");
      return actor.saveCallerUserProfile(profile);
    },
    onSuccess: () => {
      void qc.invalidateQueries({ queryKey: ["currentUserProfile"] });
    },
  });
}

// ─── Orders ───────────────────────────────────────────────────────────────────

export function useListMyOrders() {
  const { actor, isFetching } = useActor(createActor);
  const { isAuthenticated } = useInternetIdentity();
  return useQuery<Order[]>({
    queryKey: ["myOrders"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.listMyOrders();
    },
    enabled: !!actor && !isFetching && isAuthenticated,
  });
}

export function useGetOrder(orderId: bigint | null) {
  const { actor, isFetching } = useActor(createActor);
  const { isAuthenticated } = useInternetIdentity();
  return useQuery<Order | null>({
    queryKey: ["order", orderId?.toString()],
    queryFn: async () => {
      if (!actor || !orderId) return null;
      return actor.getOrder(orderId);
    },
    enabled: !!actor && !isFetching && isAuthenticated && orderId !== null,
  });
}

export function usePlaceOrder() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (input: CreateOrderInput) => {
      if (!actor) throw new Error("Actor not available");
      return actor.createOrder(input);
    },
    onSuccess: () => {
      void qc.invalidateQueries({ queryKey: ["myOrders"] });
      void qc.invalidateQueries({ queryKey: ["cart"] });
    },
  });
}

export function useCancelOrder() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (orderId: bigint) => {
      if (!actor) throw new Error("Actor not available");
      return actor.updateOrderStatus(
        orderId,
        "cancelled" as OrderStatus,
        "Cancelled by customer",
        null,
        null,
      );
    },
    onSuccess: (_, orderId) => {
      void qc.invalidateQueries({ queryKey: ["myOrders"] });
      void qc.invalidateQueries({ queryKey: ["order", orderId.toString()] });
    },
  });
}

export function useDownloadInvoice() {
  const { actor } = useActor(createActor);
  return useMutation({
    mutationFn: async (orderId: bigint) => {
      if (!actor) throw new Error("Actor not available");
      return actor.downloadInvoice(orderId);
    },
  });
}

export function useUpdateOrderStatus() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({
      orderId,
      status,
      note,
      estimatedDeliveryDate,
      courierNote,
    }: {
      orderId: bigint;
      status: OrderStatus;
      note: string;
      estimatedDeliveryDate?: bigint | null;
      courierNote?: string | null;
    }) => {
      if (!actor) throw new Error("Actor not available");
      return actor.updateOrderStatus(
        orderId,
        status,
        note,
        estimatedDeliveryDate ?? null,
        courierNote ?? null,
      );
    },
    onSuccess: (_, vars) => {
      void qc.invalidateQueries({ queryKey: ["myOrders"] });
      void qc.invalidateQueries({ queryKey: ["allOrders"] });
      void qc.invalidateQueries({
        queryKey: ["order", vars.orderId.toString()],
      });
    },
  });
}

export function useVoteReviewHelpful() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (reviewId: bigint) => {
      if (!actor) throw new Error("Actor not available");
      return actor.voteReviewHelpful(reviewId);
    },
    onSuccess: () => {
      void qc.invalidateQueries({ queryKey: ["reviews"] });
    },
  });
}

// ─── Addresses ────────────────────────────────────────────────────────────────

export function useListAddresses() {
  const { actor, isFetching } = useActor(createActor);
  const { isAuthenticated } = useInternetIdentity();
  return useQuery<Address[]>({
    queryKey: ["addresses"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.listAddresses();
    },
    enabled: !!actor && !isFetching && isAuthenticated,
  });
}

export function useAddAddress() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (input: AddressInput) => {
      if (!actor) throw new Error("Actor not available");
      return actor.addAddress(input);
    },
    onSuccess: () => {
      void qc.invalidateQueries({ queryKey: ["addresses"] });
    },
  });
}

export function useUpdateAddress() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, input }: { id: bigint; input: AddressInput }) => {
      if (!actor) throw new Error("Actor not available");
      return actor.updateAddress(id, input);
    },
    onSuccess: () => {
      void qc.invalidateQueries({ queryKey: ["addresses"] });
    },
  });
}

export function useDeleteAddress() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (addressId: bigint) => {
      if (!actor) throw new Error("Actor not available");
      return actor.deleteAddress(addressId);
    },
    onSuccess: () => {
      void qc.invalidateQueries({ queryKey: ["addresses"] });
    },
  });
}

export function useSetDefaultAddress() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (addressId: bigint) => {
      if (!actor) throw new Error("Actor not available");
      return actor.setDefaultAddress(addressId);
    },
    onSuccess: () => {
      void qc.invalidateQueries({ queryKey: ["addresses"] });
    },
  });
}

// ─── Reviews & Q&A ────────────────────────────────────────────────────────────

export function useListReviews(productId: bigint | null) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<Review[]>({
    queryKey: ["reviews", productId?.toString()],
    queryFn: async () => {
      if (!actor || !productId) return [];
      return actor.listReviews(productId);
    },
    enabled: !!actor && !isFetching && productId !== null,
  });
}

export function useCreateReview() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (input: CreateReviewInput) => {
      if (!actor) throw new Error("Actor not available");
      return actor.createReview(input);
    },
    onSuccess: (_, vars) => {
      void qc.invalidateQueries({
        queryKey: ["reviews", vars.productId.toString()],
      });
    },
  });
}

export function useListQuestions(productId: bigint | null) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<Question[]>({
    queryKey: ["questions", productId?.toString()],
    queryFn: async () => {
      if (!actor || !productId) return [];
      return actor.listQuestions(productId);
    },
    enabled: !!actor && !isFetching && productId !== null,
  });
}

export function useAskQuestion() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({
      productId,
      questionText,
    }: { productId: bigint; questionText: string }) => {
      if (!actor) throw new Error("Actor not available");
      return actor.askQuestion(productId, questionText);
    },
    onSuccess: (_, vars) => {
      void qc.invalidateQueries({
        queryKey: ["questions", vars.productId.toString()],
      });
    },
  });
}

export function useListAnswers(questionId: bigint | null) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<Answer[]>({
    queryKey: ["answers", questionId?.toString()],
    queryFn: async () => {
      if (!actor || !questionId) return [];
      return actor.listAnswers(questionId);
    },
    enabled: !!actor && !isFetching && questionId !== null,
  });
}

export function usePostAnswer() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({
      questionId,
      answerText,
    }: { questionId: bigint; answerText: string }) => {
      if (!actor) throw new Error("Actor not available");
      return actor.postAnswer(questionId, answerText);
    },
    onSuccess: (_, vars) => {
      void qc.invalidateQueries({
        queryKey: ["answers", vars.questionId.toString()],
      });
    },
  });
}

export function useVoteAnswerHelpful() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (answerId: bigint) => {
      if (!actor) throw new Error("Actor not available");
      return actor.voteAnswerHelpful(answerId);
    },
    onSuccess: () => {
      void qc.invalidateQueries({ queryKey: ["answers"] });
    },
  });
}

// ─── Admin ─────────────────────────────────────────────────────────────────────

export function useGetAdminAnalytics() {
  const { actor, isFetching } = useActor(createActor);
  const { isAuthenticated } = useInternetIdentity();
  return useQuery<AdminAnalytics>({
    queryKey: ["adminAnalytics"],
    queryFn: async () => {
      if (!actor) throw new Error("Actor not available");
      return actor.getAdminAnalytics();
    },
    enabled: !!actor && !isFetching && isAuthenticated,
  });
}

export function useListAllOrders(offset = BigInt(0), limit = BigInt(50)) {
  const { actor, isFetching } = useActor(createActor);
  const { isAuthenticated } = useInternetIdentity();
  return useQuery<Order[]>({
    queryKey: ["allOrders", offset.toString(), limit.toString()],
    queryFn: async () => {
      if (!actor) return [];
      return actor.listAllOrders(offset, limit);
    },
    enabled: !!actor && !isFetching && isAuthenticated,
  });
}

// ─── Enquiries ────────────────────────────────────────────────────────────────

export function useSubmitEnquiry() {
  const { actor } = useActor(createActor);
  return useMutation({
    mutationFn: async ({
      name,
      email,
      phone,
      message,
    }: {
      name: string;
      email: string;
      phone: string;
      message: string;
    }) => {
      if (!actor) throw new Error("Actor not available");
      return actor.submitEnquiry(name, email, phone, message);
    },
  });
}

export function useListAllEnquiries() {
  const { actor, isFetching } = useActor(createActor);
  const { isAuthenticated } = useInternetIdentity();
  return useQuery<Enquiry[]>({
    queryKey: ["allEnquiries"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.listAllEnquiries();
    },
    enabled: !!actor && !isFetching && isAuthenticated,
  });
}

export function useUpdateEnquiryStatus() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({
      id,
      status,
    }: {
      id: string;
      status: EnquiryStatus;
    }) => {
      if (!actor) throw new Error("Actor not available");
      return actor.updateEnquiryStatus(id, status);
    },
    onSuccess: () => {
      void qc.invalidateQueries({ queryKey: ["allEnquiries"] });
    },
  });
}

// ─── Promo Codes ──────────────────────────────────────────────────────────────

export function useValidatePromoCode() {
  const { actor } = useActor(createActor);
  return useMutation({
    mutationFn: async (code: string): Promise<PromoCode | null> => {
      if (!actor) throw new Error("Actor not available");
      return actor.validatePromoCode(code);
    },
  });
}

// ─── Stripe ───────────────────────────────────────────────────────────────────

export function useIsStripeConfigured() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<boolean>({
    queryKey: ["stripeConfigured"],
    queryFn: async () => {
      if (!actor) return false;
      return actor.isStripeConfigured();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useCreateCheckoutSession() {
  const { actor } = useActor(createActor);
  return useMutation({
    mutationFn: async ({
      items,
      successUrl,
      cancelUrl,
    }: {
      items: Array<{
        productName: string;
        currency: string;
        quantity: bigint;
        priceInCents: bigint;
        productDescription: string;
      }>;
      successUrl: string;
      cancelUrl: string;
    }) => {
      if (!actor) throw new Error("Actor not available");
      return actor.createCheckoutSession(items, successUrl, cancelUrl);
    },
  });
}
