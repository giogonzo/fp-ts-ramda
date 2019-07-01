import { semigroupAll } from 'fp-ts/lib/Semigroup';

const concat = semigroupAll.concat;

/**
 * Similar to [R.and](https://ramdajs.com/docs/#and) but accepts only `boolean` values, thus will not work considering
 * "truthy/falsy"ness.
 *
 * @since 0.1.1
 */
export function and(a: boolean): (b: boolean) => boolean;
export function and(a: boolean, b: boolean): boolean;
export function and(a: boolean, ob?: boolean) {
  if (ob === undefined) {
    return (b: boolean) => concat(a, b);
  } else {
    return concat(a, ob);
  }
}
