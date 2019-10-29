/**
 * Same as [R.xprod](https://ramdajs.com/docs/#xprod)
 *
 * @since 0.1.1
 */
export declare function xprod<A>(as: Array<A>): <B>(bs: Array<B>) => Array<[A, B]>;
export declare function xprod<A, B>(as: Array<A>, bs: Array<B>): Array<[A, B]>;
