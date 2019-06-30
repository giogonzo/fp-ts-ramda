import { takeRight } from 'fp-ts/lib/Array';

export function takeLast(i: number): <A>(as: Array<A>) => Array<A>;
export function takeLast<A>(i: number, as: Array<A>): Array<A>;
export function takeLast<A>(i: number, as?: Array<A>) {
  const f = takeRight(i);
  if (as === undefined) {
    return f;
  } else {
    return f(as);
  }
}
