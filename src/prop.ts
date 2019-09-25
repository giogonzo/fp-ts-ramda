import { Lens } from 'monocle-ts';

function _prop<K extends keyof T, T extends object>(k: K, obj: T): T[K] {
  return Lens.fromProp<T>()(k).get(obj);
}

/**
 * Same as [R.prop](https://ramdajs.com/docs/#prop)
 *
 * @since 0.1.4
 */
export function prop<K extends string>(k: K): <T extends Record<K, any>>(obj: T) => T[K];
export function prop<K extends keyof T, T extends object>(k: K, obj: T): T[K];
export function prop<K extends string, T extends Record<K, any>>(k: K, obj?: T): T[K] | ((obj: T) => T[K]) {
  if (obj === undefined) {
    return <T extends Record<K, any>>(obj: T): T[K] => _prop(k, obj);
  } else {
    return _prop(k, obj);
  }
}
