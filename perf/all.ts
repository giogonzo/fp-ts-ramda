import * as Benchmark from 'benchmark';
import * as R from 'ramda';
import * as FR from '../src/';

const suite = new Benchmark.Suite();

/*
all (ramda) x 7,172,708 ops/sec ±0.58% (90 runs sampled)
all (ramda - curried) x 2,536,235 ops/sec ±0.50% (90 runs sampled)
all (fp-ts) x 17,289,076 ops/sec ±0.53% (91 runs sampled)
all (fp-ts - curried) x 12,912,533 ops/sec ±0.75% (89 runs sampled)
*/

const odd = (n: number) => n % 2 !== 0;

suite
  .add('all (ramda)', function() {
    R.all(odd, [20, 15, 25, 30, 40]);
  })
  .add('all (ramda - curried)', function() {
    R.all(odd)([20, 15, 25, 30, 40]);
  })
  .add('all (fp-ts)', function() {
    FR.all(odd, [20, 15, 25, 30, 40]);
  })
  .add('all (fp-ts - curried)', function() {
    FR.all(odd)([20, 15, 25, 30, 40]);
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
