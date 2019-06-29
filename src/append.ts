import { snoc } from 'fp-ts/lib/Array';
import { curry } from './helpers/curry';

function _append<A>(a: A, as: Array<A>): Array<A> {
  return snoc(as, a);
}

export function append<A>(a: A): (as: Array<A>) => Array<A>;
export function append<A>(a: A, as: Array<A>): Array<A>;
export function append(this: any, ...args: any): any {
  return curry(_append).apply(this, args);
}
