import { Endomorphism } from 'fp-ts/lib/function';
/**
 * Same as [R.adjust](https://ramdajs.com/docs/#adjust)
 *
 * @since 0.1.1
 */
export declare function adjust(i: number): {
    <A>(f: Endomorphism<A>, as: Array<A>): Array<A>;
    <A>(f: Endomorphism<A>): (as: Array<A>) => Array<A>;
};
export declare function adjust<A>(i: number, f: Endomorphism<A>): (as: Array<A>) => Array<A>;
export declare function adjust<A>(i: number, f: Endomorphism<A>, as: Array<A>): Array<A>;
