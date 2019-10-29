import { foldMap } from 'fp-ts/lib/Array';
import { monoidAny } from 'fp-ts/lib/Monoid';
export const monoidAnyFoldMap = foldMap(monoidAny);
