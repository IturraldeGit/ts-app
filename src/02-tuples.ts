const prices: (number | string)[] = [1,3,2,2,2,'as'];

prices.push(1);
prices.push('1');

let user: [string, number, boolean] = ['daniel', 28, true];
user = ['juan', 30, false];

const [userName, age] = user;
console.log(userName);
console.log(age);
