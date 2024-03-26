import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useUserSelector } from "../redux/reducers/loginSlice";

const ProtectedRoute = () => {
  const userData = useUserSelector();
  const location = useLocation();
  return userData.isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ path: location.pathname }} />
  );
};

export default ProtectedRoute;
