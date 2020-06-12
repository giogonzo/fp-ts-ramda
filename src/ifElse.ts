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
export function ifElse<A, R>(
  predicate: (a: A) => boolean,
  whenTrue?: (a: A) => R,
  whenFalse?: (a: A) => R,
  a?: A
): {
  (whenTrue: (a: A) => R): {
    (whenFalse: (a: A) => R): (x: A) => R;
    (whenFalse: (a: A) => R, x: A): R;
  };
  (whenTrue: (a: A) => R, whenFalse: (a: A) => R): (x: A) => R;
  (whenTrue: (a: A) => R, whenFalse: (a: A) => R, x: A): R;
};
export function ifElse<A, R>(
  predicate: (a: A) => boolean
): (whenTrue: (a: A) => R, whenFalse?: (a: A) => R, x?: A) => any {
  return (whenTrue: (a: A) => R, ...args: [((a: A) => R)?, A?]) => {
    if (args.length === 0) {
      return (whenFalse: (a: A) => R, ...args: [A?]) => {
        if (args.length === 0) {
          return (x: A) => {
            return _ifElse(predicate, whenTrue, whenFalse, x);
          };
        }
        return _ifElse(predicate, whenTrue, whenFalse, args[0]!);
      };
    }
    if (args.length === 1) {
      return (x: A) => {
        return _ifElse(predicate, whenTrue, args[0]!, x);
      };
    }
    return _ifElse(predicate, whenTrue, args[0]!, args[1]!);
  };
}
