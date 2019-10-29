import { Eq } from 'fp-ts/lib/Eq';
/**
 * Similar to [R.edsWith](https://ramdajs.com/docs/#endsWith), but doesn't work with `string`s
 *
 * @since 0.1.2
 */
export declare function endsWith<A>(E: Eq<A>): {
    (suffix: Array<A>): (as: Array<A>) => boolean;
    (suffix: Array<A>, as: Array<A>): boolean;
};
