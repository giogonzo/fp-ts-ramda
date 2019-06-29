import * as Benchmark from 'benchmark';
import * as F from '../src/';
import * as R from 'ramda';

const suite = new Benchmark.Suite();

/*
fromPairs (ramda) x 3,600,126 ops/sec ±0.47% (86 runs sampled)
fromPairs (fp-ts) x 5,819,042 ops/sec ±0.43% (88 runs sampled)
*/

suite
  .add('fromPairs (ramda)', function() {
    R.fromPairs([['a', 1], ['b', 2], ['c', 3]]);
  })
  .add('fromPairs (fp-ts)', function() {
    F.fromPairs([['a', 1], ['b', 2], ['c', 3]]);
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
