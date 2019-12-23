import { foldMap } from 'fp-ts/lib/Array';
import { monoidAny } from 'fp-ts/lib/Monoid';

/**
 * @internal
 */
export const monoidAnyFoldMap = foldMap(monoidAny);
