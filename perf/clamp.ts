import * as Benchmark from 'benchmark';
import * as F from '../src/';
import * as R from 'ramda';
import { ordNumber } from 'fp-ts/lib/Ord';

const suite = new Benchmark.Suite();

/*
clamp (ramda) x 41,708,876 ops/sec ±0.90% (89 runs sampled)
clamp (ramda, curried) x 16,625,967 ops/sec ±0.38% (89 runs sampled)
clamp number (fp-ts) x 24,276,095 ops/sec ±0.33% (92 runs sampled)
clamp number (fp-ts, curried) x 15,989,159 ops/sec ±0.49% (88 runs sampled)
clamp (fp-ts) x 7,246,867 ops/sec ±1.39% (90 runs sampled)
clamp (fp-ts, curried) x 6,220,873 ops/sec ±1.39% (88 runs sampled)
*/

const clampNumber = F.clamp(ordNumber);

suite
  .add('clamp (ramda)', function() {
    R.clamp(1, 3, 2);
  })
  .add('clamp (ramda, curried)', function() {
    R.clamp(1)(3, 2);
  })
  .add('clamp number (fp-ts)', function() {
    clampNumber(1, 3, 2);
  })
  .add('clamp number (fp-ts, curried)', function() {
    clampNumber(1)(3, 2);
  })
  .add('clamp (fp-ts)', function() {
    F.clamp(ordNumber)(1, 3, 2);
  })
  .add('clamp (fp-ts, curried)', function() {
    F.clamp(ordNumber)(1)(3, 2);
  })
  .on('cycle', function(event: any) {
    // tslint:disable-next-line: no-console
    console.log(String(event.target));
  })
  .on('complete', function(this: any) {
    // tslint:disable-next-line: no-console
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  .run({ async: true });
