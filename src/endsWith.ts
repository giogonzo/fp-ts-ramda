import { getEq } from 'fp-ts/lib/Array';
import { Eq } from 'fp-ts/lib/Eq';
import { takeLast } from './takeLast';

function _endsWith<A>(E: Eq<A>): (suffix: Array<A>, as: Array<A>) => boolean {
  const eqArray = getEq(E);
  return (suffix, as) => eqArray.equals(suffix, takeLast(suffix.length, as));
}

/**
 * Similar to [R.edsWith](https://ramdajs.com/docs/#endsWith), but doesn't work with `string`s
 *
 * @since 0.1.2
 */
export function endsWith<A>(
  E: Eq<A>
): {
  (suffix: Array<A>): (as: Array<A>) => boolean;
  (suffix: Array<A>, as: Array<A>): boolean;
};

export function endsWith<A>(E: Eq<A>): (suffix: Array<A>, oas?: Array<A>) => any {
  const endsWithE = _endsWith(E);
  return (suffix, oas) => {
    if (oas === undefined) {
      return (as: Array<A>) => endsWithE(suffix, as);
    } else {
      return endsWithE(suffix, oas);
    }
  };
}
