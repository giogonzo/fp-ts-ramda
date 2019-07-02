import { modifyAt } from 'fp-ts/lib/Array';
import { Endomorphism } from 'fp-ts/lib/function';
import { getOrElse } from 'fp-ts/lib/Option';
import { pipe } from 'fp-ts/lib/pipeable';

function _adjust<A>(i: number, f: Endomorphism<A>, as: Array<A>): Array<A> {
  return pipe(
    modifyAt(i >= 0 ? i : as.length + i, f)(as),
    getOrElse(() => as)
  );
}

/**
 * Same as [R.adjust](https://ramdajs.com/docs/#adjust)
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
    return (f: Endomorphism<A>, as?: Array<A>) => {
      if (as === undefined) {
        return (as: Array<A>) => _adjust(i, f, as);
      } else {
        return _adjust(i, f, as);
      }
    };
  } else if (as === undefined) {
    return (as: Array<A>) => _adjust(i, f, as);
  } else {
    return _adjust(i, f, as);
  }
}
