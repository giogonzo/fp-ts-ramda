import { Predicate } from 'fp-ts/lib/function';
import { monoidAnyFoldMap } from './shared/monoidAnyFoldMap';

function _any<T>(predicate: Predicate<T>, as: Array<T>): boolean {
  return monoidAnyFoldMap(predicate)(as);
}

/**
 * Similar to [R.any](https://ramdajs.com/docs/#any). Returns true if at least one of the elements of the list
 * match the predicate, false otherwise. Does not dispatch to the any method of the second argument if present. Does not
 * act as a transducer if a transformer is given in the list position.
 *
 * @since 0.1.6
 */

export function any<T>(predicate: Predicate<T>): Predicate<Array<T>>;
export function any<T>(predicate: Predicate<T>, as: Array<T>): boolean;
export function any<T>(predicate: Predicate<T>, as?: Array<T>): Predicate<Array<T>> | boolean {
  if (as === undefined) {
    return as => _any(predicate, as);
  } else {
    return _any(predicate, as);
  }
}
