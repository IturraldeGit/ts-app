/* const printMessagePeriodically = () => {
  const str = 'This is a message that will be printed every 4 seconds.';
  setInterval(() => {
    console.log(str);
  }, 4000);
}

printMessagePeriodically(); */

const fail = (message: string) => {
  throw new Error(message);
}

const example = (input: unknown) => {
  if (typeof input === 'string') {
    return 'This is a string';
  } else if (Array.isArray(input)) {
    return 'This is an array';
  }
  return fail('Not a matching type');
}

console.log(example('Hello')); // This is a string
console.log(example([1, 2, 3])); // This is an array
console.log(example(42)); // This will throw an error: Not a matching type
console.log(example('Hello after the error')); // This line will not be executed because the previous call to example will throw an error.
