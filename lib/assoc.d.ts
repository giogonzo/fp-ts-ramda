/**
 * Same as [R.assoc](https://ramdajs.com/docs/#assoc)
 *
 * @since 0.1.3
 */
export declare function assoc<K extends string>(k: K): {
    <V, A extends object>(v: V, obj: A): A & Record<K, V>;
    <V>(v: V): <A extends object>(obj: A) => A & Record<K, V>;
};
export declare function assoc<K extends string, V>(k: K, v: V): <A extends object>(obj: A) => A & Record<K, V>;
export declare function assoc<K extends string, V, A extends object>(k: K, v: V, obj: A): A & Record<K, V>;
