import { fold } from 'fp-ts/lib/boolean';
import { pipe } from 'fp-ts/lib/pipeable';

function _ifElse<A, R>(predicate: (a: A) => boolean, whenTrue: (a: A) => R, whenFalse: (a: A) => R, a: A): R {
  return pipe(
    a,
    predicate,
    fold(
      () => whenTrue(a),
      () => whenFalse(a)
    )
  );
}

/**
 * Similar to [R.ifElse](https://ramdajs.com/docs/#ifElse). Creates a function that will
 * process either the onTrue or the onFalse function depending upon the result of the condition predicate..
 *
 * @since 0.1.7
 */

export function ifElse<A, R>(predicate: (a: A) => boolean, whenTrue: (a: A) => R, whenFalse: (a: A) => R): (a: A) => R;
export function ifElse<A, R>(predicate: (a: A) => boolean, whenTrue: (a: A) => R, whenFalse: (a: A) => R, a: A): R;
export function ifElse<A, R>(
  predicate: (a: A) => boolean,
  whenTrue: (a: A) => R,
  whenFalse: (a: A) => R,
  a?: A
): R | ((a: A) => R) {
  if (a === undefined) {
    return (a: A) => _ifElse(predicate, whenTrue, whenFalse, a);
  } else {
    return _ifElse(predicate, whenTrue, whenFalse, a);
  }
}
