type Sizes = "S" | "M" | "L" | "XL";
type userId = string | number;
/* type Product = {
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  size?: Sizes;
} */
interface Product {
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  size?: Sizes;
}

const products: Product[] = [];

products.push({
  id: "1",
  title: "Product 1",
  createdAt: new Date(),
  stock: 90,
  size: "M"
})

const addProduct = (data: Product) => {
  products.push(data);
}