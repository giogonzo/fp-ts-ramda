import * as Benchmark from 'benchmark';
import * as F from '../src/';
import * as R from 'ramda';
import { eqString } from 'fp-ts/lib/Eq';

const suite = new Benchmark.Suite();
const endsWith = F.endsWith(eqString);

/*
endsWith (ramda) x 434,012 ops/sec ±1.17% (89 runs sampled)
endsWith (fp-ts) x 16,889,080 ops/sec ±1.28% (83 runs sampled)
*/

suite
  .add('endsWith (ramda)', function() {
    R.endsWith(['c'])(['a', 'b', 'c']);
  })
  .add('endsWith (fp-ts)', function() {
    endsWith(['c'])(['a', 'b', 'c']);
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
