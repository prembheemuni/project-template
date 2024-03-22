import React from "react";
import { ProductProps } from "./types";

const ProductCard: React.FC<ProductProps> = ({ product }) => {
  return (
    <div style={styles.card}>
      <h2 style={styles.title}>{product.title}</h2>
      <p style={styles.description}>{product.description}</p>
      <p style={styles.price}>Price: ${product.price.toFixed(2)}</p>
      <p style={styles.rating}>Rating: {product.rating}</p>
      <p style={styles.discount}>Discount: {product.discount * 100}%</p>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "20px",
    marginBottom: "20px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  description: {
    fontSize: "16px",
    marginBottom: "10px",
  },
  price: {
    fontSize: "18px",
    marginBottom: "10px",
  },
  rating: {
    fontSize: "16px",
    marginBottom: "10px",
  },
  discount: {
    fontSize: "16px",
    marginBottom: "10px",
  },
};

export default ProductCard;
