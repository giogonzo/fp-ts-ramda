/**
 * Similar to [R.takeLast](https://ramdajs.com/docs/#takeLast), but doesn't work with `string`s
 *
 * @since 0.1.2
 */
export declare function takeLast(i: number): <A>(as: Array<A>) => Array<A>;
export declare function takeLast<A>(i: number, as: Array<A>): Array<A>;
