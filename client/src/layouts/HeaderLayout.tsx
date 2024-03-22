import React from "react";
import { Link, Outlet } from "react-router-dom";

const HeaderLayout = () => {
  return (
    <>
      <nav
        style={{
          background: "linear-gradient(to right, #2193b0, #6dd5ed)",
          padding: "10px",
        }}
      >
        <ul
          style={{
            listStyleType: "none",
            margin: 0,
            padding: 0,
            textAlign: "center",
          }}
        >
          <li style={{ display: "inline", marginRight: "20px" }}>
            <Link
              to="/"
              style={{
                color: "#fff",
                textDecoration: "none",
                fontSize: "18px",
              }}
            >
              Login
            </Link>
          </li>
          <li style={{ display: "inline", marginRight: "20px" }}>
            <Link
              to="/posts"
              style={{
                color: "#fff",
                textDecoration: "none",
                fontSize: "18px",
              }}
            >
              Posts
            </Link>
          </li>
          <li style={{ display: "inline", marginRight: "20px" }}>
            <Link
              to="/payment"
              style={{
                color: "#fff",
                textDecoration: "none",
                fontSize: "18px",
              }}
            >
              Payment
            </Link>
          </li>
          <li style={{ display: "inline", marginRight: "20px" }}>
            <Link
              to="/offers"
              style={{
                color: "#fff",
                textDecoration: "none",
                fontSize: "18px",
              }}
            >
              Offers
            </Link>
          </li>
          <li style={{ display: "inline" }}>MODE:{import.meta.env.MODE}</li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default HeaderLayout;
