import { semigroupAll } from 'fp-ts/lib/Semigroup';
const concat = semigroupAll.concat;
export function and(a, b) {
    if (b === undefined) {
        return (b) => concat(a, b);
    }
    else {
        return concat(a, b);
    }
}
