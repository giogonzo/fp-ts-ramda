import { comprehension } from 'fp-ts/lib/Array';
import { constTrue, tuple } from 'fp-ts/lib/function';
import { curry } from './helpers/curry';

function _xprod<A, B>(as: Array<A>, bs: Array<B>): Array<[A, B]> {
  return comprehension([as, bs], constTrue, tuple);
}

export function xprod<A>(as: Array<A>): <B>(bs: Array<B>) => Array<[A, B]>;
export function xprod<A, B>(as: Array<A>, bs: Array<B>): Array<[A, B]>;
export function xprod(this: any, ...args: any): any {
  return curry(_xprod).apply(this, args);
}
