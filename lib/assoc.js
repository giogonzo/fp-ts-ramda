import { insertAt } from 'fp-ts/lib/Record';
function _assoc(k, v, obj) {
    return insertAt(k, v)(obj);
}
export function assoc(k, v, obj) {
    if (v === undefined) {
        return (v, obj) => {
            if (obj === undefined) {
                return (obj) => _assoc(k, v, obj);
            }
            else {
                return _assoc(k, v, obj);
            }
        };
    }
    else if (obj === undefined) {
        return (obj) => _assoc(k, v, obj);
    }
    else {
        return _assoc(k, v, obj);
    }
}
