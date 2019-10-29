import { modifyAt } from 'fp-ts/lib/Array';
import { getOrElse } from 'fp-ts/lib/Option';
import { pipe } from 'fp-ts/lib/pipeable';
function _adjust(i, f, as) {
    return pipe(modifyAt(i >= 0 ? i : as.length + i, f)(as), getOrElse(() => as));
}
export function adjust(i, f, as) {
    if (f === undefined) {
        return (f, as) => {
            if (as === undefined) {
                return (as) => _adjust(i, f, as);
            }
            else {
                return _adjust(i, f, as);
            }
        };
    }
    else if (as === undefined) {
        return (as) => _adjust(i, f, as);
    }
    else {
        return _adjust(i, f, as);
    }
}
