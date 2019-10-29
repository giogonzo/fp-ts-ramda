import { pipe } from 'fp-ts/lib/pipeable';
import { monoidAllFoldMap } from './shared/monoidAllFoldMap';
function _allPass(predicates, val) {
    return pipe(predicates, monoidAllFoldMap(predicate => predicate(val)));
}
export function allPass(predicates, val) {
    if (val === undefined) {
        return val => _allPass(predicates, val);
    }
    else {
        return _allPass(predicates, val);
    }
}
