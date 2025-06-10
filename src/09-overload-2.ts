export function parseStr(input: string): string[];
export function parseStr(input: string[]): string;
export function parseStr(input: number): boolean;

/* export function parseStr(input: string | string[]): string | string[] {
  if (typeof input === 'string') {
    return input.split('');
  }
  return input.join('');
} */

export function parseStr(input: unknown): unknown {
  if (typeof input === 'string') {
    return input.split(''); // string[]
  } else if (Array.isArray(input)) {
    return input.join(''); // string
  } else if (typeof input === 'number') {
    return true; // boolean
  }
}

const rtaArray = parseStr('Daniel');
const rtaString = parseStr(['D', 'a', 'n', 'i', 'e', 'l']);
const rtaBoolean = parseStr(12);

console.log(rtaArray);
console.log(rtaString);
console.log(rtaBoolean);

const rtaArray2 = rtaArray.reverse();
const rtaString2 = rtaString.toLowerCase();

console.log(rtaArray2);
console.log(rtaString2);