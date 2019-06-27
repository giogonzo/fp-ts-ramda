import * as R from "ramda";
import * as fc from "fast-check";
import * as FR from "../src";

describe("fp-ts-ramda", () => {
  it("fromPairs", () => {
    fc.assert(
      fc.property(
        fc.array(fc.tuple(fc.string(), fc.anything())),
        as =>
          JSON.stringify(FR.fromPairs(as)) === JSON.stringify(R.fromPairs(as))
      )
    );
  });
});
