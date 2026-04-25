import { Navigate, useLocation } from "react-router-dom";
import { useAuthStore } from "../stores/authStore";

function Guard({ children, roles, allowIncompleteOnboarding = false }) {
  const { isAuthenticated, user } = useAuthStore();
  const location = useLocation();

  if (!isAuthenticated || !user) {
    return <Navigate to="/auth/signin" state={{ from: location }} replace />;
  }

  if (roles?.length && !roles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  if (!allowIncompleteOnboarding && user.role !== "ADMIN") {
    if (user.needsLanguageSelection && location.pathname !== "/language-select") {
      return <Navigate to="/language-select" replace />;
    }

    if (!user.needsLanguageSelection && !user.hasUploadedDocuments && !user.isDocVerified && location.pathname !== "/verify-documents") {
      return <Navigate to="/verify-documents" replace />;
    }
  }

  return children;
}

export function ProtectedRoute({ children, allowIncompleteOnboarding = false }) {
  return <Guard allowIncompleteOnboarding={allowIncompleteOnboarding}>{children}</Guard>;
}

export function WorkerRoute({ children }) {
  return <Guard roles={["WORKER"]}>{children}</Guard>;
}

export function EmployerRoute({ children }) {
  return <Guard roles={["EMPLOYER"]}>{children}</Guard>;
}

export function AdminRoute({ children }) {
  return <Guard roles={["ADMIN"]} allowIncompleteOnboarding>{children}</Guard>;
}
