import { fromNullable, getOrElse } from 'fp-ts/lib/Option';
import { pipe } from 'fp-ts/lib/pipeable';

function _defaultTo<A>(d: A, value?: A | null): A {
  return pipe(
    fromNullable(value),
    getOrElse(() => d)
  );
}

/**
 * Similar to [R.defaultTo](https://ramdajs.com/docs/#defaultTo), but doesn't handle `NaN` as a special case
 *
 * @since 0.1.3
 */
export function defaultTo<A>(d: A): (value?: A | null) => A;
export function defaultTo<A>(d: A, value?: A | null): A;
export function defaultTo<A>(d: A, value?: A | null): any {
  switch (arguments.length) {
    case 1:
      return (value?: A | null): A => {
        return _defaultTo(d, value);
      };
    case 2:
      return _defaultTo(d, value);
  }
}
