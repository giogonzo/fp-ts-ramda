import { takeRight } from 'fp-ts/lib/Array';

export function takeLast<A>(a: number): (as: Array<A>) => Array<A>;
export function takeLast<A>(a: number, as: Array<A>): Array<A>;
export function takeLast<A>(a: number, as?: Array<A>): any {
  if (as === undefined) {
    return function(as: Array<A>) {
      return takeRight(a)(as);
    };
  } else {
    return takeRight(a)(as);
  }
}
