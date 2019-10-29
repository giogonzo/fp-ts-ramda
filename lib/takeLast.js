import { takeRight } from 'fp-ts/lib/Array';
export function takeLast(i, as) {
    const f = takeRight(i);
    if (as === undefined) {
        return f;
    }
    else {
        return f(as);
    }
}
