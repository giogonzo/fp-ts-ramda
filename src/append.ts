import { snoc } from 'fp-ts/lib/Array';

/**
 * Same as https://ramdajs.com/docs/#append
 *
 * @since 0.1.1
 */
export function append<A>(a: A): (as: Array<A>) => Array<A>;
export function append<A>(a: A, as: Array<A>): Array<A>;
export function append<A>(a: A, as?: Array<A>): any {
  if (as === undefined) {
    return function(as: Array<A>) {
      return snoc(as, a);
    };
  } else {
    return snoc(as, a);
  }
}
