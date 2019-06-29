import { semigroupAll } from 'fp-ts/lib/Semigroup';

const concat = semigroupAll.concat;

export function and(a: boolean): (b: boolean) => boolean;
export function and(a: boolean, b: boolean): boolean;
export function and(a: boolean, b?: boolean) {
  if (b === undefined) {
    return function(b: boolean) {
      return concat(a, b);
    };
  } else {
    return concat(a, b);
  }
}
