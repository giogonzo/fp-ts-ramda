import { foldMap } from 'fp-ts/lib/Array';
import { monoidAll } from 'fp-ts/lib/Monoid';
export const monoidAllFoldMap = foldMap(monoidAll);
