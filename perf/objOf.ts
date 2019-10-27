import * as Benchmark from 'benchmark';
import * as R from 'ramda';
import * as FR from '../src/';

const suite = new Benchmark.Suite();

/*
objOf (ramda) x 226,288,829 ops/sec ±1.54% (83 runs sampled)
objOf (ramda - curried) x 4,749,737 ops/sec ±0.66% (91 runs sampled)
objOf (fp-ts) x 98,404,788 ops/sec ±0.81% (88 runs sampled)
objOf (fp-ts - curried) x 30,166,739 ops/sec ±0.79% (87 runs sampled)
*/

suite
  .add('objOf (ramda)', function() {
    R.objOf('test', [20, 15, 25, 30, 40]);
  })
  .add('objOf (ramda - curried)', function() {
    R.objOf('test')([20, 15, 25, 30, 40]);
  })
  .add('objOf (fp-ts)', function() {
    FR.objOf('test', [20, 15, 25, 30, 40]);
  })
  .add('objOf (fp-ts - curried)', function() {
    FR.objOf('test')([20, 15, 25, 30, 40]);
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
