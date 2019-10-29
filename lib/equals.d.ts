import { Eq } from 'fp-ts/lib/Eq';
import { Predicate } from 'fp-ts/lib/function';
/**
 * Similar to [R.equals](https://ramdajs.com/docs/#equals), but:
 * - Requires an explicit `Eq<A>` instance
 * - Does not directly handle cyclical data structures, relies on `Eq<A> instance to determine equality
 * - Does not dispatch to the `equals` method of both arguments if present
 *
 * @since 0.1.7
 */
export declare function equals<A>(E: Eq<A>): {
    (x: A, y: A): boolean;
    (x: A): Predicate<A>;
};
