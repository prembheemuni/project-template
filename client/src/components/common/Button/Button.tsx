import React from "react";
interface ButtonProps {
  showText: string;
  clickFunc?: any;
  type?: "submit" | "button" | "reset";
}
const Button = ({ showText, clickFunc, type }: ButtonProps) => {
  return (
    <button
      onClick={clickFunc}
      type={type}
      style={{
        padding: "10px 20px",
        backgroundColor: "#007bff",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      {showText}
    </button>
  );
};

export default Button;
