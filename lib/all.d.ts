import { Predicate } from 'fp-ts/lib/function';
/**
 * Similar to [R.all](https://ramdajs.com/docs/#all). Returns true if all the elements of the list
 * match the predicate, false otherwise. Does not dispatch to the all method of the second argument if present. Does not
 * act as a transducer if a transformer is given in the list position.
 *
 * @since 0.1.6
 */
export declare function all<T>(predicate: Predicate<T>): Predicate<Array<T>>;
export declare function all<T>(predicate: Predicate<T>, as: Array<T>): boolean;
