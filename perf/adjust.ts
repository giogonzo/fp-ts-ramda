import * as Benchmark from 'benchmark';
import * as F from '../src/';
import * as R from 'ramda';

const suite = new Benchmark.Suite();

/*
adjust (ramda) x 12,661,072 ops/sec ±0.41% (87 runs sampled)
adjust (fp-ts) x 19,939,902 ops/sec ±0.48% (88 runs sampled)
*/

suite
  .add('adjust (ramda)', function() {
    R.adjust(0, n => n + 1, [1, 2, 3]);
  })
  .add('adjust (fp-ts)', function() {
    F.adjust(0, n => n + 1, [1, 2, 3]);
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
