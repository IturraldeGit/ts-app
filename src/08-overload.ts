// Daniel => ['D', 'a', 'n', 'i', 'e', 'l'] => string => string[]
// ['D', 'a', 'n', 'i', 'e', 'l'] => Daniel => string[] => string

export function parseStr(input: string | string[]): string | string[] {
  if (typeof input === 'string') {
    return input.split('');
  }
  return input.join('');
}

const rtaArray = parseStr('Daniel');
const rtaString = parseStr(['D', 'a', 'n', 'i', 'e', 'l']);

console.log(rtaArray);
console.log(rtaString);