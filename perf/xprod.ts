import * as Benchmark from 'benchmark';
import * as F from '../src/';
import * as R from 'ramda';

const suite = new Benchmark.Suite();

/*
xprod (ramda) x 13,387,776 ops/sec ±1.29% (89 runs sampled)
xprod (fp-ts) x 9,443,076 ops/sec ±0.51% (89 runs sampled)
*/

suite
  .add('xprod (ramda)', function() {
    R.xprod([1, 2, 3], ['a, b']);
  })
  .add('xprod (fp-ts)', function() {
    F.xprod([1, 2, 3], ['a, b']);
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
