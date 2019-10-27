import { singleton } from 'fp-ts/lib/Record';

/**
 * Same as [R.objOf](https://ramdajs.com/docs/#objOf)
 *
 * @since 0.1.8
 */
export function objOf<K extends string>(k: K): <T>(a: T) => Record<K, T>;
export function objOf<K extends string, T>(k: K, a: T): Record<K, T>;
export function objOf<K extends string, T>(k: K, a?: T): any {
  switch (arguments.length) {
    case 1:
      return <T>(a: T) => singleton(k, a);
    case 2:
      return singleton(k, a as T);
  }
}
