import * as Benchmark from 'benchmark';
import { eqNumber } from 'fp-ts/lib/Eq';
import * as R from 'ramda';
import * as FR from '../src/';

const suite = new Benchmark.Suite();

/*
equals (ramda) x 2,698,018 ops/sec ±0.78% (92 runs sampled)
equals (ramda - curried) x 1,639,434 ops/sec ±2.79% (84 runs sampled)
equals (fp-ts) x 809,243,611 ops/sec ±0.46% (92 runs sampled)
equals (fp-ts - curried) x 38,973,438 ops/sec ±0.86% (84 runs sampled)
*/

suite
  .add('equals (ramda)', function() {
    R.equals(10, 20);
  })
  .add('equals (ramda - curried)', function() {
    R.equals(10)(20);
  })
  .add('equals (fp-ts)', function() {
    FR.equals(eqNumber)(10, 20);
  })
  .add('equals (fp-ts - curried)', function() {
    FR.equals(eqNumber)(10)(20);
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
