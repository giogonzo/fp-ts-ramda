import * as R from 'ramda';
import * as fc from 'fast-check';
import * as FR from '../src';
import { getEq as getArrayEq } from 'fp-ts/lib/Array';
import { fromEquals, strictEqual } from 'fp-ts/lib/Eq';
import { getEq as getRecordEq } from 'fp-ts/lib/Record';

function JSONEqual(a: unknown, b: unknown): boolean {
  return JSON.stringify(a) === JSON.stringify(b);
}

describe('fp-ts-ramda', () => {
  it('fromPairs', () => {
    fc.assert(
      fc.property(fc.array(fc.tuple(fc.string(), fc.anything())), as =>
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
      fc.property(fc.array(fc.anything()), fc.array(fc.anything()), (as, bs) =>
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

  it('always', () => {
    fc.assert(fc.property(fc.anything(), v => JSONEqual(R.always(v)(), FR.always(v)())));
  });

  it('and', () => {
    fc.assert(fc.property(fc.boolean(), fc.boolean(), (a, b) => R.and(a, b) === FR.and(a, b)));
  });

  it('append', () => {
    fc.assert(
      fc.property(fc.array(fc.anything()), fc.anything(), (as, a) =>
        getArrayEq(fromEquals(JSONEqual)).equals(R.append(a, as), FR.append(a, as))
      )
    );
  });
});
