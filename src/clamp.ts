import { clamp as _clamp, Ord } from 'fp-ts/lib/Ord';

/**
 * Similar to [R.clamp](https://ramdajs.com/docs/#clamp), but:
 * - requires an explicit `Ord<A>` instance, thus it supports any `A` not just "JS ordered types"
 * - doesn't throw if `min > max` (returns `min` instead)
 *
 * @since 0.1.2
 */
export function clamp<A>(
  O: Ord<A>
): {
  (low: A): {
    (hi: A): (x: A) => A;
    (hi: A, x: A): A;
  };
  (low: A, hi: A): (x: A) => A;
  (low: A, hi: A, x: A): A;
};
export function clamp<A>(O: Ord<A>): (low: A, hi?: A, x?: A) => any {
  const c = _clamp(O);
  return (low: A, hi?: A, x?: A) => {
    if (hi === undefined) {
      return (hi: A, x?: A) => {
        if (x === undefined) {
          return (x: A) => {
            return c(low, hi)(x);
          };
        }
        return c(low, hi)(x);
      };
    }
    if (x === undefined) {
      return (x: A) => {
        return c(low, hi)(x);
      };
    }
    return c(low, hi)(x);
  };
}
