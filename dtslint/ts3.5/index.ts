import * as FR from "../../src";

FR.fromPairs([]); // $ExpectType Record<string, unknown>
FR.fromPairs([["a", 1], ["b", 2]]); // $ExpectType Record<"a" | "b", number>
