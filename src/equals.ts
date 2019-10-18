import { Eq } from 'fp-ts/lib/Eq';

/**
 * Similar to [R.equals](https://ramdajs.com/docs/#equals), but:
 * - Requires an explicit `Eq<A>` instance
 * - Does not directly handle cyclical data structures, relies on `Eq<A> instance to determine equality
 * - Does not dispatch to the `equals` method of both arguments if present
 *
 * @since 0.1.7
 */

export function equals<A>(
  E: Eq<A>
): {
  <B extends A, C extends A>(x: B, y: C): boolean;
  <B extends A>(x: B): <C extends A>(y: C) => boolean;
};
export function equals<A, B extends A>(E: Eq<A>, x: B): <C extends A>(y: C) => boolean;
export function equals<A, B extends A, C extends A>(E: Eq<A>, x: B, y: C): boolean;
export function equals<A, B extends A, C extends A>(E: Eq<A>, x?: B, y?: C): any {
  if (x === undefined) {
    return <B extends A, C extends A>(x: B, y?: C) => {
      if (y === undefined) {
        return <C extends A>(y: C) => E.equals(x, y);
      } else {
        return E.equals(x, y);
      }
    };
  } else if (y === undefined) {
    return <C extends A>(y: C) => E.equals(x, y);
  } else {
    return E.equals(x, y);
  }
}
