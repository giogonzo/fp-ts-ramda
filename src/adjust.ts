import { Endomorphism } from 'fp-ts/lib/function';
import { modifyAt } from 'fp-ts/lib/Array';
import { curry } from './helpers/curry';

function _adjust<A>(i: number, f: Endomorphism<A>, as: Array<A>): Array<A> {
  return modifyAt(i >= 0 ? i : as.length + 1, f)(as).getOrElse(as);
}

export function adjust(
  i: number
): {
  <A>(f: Endomorphism<A>, as: Array<A>): Array<A>;
  <A>(f: Endomorphism<A>): (as: Array<A>) => Array<A>;
};
export function adjust<A>(i: number, f: Endomorphism<A>): (as: Array<A>) => Array<A>;
export function adjust<A>(i: number, f: Endomorphism<A>, as: Array<A>): Array<A>;
export function adjust(this: any, ...args: any): any {
  return curry(_adjust).apply(this, args);
}
