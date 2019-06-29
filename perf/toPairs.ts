import * as Benchmark from 'benchmark';
import * as F from '../src/';
import * as R from 'ramda';

const suite = new Benchmark.Suite();

/*
toPairs (ramda) x 4,073,603 ops/sec ±0.54% (90 runs sampled)
toPairs (fp-ts) x 1,929,735 ops/sec ±0.82% (87 runs sampled)
*/

suite
  .add('toPairs (ramda)', function() {
    R.toPairs({ a: 1, b: 2, c: 3 });
  })
  .add('toPairs (fp-ts)', function() {
    F.toPairs({ a: 1, b: 2, c: 3 });
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
