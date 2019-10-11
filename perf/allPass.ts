import * as Benchmark from 'benchmark';
import * as R from 'ramda';
import * as FR from '../src/';

const suite = new Benchmark.Suite();

/*
allPass (ramda) x 600,654 ops/sec ±0.66% (87 runs sampled)
allPass (fp-ts) x 8,705,716 ops/sec ±1.66% (89 runs sampled)
*/

const odd = (n: number) => n % 2 !== 0;
const lt20 = (n: number) => n < 20;
const gt5 = (n: number) => n > 5;

suite
  .add('allPass (ramda)', function() {
    R.allPass([odd, lt20, gt5])(20);
  })
  .add('allPass (fp-ts)', function() {
    FR.allPass([odd, lt20, gt5])(20);
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
