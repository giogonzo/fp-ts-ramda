import * as FR from '../../src';
import * as R from 'ramda';

// fromPairs

FR.fromPairs([]); // $ExpectType Record<string, unknown>

R.fromPairs([['a', 1], ['b', 2]]); // $ExpectType { [index: string]: number; }
FR.fromPairs([['a', 1], ['b', 2]]); // $ExpectType Record<"a" | "b", number>

// toPairs

R.toPairs({}); // $ExpectType [string, unknown][]
FR.toPairs({}); // $ExpectType [never, never][]

R.toPairs({ a: 1, b: false }); // $ExpectType [string, number | boolean][]
FR.toPairs({ a: 1, b: false }); // $ExpectType ["a" | "b", number | boolean][]

// xprod

FR.xprod([], []); // $ExpectType [never, never][]
FR.xprod(['a', 1], [true, new Date()]); // $ExpectType [string | number, boolean | Date][]
FR.xprod(['a', 1])([true, new Date()]); // $ExpectType [string | number, boolean | Date][]

// adjust

FR.adjust(1, a => a + a, ['a']); // $ExpectType string[]

R.adjust(1)(a => a + a, ['a']); // $ExpectError
FR.adjust(1)(a => a + a, ['a']); // $ExpectType string[]

FR.adjust(1, (a: string) => a + a)(['a']); // $ExpectType string[]

R.adjust(1)((a: string) => a + a)(['a']); // $ExpectError
FR.adjust(1)((a: string) => a + a)(['a']); // $ExpectType string[]

// always

FR.always(new Date()); // $ExpectType Lazy<Date>

// and

FR.and(false, true); // $ExpectType boolean
FR.and(false); // $ExpectType (b: boolean) => boolean

R.and(0, true); // return type is `boolean`, while you get `0` at runtime
FR.and(0, true); // $ExpectError

// append

FR.append(true, [false]); // $ExpectType boolean[]

R.append(true)([1]); // doesn't error
FR.append(true)([1]); // $ExpectError

// takeLast

FR.takeLast(1); // $ExpectType <A>(as: A[]) => A[]
