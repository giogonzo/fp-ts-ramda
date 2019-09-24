import { insertAt } from 'fp-ts/lib/Record';

function _assoc<K extends string, V, A extends object>(k: K, v: V, obj: A): A & Record<K, V> {
  return insertAt(k, v)(obj) as A & Record<K, V>;
}

/**
 * Same as [R.assoc](https://ramdajs.com/docs/#assoc)
 *
 * @since 0.1.3
 */
export function assoc<K extends string>(
  k: K
): {
  <V, A extends object>(v: V, obj: A): A & Record<K, V>;
  <V>(v: V): <A extends object>(obj: A) => A & Record<K, V>;
};
export function assoc<K extends string, V>(k: K, v: V): <A extends object>(obj: A) => A & Record<K, V>;
export function assoc<K extends string, V, A extends object>(k: K, v: V, obj: A): A & Record<K, V>;
export function assoc<K extends string, V, A extends object>(k: K, v?: V, obj?: A): any {
  if (v === undefined) {
    return (v: V, obj?: A) => {
      if (obj === undefined) {
        return (obj: A) => _assoc(k, v, obj);
      } else {
        return _assoc(k, v, obj);
      }
    };
  } else if (obj === undefined) {
    return (obj: A) => _assoc(k, v, obj);
  } else {
    return _assoc(k, v, obj);
  }
}
