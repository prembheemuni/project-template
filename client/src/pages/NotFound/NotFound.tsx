import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const goBack = () =>
    navigate("/", { replace: true, state: { path: location.pathname } });
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404 - Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <button onClick={goBack}>Go Back</button>
    </div>
  );
};

export default NotFound;
