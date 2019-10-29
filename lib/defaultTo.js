import { fromNullable, getOrElse } from 'fp-ts/lib/Option';
import { pipe } from 'fp-ts/lib/pipeable';
function _defaultTo(d, value) {
    return pipe(fromNullable(value), getOrElse(() => d));
}
export function defaultTo(d, value) {
    switch (arguments.length) {
        case 1:
            return (value) => {
                return _defaultTo(d, value);
            };
        case 2:
            return _defaultTo(d, value);
    }
}
