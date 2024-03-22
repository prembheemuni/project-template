import React from "react";
import AuthContext from "./contexts/AuthContext";
import LoginPage from "./pages/Login/LoginPage";
import { Routes, Route, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import HeaderLayout from "./layouts/HeaderLayout";
import NotFound from "./pages/NotFound/NotFound";
import Posts from "./pages/Posts/Posts";
import Offers from "./pages/Offers/Offers";
import Payment from "./pages/Payment/Payment";
import ProtectedRoute from "./layouts/ProtectedRoute";
import ErrorBoundary from "./layouts/ErrorBoundary";
import { useUserSelector } from "./redux/reducers/loginSlice";

const App: React.FC = () => {
  const location = useLocation();
  console.log(location, "a loc");
  console.log(useUserSelector());

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthContext>
        <Routes>
          <Route element={<HeaderLayout />}>
            <Route
              path="/"
              element={
                <ErrorBoundary>
                  <LoginPage />
                </ErrorBoundary>
              }
            />
            <Route element={<ProtectedRoute />}>
              <Route path="/posts" element={<Posts />} />
              <Route path="/offers" element={<Offers />} />
              <Route path="/payment" element={<Payment />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ToastContainer />
      </AuthContext>
    </QueryClientProvider>
  );
};

export default App;
