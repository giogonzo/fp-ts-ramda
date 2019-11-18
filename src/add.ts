import { fieldNumber } from 'fp-ts/lib/Field';
import { Endomorphism } from 'fp-ts/lib/function';

function _add(x: number, y: number): number {
  return fieldNumber.add(x, y);
}

/**
 * Same as [R.add](https://ramdajs.com/docs/#add). Adds two values
 *
 * @since 0.1.8
 */

export function add(x: number): Endomorphism<number>;
export function add(x: number, y: number): number;
export function add(x: number, y?: number): Endomorphism<number> | number {
  if (y === undefined) {
    return y => _add(x, y);
  } else {
    return _add(x, y);
  }
}
