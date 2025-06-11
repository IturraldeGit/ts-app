import { faker }  from '@faker-js/faker';

import { addProduct, products } from "./products/product.service";

for (let i = 0; i < 50; i++) {
  addProduct({
    id: faker.string.uuid(),
    description: faker.commerce.productDescription(),
    image: faker.image.url(),
    color: faker.color.human(),
    size: faker.helpers.arrayElement(["S", "M", "L", "XL"]),
    price: parseInt(faker.commerce.price(), 10),
    isNew: faker.datatype.boolean(),
    tags: faker.lorem.words(faker.number.int({ min: 0, max: 3})).split(' '),
    title: faker.commerce.productName(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    stock: faker.number.int({ min: 10, max: 100 }),
    category: {
      id: faker.string.uuid(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
      name: faker.commerce.department()
    }
  });
}

console.log(products);
// This code generates 50 fake product entries using the Faker.js library and adds them to the products array.

