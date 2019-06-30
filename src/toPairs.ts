import { toUnfoldable } from 'fp-ts/lib/Record';
import { array } from 'fp-ts/lib/Array';

/**
 * Same as https://ramdajs.com/docs/#toPairs
 *
 * @since 0.1.1
 */
export const toPairs = toUnfoldable(array);
