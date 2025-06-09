
export const createProduct = (
  id: string | Number,
  isNew: boolean = true,
  stock: number = 10
) => {
  return {
    id,
    stock: stock,
    isNew: isNew
  }
}

const p1 = createProduct(1, true, 12);;
console.log(p1);

const p2 = createProduct(2, false);
console.log(p2);

const p3 = createProduct(3);
console.log(p3);

const p4 = createProduct(4, false, 0);
console.log(p4);
