import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AdminRoute, EmployerRoute, ProtectedRoute, WorkerRoute } from "./routes/guards";
import RouteLoader from "./components/common/RouteLoader";

const LandingPage = lazy(() => import("./pages/LandingPage"));
const SignInPage = lazy(() => import("./pages/SignInPage"));
const SignUpPage = lazy(() => import("./pages/SignUpPage"));
const LanguageSelectPage = lazy(() => import("./pages/LanguageSelectPage"));
const DocumentVerifyPage = lazy(() => import("./pages/DocumentVerifyPage"));
const WorkerDashboardPage = lazy(() => import("./pages/WorkerDashboardPage"));
const EmployerDashboardPage = lazy(() => import("./pages/EmployerDashboardPage"));
const AdminPanelPage = lazy(() => import("./pages/AdminPanelPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

export default function App() {
  return (
    <Suspense fallback={<RouteLoader />}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth/signin" element={<SignInPage />} />
        <Route path="/auth/signup" element={<SignUpPage />} />
        <Route
          path="/language-select"
          element={
            <ProtectedRoute allowIncompleteOnboarding>
              <LanguageSelectPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/verify-documents"
          element={
            <ProtectedRoute allowIncompleteOnboarding>
              <DocumentVerifyPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/worker"
          element={
            <WorkerRoute>
              <WorkerDashboardPage />
            </WorkerRoute>
          }
        />
        <Route
          path="/dashboard/employer"
          element={
            <EmployerRoute>
              <EmployerDashboardPage />
            </EmployerRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminPanelPage />
            </AdminRoute>
          }
        />
        <Route path="/dashboard" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}
