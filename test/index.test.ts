import * as R from "ramda";
import * as fc from "fast-check";
import * as FR from "../src";
import { getSetoid as getArraySetoid } from "fp-ts/lib/Array";
import { fromEquals } from "fp-ts/lib/Eq";
import { getSetoid as getRecordSetoid } from "fp-ts/lib/Record";

function JSONEqual(a: unknown, b: unknown): boolean {
  return JSON.stringify(a) === JSON.stringify(b);
}

describe("fp-ts-ramda", () => {
  it("fromPairs", () => {
    fc.assert(
      fc.property(fc.array(fc.tuple(fc.string(), fc.anything())), as =>
        getRecordSetoid(fromEquals(JSONEqual)).equals(
          FR.fromPairs(as),
          R.fromPairs(as)
        )
      )
    );
  });

  it("toPairs", () => {
    fc.assert(
      fc.property(fc.object(), r => {
        const as1 = FR.toPairs(r);
        as1.sort();
        const as2 = R.toPairs(r);
        as2.sort();
        return getArraySetoid(fromEquals(JSONEqual)).equals(as1, as2);
      })
    );
  });

  it("xprod", () => {
    fc.assert(
      fc.property(fc.array(fc.anything()), fc.array(fc.anything()), (as, bs) =>
        getArraySetoid(fromEquals(JSONEqual)).equals(
          R.xprod(as, bs),
          FR.xprod(as, bs)
        )
      )
    );
  });
});
