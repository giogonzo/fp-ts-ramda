import { monoidAnyFoldMap } from './shared/monoidAnyFoldMap';
function _any(predicate, as) {
    return monoidAnyFoldMap(predicate)(as);
}
export function any(predicate, as) {
    if (as === undefined) {
        return as => _any(predicate, as);
    }
    else {
        return _any(predicate, as);
    }
}
