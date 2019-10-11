import { foldMap } from 'fp-ts/lib/Array';
import { Predicate } from 'fp-ts/lib/function';
import { monoidAny } from 'fp-ts/lib/Monoid';
import { pipe } from 'fp-ts/lib/pipeable';

const monoidAnyFoldMap = foldMap(monoidAny);

function _anyPass<T>(predicates: Array<Predicate<T>>, val: T): boolean {
  return pipe(
    predicates,
    monoidAnyFoldMap(predicate => predicate(val))
  );
}

/**
 * Similar to [R.anyPass](https://ramdajs.com/docs/#anyPass). Returns a curried unary
 * predicate rather than a function whose arity matches that of the highest-arity predicate supplied.
 *
 * @since 0.1.5
 */

export function anyPass<T>(predicates: Array<Predicate<T>>): Predicate<T>;
export function anyPass<T>(predicates: Array<Predicate<T>>, val: T): boolean;
export function anyPass<T>(predicates: Array<Predicate<T>>, val?: T): Predicate<T> | boolean {
  return val === undefined ?  val => _anyPass(predicates, val) : _anyPass(predicates, val);
}
