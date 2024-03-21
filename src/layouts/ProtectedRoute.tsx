import { useAuthContextValue } from "../contexts/AuthContext";
import { Outlet, Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = () => {
  const { auth } = useAuthContextValue();
  const location = useLocation();
  return auth?.userName && auth?.userName != "" ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ path: location.pathname }} />
  );
};

export default ProtectedRoute;
