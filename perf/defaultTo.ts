import * as Benchmark from 'benchmark';
import * as F from '../src/';
import * as R from 'ramda';

const suite = new Benchmark.Suite();

/*
defaultTo (ramda) x 182,328,779 ops/sec ±0.93% (86 runs sampled)
defaultTo (ramda, curried) x 6,023,751 ops/sec ±0.86% (86 runs sampled)
defaultTo (fp-ts) x 29,242,720 ops/sec ±0.53% (89 runs sampled)
defaultTo (fp-ts, curried) x 23,708,335 ops/sec ±0.56% (92 runs sampled)
*/

suite
  .add('defaultTo (ramda)', function() {
    R.defaultTo(1, null);
  })
  .add('defaultTo (ramda, curried)', function() {
    R.defaultTo(1)(null);
  })
  .add('defaultTo (fp-ts)', function() {
    F.defaultTo(1, null);
  })
  .add('defaultTo (fp-ts, curried)', function() {
    F.defaultTo(1)(null);
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
