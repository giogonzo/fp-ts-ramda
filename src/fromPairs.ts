import { fromFoldableMap } from "fp-ts/lib/Record";
import { getLastSemigroup } from "fp-ts/lib/Semigroup";
import { array } from "fp-ts/lib/Array";
import { identity } from "fp-ts/lib/function";

export function fromPairs<A, K extends string>(
  as: Array<[K, A]>
): Record<K, A> {
  return fromFoldableMap(getLastSemigroup<A>(), array)(as, identity);
}
