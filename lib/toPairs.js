import { array } from 'fp-ts/lib/Array';
import { toUnfoldable } from 'fp-ts/lib/Record';
/**
 * Same as [R.toPairs](https://ramdajs.com/docs/#toPairs)
 *
 * @since 0.1.1
 */
export const toPairs = toUnfoldable(array);
