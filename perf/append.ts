import * as Benchmark from 'benchmark';
import * as F from '../src/';
import * as R from 'ramda';

const suite = new Benchmark.Suite();

/*
append (ramda) x 24,233,437 ops/sec ±0.41% (88 runs sampled)
append (fp-ts) x 18,456,189 ops/sec ±2.23% (90 runs sampled)
*/

suite
  .add('append (ramda)', function() {
    R.append(3, [1, 2]);
  })
  .add('append (fp-ts)', function() {
    F.append(3, [1, 2]);
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
