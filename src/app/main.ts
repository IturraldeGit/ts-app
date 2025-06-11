import { addProduct } from "./products/product.service";

addProduct({
  id: "1",
  title: "Product 1",
  createdAt: new Date(),
  stock: 90,
  size: "M",
  category: {
    id: "A",
    name: "Category 1"
  }
})