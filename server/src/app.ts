import express, { NextFunction, Request, Response } from "express";

const app = express();

app.use(express.json());

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(req.url);
  next();
});

const port = 3030;

const offers = [
  {
    id: 1,
    name: "50% Off on Shoes",
    description: "Get 50% off on all shoes. Limited time offer.",
    discount: "50%",
    valid_until: "2024-04-30",
    location: "Online",
    category: "Fashion",
  },
  {
    id: 2,
    name: "Buy One Get One Free on Burgers",
    description:
      "Buy one burger and get another one for free. Valid only on weekdays.",
    discount: "BOGO",
    valid_until: "2024-05-15",
    location: "Restaurant X",
    category: "Food",
  },
  {
    id: 3,
    name: "20% Off on Electronics",
    description:
      "Get 20% off on all electronic items. Limited stock available.",
    discount: "20%",
    valid_until: "2024-03-31",
    location: "Tech Store Y",
    category: "Electronics",
  },
];

const products = [
  {
    productId: 1,
    title: "Wireless Bluetooth Headphones",
    description:
      "Enjoy immersive audio experience with these wireless Bluetooth headphones. Perfect for music lovers and audiophiles.",
    price: 49.99,
    rating: 4.7,
    discount: 0.1,
  },
  {
    productId: 2,
    title: "Smartphone Charging Dock",
    description:
      "Keep your smartphone charged and organized with this sleek charging dock. Compatible with most smartphones.",
    price: 19.99,
    rating: 4.5,
    discount: 0.15,
  },
  {
    productId: 3,
    title: "Fitness Tracker Watch",
    description:
      "Track your daily activities, monitor your heart rate, and stay fit with this advanced fitness tracker watch.",
    price: 79.99,
    rating: 4.8,
    discount: 0.2,
  },
  {
    productId: 4,
    title: "Portable Bluetooth Speaker",
    description:
      "Bring the party anywhere with this portable Bluetooth speaker. Enjoy high-quality sound and long battery life.",
    price: 39.99,
    rating: 4.6,
    discount: 0.1,
  },
  {
    productId: 5,
    title: "Wireless Charging Pad",
    description:
      "Charge your smartphone wirelessly with this convenient charging pad. Compatible with Qi-enabled devices.",
    price: 29.99,
    rating: 4.3,
    discount: 0.05,
  },
  {
    productId: 6,
    title: "Digital Camera Bundle",
    description:
      "Capture every moment in stunning detail with this digital camera bundle. Includes camera, lenses, and accessories.",
    price: 299.99,
    rating: 4.9,
    discount: 0.25,
  },
  {
    productId: 7,
    title: "Gaming Mouse and Keyboard Set",
    description:
      "Enhance your gaming experience with this high-performance mouse and keyboard set. Designed for gamers.",
    price: 69.99,
    rating: 4.7,
    discount: 0.1,
  },
  {
    productId: 8,
    title: "Home Security Camera System",
    description:
      "Protect your home with this advanced security camera system. Monitor your property from anywhere.",
    price: 149.99,
    rating: 4.6,
    discount: 0.15,
  },
  {
    productId: 9,
    title: "Wireless Ergonomic Keyboard",
    description:
      "Work comfortably and efficiently with this wireless ergonomic keyboard. Designed for improved typing experience.",
    price: 59.99,
    rating: 4.4,
    discount: 0.1,
  },
  {
    productId: 10,
    title: "External Hard Drive",
    description:
      "Store and backup your files securely with this high-capacity external hard drive. Perfect for storing photos, videos, and documents.",
    price: 89.99,
    rating: 4.5,
    discount: 0.2,
  },
  {
    id: "c0d2",
    productId: "23333",
    title: "New Product",
    description: "Description",
    price: "34",
    rating: "4",
    discount: "0.6",
  },
  {
    id: "104a",
    productId: "23333",
    title: "New Product",
    description: "Description",
    price: "34",
    rating: "4",
    discount: "0.6",
  },
];

app.get("/api/login", (req: Request, res: Response) => {
  return res.json({
    token: "token_from_server",
  });
});

app.get("/api/products", (req: Request, res: Response) => {
  return res.json({
    products: products,
  });
});

app.post("/api/products", (req: Request, res: Response) => {
  const body = req.body;
  console.log(body, "as body");
  return res.json({
    success: true,
  });
});

app.get("/api/offers", (req: Request, res: Response) => {
  return res.json({
    offers: offers,
  });
});

app.listen(port, () => {
  console.log("Express is Running..");
});
