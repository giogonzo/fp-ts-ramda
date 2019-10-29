export function equals(E) {
    return (x, y) => {
        if (y === undefined) {
            return y => E.equals(x, y);
        }
        else {
            return E.equals(x, y);
        }
    };
}
