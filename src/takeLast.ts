import { takeRight } from 'fp-ts/lib/Array';

/**
 * Similar to https://ramdajs.com/docs/#takeLast, but doesn't work with `string`s
 *
 * @since 0.1.2
 */
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
