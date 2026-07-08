import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Suspense, lazy } from "react";
import type { ReactNode } from "react";
import { Layout } from "./components/Layout";
import { LoadingSpinner } from "./components/LoadingSpinner";
import { OtpModal } from "./components/OtpModal";
import { useAuth } from "./hooks/use-auth";
import { CartProvider } from "./hooks/use-cart";
import { LanguageProvider } from "./hooks/use-language";

// Lazy-loaded pages
const HomePage = lazy(() => import("./pages/HomePage"));
const ShopPage = lazy(() => import("./pages/ShopPage"));
const ProductPage = lazy(() => import("./pages/ProductPage"));
const FlashSalesPage = lazy(() => import("./pages/FlashSalesPage"));
const CartPage = lazy(() => import("./pages/CartPage"));
const WishlistPage = lazy(() => import("./pages/WishlistPage"));
const OrdersPage = lazy(() => import("./pages/OrdersPage"));
const OrderDetailPage = lazy(() => import("./pages/OrderDetailPage"));
const AccountPage = lazy(() => import("./pages/AccountPage"));
const AdminPage = lazy(() => import("./pages/AdminPage"));
const CheckoutPage = lazy(() => import("./pages/CheckoutPage"));
const DownloadPage = lazy(() => import("./pages/DownloadPage"));
const StudyMaterialsPage = lazy(() => import("./pages/StudyMaterialsPage"));

// OTP Gate — wraps the whole app after Internet Identity auth
function OtpGate({ children }: { children: ReactNode }) {
  const {
    needsOtpVerification,
    otpCode,
    isGeneratingOtp,
    isVerifyingOtp,
    otpError,
    verifyOtp,
    generateOtp,
    logout,
  } = useAuth();

  if (needsOtpVerification) {
    if (isGeneratingOtp || !otpCode) {
      return (
        <LoadingSpinner
          fullPage
          text="Generating your secure OTP... / নিরাপদ OTP তৈরি হচ্ছে..."
        />
      );
    }
    return (
      <OtpModal
        otpCode={otpCode}
        onVerify={verifyOtp}
        onResend={generateOtp}
        onLogout={logout}
        isVerifying={isVerifyingOtp}
        verifyError={otpError}
      />
    );
  }

  return <>{children}</>;
}

// Root route with Layout wrapper
const rootRoute = createRootRoute({
  component: () => (
    <LanguageProvider>
      <CartProvider>
        <OtpGate>
          <Layout>
            <Suspense fallback={<LoadingSpinner fullPage text="Loading..." />}>
              <Outlet />
            </Suspense>
          </Layout>
        </OtpGate>
      </CartProvider>
    </LanguageProvider>
  ),
});

// Routes
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const shopRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/shop",
  validateSearch: (
    search: Record<string, unknown>,
  ): {
    q?: string;
    genre?: string;
    lang?: string;
    sort?: string;
    page?: number;
  } => ({
    q: typeof search.q === "string" ? search.q : undefined,
    genre: typeof search.genre === "string" ? search.genre : undefined,
    lang: typeof search.lang === "string" ? search.lang : undefined,
    sort: typeof search.sort === "string" ? search.sort : undefined,
    page: typeof search.page === "number" ? search.page : undefined,
  }),
  component: ShopPage,
});

const productRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/product/$id",
  component: ProductPage,
});

const flashSalesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/flash-sales",
  component: FlashSalesPage,
});

const cartRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/cart",
  component: CartPage,
});

const wishlistRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/wishlist",
  component: WishlistPage,
});

const ordersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/orders",
  component: OrdersPage,
});

const orderDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/orders/$id",
  component: OrderDetailPage,
});

const accountRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/account",
  component: AccountPage,
});

const adminRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin",
  component: AdminPage,
});

const checkoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/checkout",
  component: CheckoutPage,
});

const downloadRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/download",
  component: DownloadPage,
});

const studyMaterialsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/study-materials",
  validateSearch: (
    search: Record<string, unknown>,
  ): {
    department?: string;
    year?: number;
    semester?: number;
    regulation?: string;
    classTest?: string;
    q?: string;
  } => ({
    department:
      typeof search.department === "string" ? search.department : undefined,
    year: typeof search.year === "number" ? search.year : undefined,
    semester: typeof search.semester === "number" ? search.semester : undefined,
    regulation:
      typeof search.regulation === "string" ? search.regulation : undefined,
    classTest:
      typeof search.classTest === "string" ? search.classTest : undefined,
    q: typeof search.q === "string" ? search.q : undefined,
  }),
  component: StudyMaterialsPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  shopRoute,
  productRoute,
  flashSalesRoute,
  cartRoute,
  wishlistRoute,
  ordersRoute,
  orderDetailRoute,
  accountRoute,
  adminRoute,
  checkoutRoute,
  downloadRoute,
  studyMaterialsRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
