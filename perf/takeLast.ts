import * as Benchmark from 'benchmark';
import * as F from '../src/';
import * as R from 'ramda';

const suite = new Benchmark.Suite();

/*
takeLast (ramda) x 2,882,451 ops/sec ±0.61% (86 runs sampled)
takeLast (ramda, curried) x 1,585,596 ops/sec ±0.74% (83 runs sampled)
takeLast (fp-ts) x 28,676,313 ops/sec ±0.41% (83 runs sampled)
takeLast (fp-ts, curried) x 16,598,966 ops/sec ±0.50% (87 runs sampled)
*/

suite
  .add('takeLast (ramda)', function() {
    R.takeLast(2, [1, 2, 3]);
  })
  .add('takeLast (ramda, curried)', function() {
    R.takeLast(2)([1, 2, 3]);
  })
  .add('takeLast (fp-ts)', function() {
    F.takeLast(2, [1, 2, 3]);
  })
  .add('takeLast (fp-ts, curried)', function() {
    F.takeLast(2)([1, 2, 3]);
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
