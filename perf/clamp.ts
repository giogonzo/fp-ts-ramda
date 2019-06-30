import * as Benchmark from 'benchmark';
import * as F from '../src/';
import * as R from 'ramda';
import { ordNumber } from 'fp-ts/lib/Ord';

const suite = new Benchmark.Suite();

/*
clamp (ramda) x 42,113,914 ops/sec ±0.63% (87 runs sampled)
clamp (ramda, curried) x 16,782,272 ops/sec ±0.36% (92 runs sampled)
clamp number (fp-ts) x 138,653,426 ops/sec ±0.62% (89 runs sampled)
clamp number (fp-ts, curried) x 37,658,861 ops/sec ±0.39% (90 runs sampled)
clamp (fp-ts) x 10,294,595 ops/sec ±1.20% (89 runs sampled)
clamp (fp-ts, curried) x 8,181,934 ops/sec ±1.19% (85 runs sampled)
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
