var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _client, _currentResult, _currentMutation, _mutateOptions, _MutationObserver_instances, updateResult_fn, notify_fn, _a;
import { E as Subscribable, F as shallowEqualObjects, I as hashKey, J as getDefaultState, K as notifyManager, N as useQueryClient, r as reactExports, Q as noop, T as shouldThrowError, W as useActor, Y as useQuery, Z as useInternetIdentity, _ as createActor } from "./index-CokRMBGk.js";
var MutationObserver = (_a = class extends Subscribable {
  constructor(client, options) {
    super();
    __privateAdd(this, _MutationObserver_instances);
    __privateAdd(this, _client);
    __privateAdd(this, _currentResult);
    __privateAdd(this, _currentMutation);
    __privateAdd(this, _mutateOptions);
    __privateSet(this, _client, client);
    this.setOptions(options);
    this.bindMethods();
    __privateMethod(this, _MutationObserver_instances, updateResult_fn).call(this);
  }
  bindMethods() {
    this.mutate = this.mutate.bind(this);
    this.reset = this.reset.bind(this);
  }
  setOptions(options) {
    var _a2;
    const prevOptions = this.options;
    this.options = __privateGet(this, _client).defaultMutationOptions(options);
    if (!shallowEqualObjects(this.options, prevOptions)) {
      __privateGet(this, _client).getMutationCache().notify({
        type: "observerOptionsUpdated",
        mutation: __privateGet(this, _currentMutation),
        observer: this
      });
    }
    if ((prevOptions == null ? void 0 : prevOptions.mutationKey) && this.options.mutationKey && hashKey(prevOptions.mutationKey) !== hashKey(this.options.mutationKey)) {
      this.reset();
    } else if (((_a2 = __privateGet(this, _currentMutation)) == null ? void 0 : _a2.state.status) === "pending") {
      __privateGet(this, _currentMutation).setOptions(this.options);
    }
  }
  onUnsubscribe() {
    var _a2;
    if (!this.hasListeners()) {
      (_a2 = __privateGet(this, _currentMutation)) == null ? void 0 : _a2.removeObserver(this);
    }
  }
  onMutationUpdate(action) {
    __privateMethod(this, _MutationObserver_instances, updateResult_fn).call(this);
    __privateMethod(this, _MutationObserver_instances, notify_fn).call(this, action);
  }
  getCurrentResult() {
    return __privateGet(this, _currentResult);
  }
  reset() {
    var _a2;
    (_a2 = __privateGet(this, _currentMutation)) == null ? void 0 : _a2.removeObserver(this);
    __privateSet(this, _currentMutation, void 0);
    __privateMethod(this, _MutationObserver_instances, updateResult_fn).call(this);
    __privateMethod(this, _MutationObserver_instances, notify_fn).call(this);
  }
  mutate(variables, options) {
    var _a2;
    __privateSet(this, _mutateOptions, options);
    (_a2 = __privateGet(this, _currentMutation)) == null ? void 0 : _a2.removeObserver(this);
    __privateSet(this, _currentMutation, __privateGet(this, _client).getMutationCache().build(__privateGet(this, _client), this.options));
    __privateGet(this, _currentMutation).addObserver(this);
    return __privateGet(this, _currentMutation).execute(variables);
  }
}, _client = new WeakMap(), _currentResult = new WeakMap(), _currentMutation = new WeakMap(), _mutateOptions = new WeakMap(), _MutationObserver_instances = new WeakSet(), updateResult_fn = function() {
  var _a2;
  const state = ((_a2 = __privateGet(this, _currentMutation)) == null ? void 0 : _a2.state) ?? getDefaultState();
  __privateSet(this, _currentResult, {
    ...state,
    isPending: state.status === "pending",
    isSuccess: state.status === "success",
    isError: state.status === "error",
    isIdle: state.status === "idle",
    mutate: this.mutate,
    reset: this.reset
  });
}, notify_fn = function(action) {
  notifyManager.batch(() => {
    var _a2, _b, _c, _d, _e, _f, _g, _h;
    if (__privateGet(this, _mutateOptions) && this.hasListeners()) {
      const variables = __privateGet(this, _currentResult).variables;
      const onMutateResult = __privateGet(this, _currentResult).context;
      const context = {
        client: __privateGet(this, _client),
        meta: this.options.meta,
        mutationKey: this.options.mutationKey
      };
      if ((action == null ? void 0 : action.type) === "success") {
        try {
          (_b = (_a2 = __privateGet(this, _mutateOptions)).onSuccess) == null ? void 0 : _b.call(
            _a2,
            action.data,
            variables,
            onMutateResult,
            context
          );
        } catch (e) {
          void Promise.reject(e);
        }
        try {
          (_d = (_c = __privateGet(this, _mutateOptions)).onSettled) == null ? void 0 : _d.call(
            _c,
            action.data,
            null,
            variables,
            onMutateResult,
            context
          );
        } catch (e) {
          void Promise.reject(e);
        }
      } else if ((action == null ? void 0 : action.type) === "error") {
        try {
          (_f = (_e = __privateGet(this, _mutateOptions)).onError) == null ? void 0 : _f.call(
            _e,
            action.error,
            variables,
            onMutateResult,
            context
          );
        } catch (e) {
          void Promise.reject(e);
        }
        try {
          (_h = (_g = __privateGet(this, _mutateOptions)).onSettled) == null ? void 0 : _h.call(
            _g,
            void 0,
            action.error,
            variables,
            onMutateResult,
            context
          );
        } catch (e) {
          void Promise.reject(e);
        }
      }
    }
    this.listeners.forEach((listener) => {
      listener(__privateGet(this, _currentResult));
    });
  });
}, _a);
function useMutation(options, queryClient) {
  const client = useQueryClient();
  const [observer] = reactExports.useState(
    () => new MutationObserver(
      client,
      options
    )
  );
  reactExports.useEffect(() => {
    observer.setOptions(options);
  }, [observer, options]);
  const result = reactExports.useSyncExternalStore(
    reactExports.useCallback(
      (onStoreChange) => observer.subscribe(notifyManager.batchCalls(onStoreChange)),
      [observer]
    ),
    () => observer.getCurrentResult(),
    () => observer.getCurrentResult()
  );
  const mutate = reactExports.useCallback(
    (variables, mutateOptions) => {
      observer.mutate(variables, mutateOptions).catch(noop);
    },
    [observer]
  );
  if (result.error && shouldThrowError(observer.options.throwOnError, [result.error])) {
    throw result.error;
  }
  return { ...result, mutate, mutateAsync: result.mutate };
}
function useListProducts(filter = null, sort = null, offset = BigInt(0), limit = BigInt(24)) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["products", filter, sort, offset.toString(), limit.toString()],
    queryFn: async () => {
      if (!actor) return [];
      return actor.listProducts(filter, sort, offset, limit);
    },
    enabled: !!actor && !isFetching
  });
}
function useGetProduct(id) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["product", id == null ? void 0 : id.toString()],
    queryFn: async () => {
      if (!actor || !id) return null;
      return actor.getProduct(id);
    },
    enabled: !!actor && !isFetching && id !== null
  });
}
function useSearchProducts(term, limit = BigInt(20)) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["searchProducts", term, limit.toString()],
    queryFn: async () => {
      if (!actor || !term.trim()) return [];
      return actor.searchProducts(term, limit);
    },
    enabled: !!actor && !isFetching && term.trim().length > 1
  });
}
function useCreateProduct() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (input) => {
      if (!actor) throw new Error("Actor not available");
      return actor.createProduct(input);
    },
    onSuccess: () => {
      void qc.invalidateQueries({ queryKey: ["products"] });
    }
  });
}
function useUpdateProduct() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (input) => {
      if (!actor) throw new Error("Actor not available");
      return actor.updateProduct(input);
    },
    onSuccess: () => {
      void qc.invalidateQueries({ queryKey: ["products"] });
    }
  });
}
function useDeleteProduct() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (id) => {
      if (!actor) throw new Error("Actor not available");
      return actor.deleteProduct(id);
    },
    onSuccess: () => {
      void qc.invalidateQueries({ queryKey: ["products"] });
    }
  });
}
function useUpdateStock() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, delta }) => {
      if (!actor) throw new Error("Actor not available");
      return actor.updateStock(id, delta);
    },
    onSuccess: () => {
      void qc.invalidateQueries({ queryKey: ["products"] });
    }
  });
}
function useRecordRecentlyViewed() {
  const { actor } = useActor(createActor);
  return useMutation({
    mutationFn: async (productId) => {
      if (!actor) return;
      return actor.recordRecentlyViewed(productId);
    }
  });
}
function useGetRecentlyViewed() {
  const { actor, isFetching } = useActor(createActor);
  const { isAuthenticated } = useInternetIdentity();
  return useQuery({
    queryKey: ["recentlyViewed"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getRecentlyViewed();
    },
    enabled: !!actor && !isFetching && isAuthenticated
  });
}
function useListFlashSales(activeOnly = false) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["flashSales", activeOnly],
    queryFn: async () => {
      if (!actor) return [];
      return actor.listFlashSales(activeOnly);
    },
    enabled: !!actor && !isFetching,
    refetchInterval: 3e4
  });
}
function useCreateFlashSale() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (input) => {
      if (!actor) throw new Error("Actor not available");
      return actor.createFlashSale(input);
    },
    onSuccess: () => {
      void qc.invalidateQueries({ queryKey: ["flashSales"] });
    }
  });
}
function useDeactivateFlashSale() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (id) => {
      if (!actor) throw new Error("Actor not available");
      return actor.deactivateFlashSale(id);
    },
    onSuccess: () => {
      void qc.invalidateQueries({ queryKey: ["flashSales"] });
    }
  });
}
function useGetCart() {
  const { actor, isFetching } = useActor(createActor);
  const { isAuthenticated } = useInternetIdentity();
  return useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getCart();
    },
    enabled: !!actor && !isFetching && isAuthenticated
  });
}
function useRemoveFromCart() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (productId) => {
      if (!actor) throw new Error("Actor not available");
      return actor.removeFromCart(productId);
    },
    onSuccess: () => {
      void qc.invalidateQueries({ queryKey: ["cart"] });
    }
  });
}
function useUpdateCartQuantity() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({
      productId,
      quantity
    }) => {
      if (!actor) throw new Error("Actor not available");
      return actor.updateCartQuantity(productId, quantity);
    },
    onSuccess: () => {
      void qc.invalidateQueries({ queryKey: ["cart"] });
    }
  });
}
function useGetWishlist() {
  const { actor, isFetching } = useActor(createActor);
  const { isAuthenticated } = useInternetIdentity();
  return useQuery({
    queryKey: ["wishlist"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getWishlist();
    },
    enabled: !!actor && !isFetching && isAuthenticated
  });
}
function useAddToWishlist() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (productId) => {
      if (!actor) throw new Error("Actor not available");
      return actor.addToWishlist(productId);
    },
    onSuccess: () => {
      void qc.invalidateQueries({ queryKey: ["wishlist"] });
    }
  });
}
function useRemoveFromWishlist() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (productId) => {
      if (!actor) throw new Error("Actor not available");
      return actor.removeFromWishlist(productId);
    },
    onSuccess: () => {
      void qc.invalidateQueries({ queryKey: ["wishlist"] });
    }
  });
}
function useSaveUserProfile() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (profile) => {
      if (!actor) throw new Error("Actor not available");
      return actor.saveCallerUserProfile(profile);
    },
    onSuccess: () => {
      void qc.invalidateQueries({ queryKey: ["currentUserProfile"] });
    }
  });
}
function useListMyOrders() {
  const { actor, isFetching } = useActor(createActor);
  const { isAuthenticated } = useInternetIdentity();
  return useQuery({
    queryKey: ["myOrders"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.listMyOrders();
    },
    enabled: !!actor && !isFetching && isAuthenticated
  });
}
function useGetOrder(orderId) {
  const { actor, isFetching } = useActor(createActor);
  const { isAuthenticated } = useInternetIdentity();
  return useQuery({
    queryKey: ["order", orderId == null ? void 0 : orderId.toString()],
    queryFn: async () => {
      if (!actor || !orderId) return null;
      return actor.getOrder(orderId);
    },
    enabled: !!actor && !isFetching && isAuthenticated && orderId !== null
  });
}
function useCancelOrder() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (orderId) => {
      if (!actor) throw new Error("Actor not available");
      return actor.updateOrderStatus(
        orderId,
        "cancelled",
        "Cancelled by customer"
      );
    },
    onSuccess: (_, orderId) => {
      void qc.invalidateQueries({ queryKey: ["myOrders"] });
      void qc.invalidateQueries({ queryKey: ["order", orderId.toString()] });
    }
  });
}
function useDownloadInvoice() {
  const { actor } = useActor(createActor);
  return useMutation({
    mutationFn: async (orderId) => {
      if (!actor) throw new Error("Actor not available");
      return actor.downloadInvoice(orderId);
    }
  });
}
function useUpdateOrderStatus() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({
      orderId,
      status,
      note
    }) => {
      if (!actor) throw new Error("Actor not available");
      return actor.updateOrderStatus(orderId, status, note);
    },
    onSuccess: () => {
      void qc.invalidateQueries({ queryKey: ["myOrders"] });
      void qc.invalidateQueries({ queryKey: ["allOrders"] });
    }
  });
}
function useListAddresses() {
  const { actor, isFetching } = useActor(createActor);
  const { isAuthenticated } = useInternetIdentity();
  return useQuery({
    queryKey: ["addresses"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.listAddresses();
    },
    enabled: !!actor && !isFetching && isAuthenticated
  });
}
function useAddAddress() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (input) => {
      if (!actor) throw new Error("Actor not available");
      return actor.addAddress(input);
    },
    onSuccess: () => {
      void qc.invalidateQueries({ queryKey: ["addresses"] });
    }
  });
}
function useUpdateAddress() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, input }) => {
      if (!actor) throw new Error("Actor not available");
      return actor.updateAddress(id, input);
    },
    onSuccess: () => {
      void qc.invalidateQueries({ queryKey: ["addresses"] });
    }
  });
}
function useDeleteAddress() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (addressId) => {
      if (!actor) throw new Error("Actor not available");
      return actor.deleteAddress(addressId);
    },
    onSuccess: () => {
      void qc.invalidateQueries({ queryKey: ["addresses"] });
    }
  });
}
function useSetDefaultAddress() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (addressId) => {
      if (!actor) throw new Error("Actor not available");
      return actor.setDefaultAddress(addressId);
    },
    onSuccess: () => {
      void qc.invalidateQueries({ queryKey: ["addresses"] });
    }
  });
}
function useListReviews(productId) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["reviews", productId == null ? void 0 : productId.toString()],
    queryFn: async () => {
      if (!actor || !productId) return [];
      return actor.listReviews(productId);
    },
    enabled: !!actor && !isFetching && productId !== null
  });
}
function useCreateReview() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (input) => {
      if (!actor) throw new Error("Actor not available");
      return actor.createReview(input);
    },
    onSuccess: (_, vars) => {
      void qc.invalidateQueries({
        queryKey: ["reviews", vars.productId.toString()]
      });
    }
  });
}
function useListQuestions(productId) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["questions", productId == null ? void 0 : productId.toString()],
    queryFn: async () => {
      if (!actor || !productId) return [];
      return actor.listQuestions(productId);
    },
    enabled: !!actor && !isFetching && productId !== null
  });
}
function useAskQuestion() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({
      productId,
      questionText
    }) => {
      if (!actor) throw new Error("Actor not available");
      return actor.askQuestion(productId, questionText);
    },
    onSuccess: (_, vars) => {
      void qc.invalidateQueries({
        queryKey: ["questions", vars.productId.toString()]
      });
    }
  });
}
function useListAnswers(questionId) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["answers", questionId == null ? void 0 : questionId.toString()],
    queryFn: async () => {
      if (!actor || !questionId) return [];
      return actor.listAnswers(questionId);
    },
    enabled: !!actor && !isFetching && questionId !== null
  });
}
function usePostAnswer() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({
      questionId,
      answerText
    }) => {
      if (!actor) throw new Error("Actor not available");
      return actor.postAnswer(questionId, answerText);
    },
    onSuccess: (_, vars) => {
      void qc.invalidateQueries({
        queryKey: ["answers", vars.questionId.toString()]
      });
    }
  });
}
function useVoteAnswerHelpful() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (answerId) => {
      if (!actor) throw new Error("Actor not available");
      return actor.voteAnswerHelpful(answerId);
    },
    onSuccess: () => {
      void qc.invalidateQueries({ queryKey: ["answers"] });
    }
  });
}
function useGetAdminAnalytics() {
  const { actor, isFetching } = useActor(createActor);
  const { isAuthenticated } = useInternetIdentity();
  return useQuery({
    queryKey: ["adminAnalytics"],
    queryFn: async () => {
      if (!actor) throw new Error("Actor not available");
      return actor.getAdminAnalytics();
    },
    enabled: !!actor && !isFetching && isAuthenticated
  });
}
function useListAllOrders(offset = BigInt(0), limit = BigInt(50)) {
  const { actor, isFetching } = useActor(createActor);
  const { isAuthenticated } = useInternetIdentity();
  return useQuery({
    queryKey: ["allOrders", offset.toString(), limit.toString()],
    queryFn: async () => {
      if (!actor) return [];
      return actor.listAllOrders(offset, limit);
    },
    enabled: !!actor && !isFetching && isAuthenticated
  });
}
function useValidatePromoCode() {
  const { actor } = useActor(createActor);
  return useMutation({
    mutationFn: async (code) => {
      if (!actor) throw new Error("Actor not available");
      return actor.validatePromoCode(code);
    }
  });
}
function useIsStripeConfigured() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["stripeConfigured"],
    queryFn: async () => {
      if (!actor) return false;
      return actor.isStripeConfigured();
    },
    enabled: !!actor && !isFetching
  });
}
function useCreateCheckoutSession() {
  const { actor } = useActor(createActor);
  return useMutation({
    mutationFn: async ({
      items,
      successUrl,
      cancelUrl
    }) => {
      if (!actor) throw new Error("Actor not available");
      return actor.createCheckoutSession(items, successUrl, cancelUrl);
    }
  });
}
export {
  useListAddresses as A,
  useAddAddress as B,
  useUpdateAddress as C,
  useDeleteAddress as D,
  useSetDefaultAddress as E,
  useGetAdminAnalytics as F,
  useListAllOrders as G,
  useDeleteProduct as H,
  useCreateProduct as I,
  useUpdateProduct as J,
  useUpdateStock as K,
  useCreateFlashSale as L,
  useDeactivateFlashSale as M,
  useIsStripeConfigured as N,
  useCreateCheckoutSession as O,
  useListFlashSales as a,
  useGetRecentlyViewed as b,
  useSearchProducts as c,
  useGetWishlist as d,
  useGetProduct as e,
  useListReviews as f,
  useListQuestions as g,
  useRecordRecentlyViewed as h,
  useAddToWishlist as i,
  useRemoveFromWishlist as j,
  useCreateReview as k,
  useAskQuestion as l,
  useListAnswers as m,
  usePostAnswer as n,
  useVoteAnswerHelpful as o,
  useGetCart as p,
  useValidatePromoCode as q,
  useRemoveFromCart as r,
  useUpdateCartQuantity as s,
  useListMyOrders as t,
  useListProducts as u,
  useGetOrder as v,
  useDownloadInvoice as w,
  useCancelOrder as x,
  useUpdateOrderStatus as y,
  useSaveUserProfile as z
};
