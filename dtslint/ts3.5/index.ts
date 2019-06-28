import * as FR from '../../src';

FR.fromPairs([]); // $ExpectType Record<string, unknown>
FR.fromPairs([['a', 1], ['b', 2]]); // $ExpectType Record<"a" | "b", number>

FR.toPairs({}); // $ExpectType [never, never][]
FR.toPairs({ a: 1, b: false }); // $ExpectType ["a" | "b", number | boolean][]

FR.xprod([], []); // $ExpectType [never, never][]
FR.xprod(['a', 1], [true, new Date()]); // $ExpectType [string | number, boolean | Date][]
FR.xprod(['a', 1])([true, new Date()]); // $ExpectType [string | number, boolean | Date][]

FR.adjust(1, a => a + a, ['a']); // $ExpectType string[]
FR.adjust(1)(a => a + a, ['a']); // $ExpectType string[]
FR.adjust(1, (a: string) => a + a)(['a']); // $ExpectType string[]
FR.adjust(1)((a: string) => a + a)(['a']); // $ExpectType string[]
