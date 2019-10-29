import { Ord } from 'fp-ts/lib/Ord';
/**
 * Similar to [R.clamp](https://ramdajs.com/docs/#clamp), but:
 * - requires an explicit `Ord<A>` instance, thus it supports any `A` not just "JS ordered types"
 * - doesn't throw if `min > max` (returns `min` instead)
 *
 * @since 0.1.2
 */
export declare function clamp<A>(O: Ord<A>): {
    (low: A): {
        (hi: A): (x: A) => A;
        (hi: A, x: A): A;
    };
    (low: A, hi: A): (x: A) => A;
    (low: A, hi: A, x: A): A;
};
