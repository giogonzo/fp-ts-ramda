import { Predicate } from 'fp-ts/lib/function';
/**
 * Similar to [R.anyPass](https://ramdajs.com/docs/#anyPass). Returns a curried unary
 * predicate rather than a function whose arity matches that of the highest-arity predicate supplied.
 *
 * @since 0.1.5
 */
export declare function anyPass<T>(predicates: Array<Predicate<T>>): Predicate<T>;
export declare function anyPass<T>(predicates: Array<Predicate<T>>, val: T): boolean;
