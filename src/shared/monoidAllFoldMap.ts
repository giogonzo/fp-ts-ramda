import { foldMap } from 'fp-ts/lib/Array';
import { monoidAll } from 'fp-ts/lib/Monoid';

/**
 * @internal
 */
export const monoidAllFoldMap = foldMap(monoidAll);
