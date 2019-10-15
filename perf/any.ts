import * as Benchmark from 'benchmark';
import * as R from 'ramda';
import * as FR from '../src/';

const suite = new Benchmark.Suite();

/*
any (ramda) x 7,152,974 ops/sec ±0.56% (89 runs sampled)
any (ramda - curried) x 2,539,354 ops/sec ±0.50% (89 runs sampled)
any (fp-ts) x 16,229,172 ops/sec ±0.56% (88 runs sampled)
any (fp-ts - curried) x 12,458,167 ops/sec ±0.70% (88 runs sampled)
*/

const odd = (n: number) => n % 2 !== 0;

suite
  .add('any (ramda)', function() {
    R.any(odd, [20, 15, 25, 30, 40]);
  })
  .add('any (ramda - curried)', function() {
    R.any(odd)([20, 15, 25, 30, 40]);
  })
  .add('any (fp-ts)', function() {
    FR.any(odd, [20, 15, 25, 30, 40]);
  })
  .add('any (fp-ts - curried)', function() {
    FR.any(odd)([20, 15, 25, 30, 40]);
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
