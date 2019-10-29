import { Predicate } from 'fp-ts/lib/function';
/**
 * Similar to [R.any](https://ramdajs.com/docs/#any). Returns true if at least one of the elements of the list
 * match the predicate, false otherwise. Does not dispatch to the any method of the second argument if present. Does not
 * act as a transducer if a transformer is given in the list position.
 *
 * @since 0.1.6
 */
export declare function any<T>(predicate: Predicate<T>): Predicate<Array<T>>;
export declare function any<T>(predicate: Predicate<T>, as: Array<T>): boolean;
