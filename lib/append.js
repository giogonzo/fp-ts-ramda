import { snoc } from 'fp-ts/lib/Array';
export function append(a, as) {
    if (as === undefined) {
        return (as) => snoc(as, a);
    }
    else {
        return snoc(as, a);
    }
}
