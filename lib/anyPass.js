import { pipe } from 'fp-ts/lib/pipeable';
import { monoidAnyFoldMap } from './shared/monoidAnyFoldMap';
function _anyPass(predicates, val) {
    return pipe(predicates, monoidAnyFoldMap(predicate => predicate(val)));
}
export function anyPass(predicates, val) {
    if (val === undefined) {
        return val => _anyPass(predicates, val);
    }
    else {
        return _anyPass(predicates, val);
    }
}
