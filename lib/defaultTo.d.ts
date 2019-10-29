/**
 * Similar to [R.defaultTo](https://ramdajs.com/docs/#defaultTo), but doesn't handle `NaN` as a special case
 *
 * @since 0.1.3
 */
export declare function defaultTo<A>(d: A): (value?: A | null) => A;
export declare function defaultTo<A>(d: A, value?: A | null): A;
