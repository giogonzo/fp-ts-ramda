import * as Benchmark from 'benchmark';
import { eqNumber } from 'fp-ts/lib/Eq';
import * as R from 'ramda';
import * as FR from '../src/';

const suite = new Benchmark.Suite();

/*
equals (ramda) x 2,552,747 ops/sec ±0.59% (85 runs sampled)
equals (ramda - curried) x 1,659,114 ops/sec ±0.65% (86 runs sampled)
equals (fp-ts) x 104,351,654 ops/sec ±0.55% (88 runs sampled)
equals (fp-ts - curried) x 24,471,223 ops/sec ±0.77% (87 runs sampled)
*/

suite
  .add('equals (ramda)', function() {
    R.equals(10, 20);
  })
  .add('equals (ramda - curried)', function() {
    R.equals(10)(20);
  })
  .add('equals (fp-ts)', function() {
    FR.equals(eqNumber, 10, 20);
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
