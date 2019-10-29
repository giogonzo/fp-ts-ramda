import { clamp as _clamp } from 'fp-ts/lib/Ord';
export function clamp(O) {
    const c = _clamp(O);
    return (low, ...args) => {
        if (args.length === 0) {
            return (hi, ...args) => {
                if (args.length === 0) {
                    return (x) => {
                        return c(low, hi)(x);
                    };
                }
                return c(low, hi)(args[0]);
            };
        }
        if (args.length === 1) {
            return (x) => {
                return c(low, args[1])(x);
            };
        }
        return c(low, args[0])(args[1]);
    };
}
