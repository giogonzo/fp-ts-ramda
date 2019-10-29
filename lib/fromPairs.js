import { array } from 'fp-ts/lib/Array';
import { fromFoldable } from 'fp-ts/lib/Record';
import { getLastSemigroup } from 'fp-ts/lib/Semigroup';
/**
 * Same as [R.fromPairs](https://ramdajs.com/docs/#fromPairs)
 *
 * @since 0.1.1
 */
export const fromPairs = fromFoldable(getLastSemigroup(), array);
