import { snoc } from 'fp-ts/lib/Array';

/**
 * Same as [R.append](https://ramdajs.com/docs/#append)
 *
 * @since 0.1.1
 */
export function append<A>(a: A): (as: Array<A>) => Array<A>;
export function append<A>(a: A, as: Array<A>): Array<A>;
export function append<A>(a: A, as?: Array<A>): any {
  if (as === undefined) {
    return (as: Array<A>) => snoc(as, a);
  } else {
    return snoc(as, a);
  }
}
