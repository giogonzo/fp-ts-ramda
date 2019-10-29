import { monoidAllFoldMap } from './shared/monoidAllFoldMap';
function _all(predicate, as) {
    return monoidAllFoldMap(predicate)(as);
}
export function all(predicate, as) {
    if (as === undefined) {
        return as => _all(predicate, as);
    }
    else {
        return _all(predicate, as);
    }
}
