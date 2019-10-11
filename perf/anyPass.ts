import * as Benchmark from 'benchmark';
import * as R from 'ramda';
import * as FR from '../src/';

const suite = new Benchmark.Suite();

/*
anyPass (ramda) x 573,086 ops/sec ±0.92% (89 runs sampled)
anyPass (fp-ts) x 8,551,076 ops/sec ±0.76% (88 runs sampled)
*/

const odd = (n: number) => n % 2 !== 0;
const lt20 = (n: number) => n < 20;
const gt5 = (n: number) => n > 5;

suite
  .add('anyPass (ramda)', function() {
    R.anyPass([odd, lt20, gt5])(20);
  })
  .add('anyPass (fp-ts)', function() {
    FR.anyPass([odd, lt20, gt5])(20);
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
