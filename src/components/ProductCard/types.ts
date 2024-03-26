interface Product {
  title: string;
  description: string;
  price: number;
  rating: number;
  discount: number;
}

export interface ProductProps {
  product: Product;
}
