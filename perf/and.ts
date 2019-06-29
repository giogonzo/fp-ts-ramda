import * as Benchmark from 'benchmark';
import * as F from '../src/';
import * as R from 'ramda';

const suite = new Benchmark.Suite();

/*
and (ramda) x 686,831,080 ops/sec ±1.81% (88 runs sampled)
and (fp-ts) x 715,057,903 ops/sec ±0.75% (86 runs sampled)
*/

suite
  .add('and (ramda)', function() {
    R.and(true, false);
  })
  .add('and (fp-ts)', function() {
    F.and(true, false);
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
