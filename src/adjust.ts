import { Endomorphism } from 'fp-ts/lib/function';
import { modifyAt } from 'fp-ts/lib/Array';
import { pipe } from 'fp-ts/lib/pipeable';
import { getOrElse } from 'fp-ts/lib/Option';

function _adjust<A>(i: number, f: Endomorphism<A>, as: Array<A>): Array<A> {
  return pipe(
    modifyAt(i >= 0 ? i : as.length + i, f)(as),
    getOrElse(() => as)
  );
}

/**
 * Same as https://ramdajs.com/docs/#adjust
 *
 * @since 0.1.1
 */
export function adjust(
  i: number
): {
  <A>(f: Endomorphism<A>, as: Array<A>): Array<A>;
  <A>(f: Endomorphism<A>): (as: Array<A>) => Array<A>;
};
export function adjust<A>(i: number, f: Endomorphism<A>): (as: Array<A>) => Array<A>;
export function adjust<A>(i: number, f: Endomorphism<A>, as: Array<A>): Array<A>;
export function adjust<A>(i: number, f?: Endomorphism<A>, as?: Array<A>): any {
  if (f === undefined) {
    return function(f: Endomorphism<A>, as?: Array<A>) {
      if (as === undefined) {
        return function(as: Array<A>) {
          return _adjust(i, f, as);
        };
      } else {
        return _adjust(i, f, as);
      }
    };
  } else if (as === undefined) {
    return function(as: Array<A>) {
      return _adjust(i, f, as);
    };
  } else {
    return _adjust(i, f, as);
  }
}
