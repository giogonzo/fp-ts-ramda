import { comprehension } from "fp-ts/lib/Array";
import { constTrue, tuple } from "fp-ts/lib/function";

export function xprod<A, B>(as: Array<A>, bs: Array<B>): Array<[A, B]> {
  return comprehension([as, bs], constTrue, tuple);
}
