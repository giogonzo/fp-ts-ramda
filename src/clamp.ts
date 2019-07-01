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
  return (low: A, ...args: [A?, A?]) => {
    if (args.length === 0) {
      return (hi: A, ...args: [A?]) => {
        if (args.length === 0) {
          return (x: A) => {
            return c(low, hi)(x);
          };
        }
        return c(low, hi)(args[0]!);
      };
    }
    if (args.length === 1) {
      return (x: A) => {
        return c(low, args[1]!)(x);
      };
    }
    return c(low, args[0]!)(args[1]!);
  };
}
