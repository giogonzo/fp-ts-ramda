import { toUnfoldable } from 'fp-ts/lib/Record';
import { array } from 'fp-ts/lib/Array';

/**
 * Same as [R.toPairs](https://ramdajs.com/docs/#toPairs)
 *
 * @since 0.1.1
 */
export const toPairs: <K extends string, A>(r: Record<K, A>) => [K, A][] = toUnfoldable(array);
