import * as fc from 'fast-check';
import { getEq as getArrayEq } from 'fp-ts/lib/Array';
import { eqBoolean, fromEquals, getStructEq, strictEqual } from 'fp-ts/lib/Eq';
import { Ord, ordDate, ordNumber, ordString } from 'fp-ts/lib/Ord';
import { getEq as getRecordEq } from 'fp-ts/lib/Record';
import * as R from 'ramda';
import * as FR from '../src';

function JSONEqual(a: unknown, b: unknown): boolean {
  return JSON.stringify(a) === JSON.stringify(b);
}

// temporary helper until https://github.com/dubzzz/fast-check/pull/436 is released
function fcAnything(): fc.Arbitrary<unknown> {
  return fc.anything();
}

describe('fp-ts-ramda', () => {
  it('fromPairs', () => {
    fc.assert(
      fc.property(fc.array(fc.tuple(fc.string(), fcAnything())), as =>
        getRecordEq(fromEquals(JSONEqual)).equals(FR.fromPairs(as), R.fromPairs(as))
      )
    );
  });

  it('toPairs', () => {
    fc.assert(
      fc.property(fc.object(), r => {
        const as1 = FR.toPairs(r);
        as1.sort();
        const as2 = R.toPairs(r);
        as2.sort();
        return getArrayEq(fromEquals(JSONEqual)).equals(as1, as2);
      })
    );
  });

  it('xprod', () => {
    fc.assert(
      fc.property(fc.array(fcAnything()), fc.array(fcAnything()), (as, bs) =>
        getArrayEq(fromEquals(JSONEqual)).equals(R.xprod(as, bs), FR.xprod(as, bs))
      )
    );
  });

  it('adjust', () => {
    const f = (n: number) => n * 2;
    fc.assert(
      fc.property(fc.integer(), fc.array(fc.integer()), (i, as) =>
        getArrayEq(fromEquals(strictEqual)).equals(R.adjust(i, f, as), FR.adjust(i, f, as))
      )
    );
  });

  it('assoc', () => {
    const ov = 42;
    fc.assert(
      fc.property(fc.string(), fc.integer(), (k, nv) => {
        const obj = { k: ov };
        return getStructEq({ k: fromEquals(strictEqual) }).equals(R.assoc(k, nv, obj), FR.assoc(k, nv, obj));
      })
    );
    fc.assert(
      fc.property(fc.string(), fc.integer(), (k, nv) => {
        const obj = { k: ov };
        const newObj = FR.assoc(k, nv, obj);
        return newObj !== obj; // shallow copy
      })
    );
  });

  it('always', () => {
    fc.assert(fc.property(fcAnything(), v => JSONEqual(R.always(v)(), FR.always(v)())));
  });

  it('and', () => {
    fc.assert(fc.property(fc.boolean(), fc.boolean(), (a, b) => R.and(a, b) === FR.and(a, b)));
  });

  it('append', () => {
    fc.assert(
      fc.property(fc.array(fcAnything()), fcAnything(), (as, a) =>
        getArrayEq(fromEquals(JSONEqual)).equals(R.append(a, as), FR.append(a, as))
      )
    );
  });

  it('takeLast', () => {
    fc.assert(
      fc.property(fc.array(fcAnything()), fc.nat(), (as, a) =>
        getArrayEq(fromEquals(JSONEqual)).equals(R.takeLast(a, as), FR.takeLast(a, as))
      )
    );
  });

  it('endsWith', () => {
    const endsWith = FR.endsWith(fromEquals(JSONEqual));
    fc.assert(
      fc.property(
        fc.array(fcAnything()),
        fc.array(fcAnything()),
        (suffix, as) =>
          R.endsWith(suffix, as) === endsWith(suffix, as) && R.endsWith(suffix)(as) === endsWith(suffix)(as)
      )
    );
  });

  it('clamp', () => {
    fc.assert(
      fc.property(fc.integer(), fc.integer(), fc.integer(), (low, hi, value) => {
        try {
          // R.clamp throws if low > hi
          return JSONEqual(R.clamp(low, hi, value), FR.clamp(ordNumber)(low, hi, value));
        } catch (_) {
          return true;
        }
      })
    );
    fc.assert(
      fc.property(fc.string(), fc.string(), fc.string(), (low, hi, value) => {
        try {
          // R.clamp throws if low > hi
          return JSONEqual(R.clamp(low, hi, value), FR.clamp(ordString)(low, hi, value));
        } catch (_) {
          return true;
        }
      })
    );
    const dateArb = () => fc.nat().map(time => new Date(time));
    fc.assert(
      fc.property(dateArb(), dateArb(), dateArb(), (low, hi, value) => {
        try {
          // R.clamp throws if low > hi
          return JSONEqual(R.clamp(low, hi, value), FR.clamp(ordDate)(low, hi, value));
        } catch (_) {
          return true;
        }
      })
    );
    const ordUndefined: Ord<undefined> = {
      equals: (a, b) => a === b,
      compare: () => 0
    };
    expect(FR.clamp(ordUndefined)(undefined, undefined, undefined)).toBe(R.clamp(undefined, undefined, undefined));
  });

  it('defaultTo', () => {
    fc.assert(
      fc.property(
        fcAnything().filter(v => !isNaN(v as any)),
        fcAnything().filter(v => v != null && !isNaN(v as any)),
        (value, d) => R.defaultTo(d, value) === FR.defaultTo(d, value)
      )
    );
  });

  it('prop', () => {
    fc.assert(
      fc.property(
        fc
          .object()
          .filter(obj => Object.keys(obj).length > 0)
          .chain(obj =>
            fc.oneof(...Object.keys(obj).map(fc.constant)).map(key => ({
              key: key as string,
              obj: obj as Record<string, any>
            }))
          ),
        ({ obj, key }) => {
          return JSONEqual(R.prop(key, obj), FR.prop(key, obj)) && JSONEqual(R.prop(key)(obj), FR.prop(key)(obj));
        }
      )
    );
  });
  it('allPass', () => {
    const odd = (n: number) => n % 2 !== 0;
    const lt20 = (n: number) => n < 20;
    const gt5 = (n: number) => n > 5;
    fc.assert(
      fc.property(
        fc.integer(),
        num =>
          eqBoolean.equals(R.allPass([odd, lt20, gt5])(num), FR.allPass([odd, lt20, gt5], num)) &&
          eqBoolean.equals(R.allPass([])(num), FR.allPass([], num))
      ),
      { examples: [[0]] }
    );
  });
  it('anyPass', () => {
    const odd = (n: number) => n % 2 !== 0;
    const lt20 = (n: number) => n < 20;
    const gt5 = (n: number) => n > 5;
    fc.assert(
      fc.property(
        fc.integer(),
        num =>
          eqBoolean.equals(R.anyPass([odd, lt20, gt5])(num), FR.anyPass([odd, lt20, gt5], num)) &&
          eqBoolean.equals(R.anyPass([])(num), FR.anyPass([], num))
      ),
      { examples: [[0]] }
    );
  });
});
