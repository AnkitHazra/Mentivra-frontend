import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export default function ProtectedRoute() {
  const { user, loading } = useContext(AuthContext);

  // ⏳ Wait until auth is restored
  if (loading) {
    return null; // or loader
  }

  // 🔐 Not logged in
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // ✅ Logged in
  return <Outlet />;
}
