import { singleton } from 'fp-ts/lib/Record';
export function objOf(k, a) {
    switch (arguments.length) {
        case 1:
            return (a) => singleton(k, a);
        case 2:
            return singleton(k, a);
    }
}
