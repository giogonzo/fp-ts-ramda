import * as Benchmark from 'benchmark';
import * as R from 'ramda';
import * as FR from '../src/';

const suite = new Benchmark.Suite();

/*
applyTo (ramda) x 5,681,560 ops/sec ±0.85% (86 runs sampled)
applyTo (fp-ts) x 52,826,187 ops/sec ±1.36% (89 runs sampled)
*/

const odd = (n: number) => n % 2 !== 0;

suite
  .add('applyTo (ramda)', function() {
    R.applyTo(42)(odd);
  })
  .add('applyTo (fp-ts)', function() {
    FR.applyTo(42)(odd);
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
