import { toUnfoldable } from "fp-ts/lib/Record";
import { array } from "fp-ts/lib/Array";

export function toPairs<K extends string, A>(r: Record<K, A>): Array<[K, A]> {
  return toUnfoldable(array)(r);
}
