import { array } from 'fp-ts/lib/Array';
function _xprod(as, bs) {
    return array.chain(as, a => bs.map(b => [a, b]));
}
export function xprod(as, bs) {
    if (bs === undefined) {
        return (bs) => _xprod(as, bs);
    }
    else {
        return _xprod(as, bs);
    }
}
