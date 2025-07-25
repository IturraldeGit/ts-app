import { faker }  from '@faker-js/faker';

import { addProduct, products, updateProduct, findProducts } from "./products/product.service";

for (let i = 0; i < 50; i++) {
  addProduct({
    description: faker.commerce.productDescription(),
    image: faker.image.url(),
    color: faker.color.human(),
    size: faker.helpers.arrayElement(["S", "M", "L", "XL"]),
    price: parseInt(faker.commerce.price(), 10),
    isNew: faker.datatype.boolean(),
    tags: faker.lorem.words(faker.number.int({ min: 0, max: 3})).split(' '),
    title: faker.commerce.productName(),
    stock: faker.number.int({ min: 10, max: 100 }),
    categoryId: faker.string.uuid(),
  });
}

console.log(products);
// This code generates 50 fake product entries using the Faker.js library and adds them to the products array.

const product = products[0];
updateProduct(product.id, {
  title: 'New Product',
  stock: 80,
  price: 200
});

findProducts({
  stock: 10,
  color: 'red',
  createdAt: new Date('2023-01-01'),
  isNew: true,
})