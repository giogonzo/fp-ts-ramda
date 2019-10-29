/**
 * Similar to [R.and](https://ramdajs.com/docs/#and) but accepts only `boolean` values, thus will not work considering
 * "truthy/falsy"ness.
 *
 * @since 0.1.1
 */
export declare function and(a: boolean): (b: boolean) => boolean;
export declare function and(a: boolean, b: boolean): boolean;
