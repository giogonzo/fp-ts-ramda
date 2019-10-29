import { Predicate } from 'fp-ts/lib/function';
/**
 * Similar to [R.allPass](https://ramdajs.com/docs/#allPass). Returns a curried unary
 * predicate rather than a function whose arity matches that of the highest-arity predicate supplied.
 *
 * @since 0.1.4
 */
export declare function allPass<T>(predicates: Array<Predicate<T>>): Predicate<T>;
export declare function allPass<T>(predicates: Array<Predicate<T>>, val: T): boolean;
