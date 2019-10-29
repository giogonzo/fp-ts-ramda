import { getEq } from 'fp-ts/lib/Array';
import { takeLast } from './takeLast';
function _endsWith(E) {
    const eqArray = getEq(E);
    return (suffix, as) => eqArray.equals(suffix, takeLast(suffix.length, as));
}
export function endsWith(E) {
    const endsWithE = _endsWith(E);
    return (suffix, oas) => {
        if (oas === undefined) {
            return (as) => endsWithE(suffix, as);
        }
        else {
            return endsWithE(suffix, oas);
        }
    };
}
