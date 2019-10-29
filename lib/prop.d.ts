/**
 * Same as [R.prop](https://ramdajs.com/docs/#prop)
 *
 * @since 0.1.4
 */
export declare function prop<K extends string>(k: K): <T extends Record<K, any>>(obj: T) => T[K];
export declare function prop<K extends keyof T, T extends object>(k: K, obj: T): T[K];
