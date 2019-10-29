import { Lens } from 'monocle-ts';
function _prop(k, obj) {
    return Lens.fromProp()(k).get(obj);
}
export function prop(k, obj) {
    if (obj === undefined) {
        return (obj) => _prop(k, obj);
    }
    else {
        return _prop(k, obj);
    }
}
