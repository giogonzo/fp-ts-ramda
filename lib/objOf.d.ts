/**
 * Same as [R.objOf](https://ramdajs.com/docs/#objOf)
 *
 * @since 0.1.8
 */
export declare function objOf<K extends string>(k: K): <T>(a: T) => Record<K, T>;
export declare function objOf<K extends string, T>(k: K, a: T): Record<K, T>;
