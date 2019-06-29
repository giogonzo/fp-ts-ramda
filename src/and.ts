import { semigroupAll } from 'fp-ts/lib/Semigroup';
import { curry } from './helpers/curry';

const _and = semigroupAll.concat;

export function and(a: boolean): (b: boolean) => boolean;
export function and(a: boolean, b: boolean): boolean;
export function and(this: any, ...args: any): any {
  return curry(_and).apply(this, args);
}
