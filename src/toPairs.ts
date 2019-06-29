import { toUnfoldable } from 'fp-ts/lib/Record';
import { array } from 'fp-ts/lib/Array';

export const toPairs = toUnfoldable(array);
