import { array } from 'fp-ts/lib/Array';
import { toUnfoldable } from 'fp-ts/lib/Record';

/**
 * Same as [R.toPairs](https://ramdajs.com/docs/#toPairs)
 *
 * @since 0.1.1
 */
export const toPairs: <K extends string, A>(r: Record<K, A>) => Array<[K, A]> = toUnfoldable(array);
