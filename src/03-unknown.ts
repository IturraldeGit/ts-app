let anyVar: any ;
anyVar = true;
anyVar = undefined;
anyVar = null;
anyVar = 1;
anyVar = '1';
anyVar = [];
anyVar = {};

/* let isNew : boolean = anyVar; // Even though anyVar was assigned as an object, it can still be assigned to a boolean variable without error.
anyVar.doSomething(); // This will not throw an error, but it will fail at runtime if doSomething is not a function on the object assigned to anyVar.
anyVar.toUpperCase(); // This will not throw an error, but it will fail at runtime if anyVar is not a string. */

let unknownVar: unknown;
unknownVar = true;
unknownVar = undefined;
unknownVar = null;
unknownVar = 1;
unknownVar = '1';
unknownVar = [];
unknownVar = {};

/* unknownVar.doSomething(); // This will throw an error because unknownVar is of type unknown, and TypeScript does not allow calling methods on it without a type assertion. */
if (typeof unknownVar === 'string') {
  unknownVar.toUpperCase(); // This is safe because we checked that unknownVar is a string.
}

const parse = (str: string | unknown): unknown => {
  if (typeof str === 'string') {
    return JSON.parse(str)
  } else {
    return ('Input must be a string');
  }
}

console.log(parse('{"name": "daniel"}'));
console.log(parse(1));
