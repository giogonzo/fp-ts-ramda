import { array } from 'fp-ts/lib/Array';

function _xprod<A, B>(as: Array<A>, bs: Array<B>): Array<[A, B]> {
  return array.chain(as, a => bs.map(b => [a, b]));
}

/**
 * Same as [R.xprod](https://ramdajs.com/docs/#xprod)
 *
 * @since 0.1.1
 */
export function xprod<A>(as: Array<A>): <B>(bs: Array<B>) => Array<[A, B]>;
export function xprod<A, B>(as: Array<A>, bs: Array<B>): Array<[A, B]>;
export function xprod<A, B>(as: Array<A>, obs?: Array<B>) {
  if (obs === undefined) {
    return (bs: Array<B>) => _xprod(as, bs);
  } else {
    return _xprod(as, obs);
  }
}
