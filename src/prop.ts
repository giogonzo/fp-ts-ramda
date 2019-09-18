function _prop<K extends string, T extends Record<K, any>>(k: K, obj: T): T[K] {
  return obj[k];
}

export function prop<K extends string>(
  k: string
): {
  <T extends Record<K, any>>(obj: T): T[K];
};
export function prop<K extends string, T extends Record<K, any>>(k: K, obj: T): T[K];
export function prop<K extends string, T extends Record<K, any>>(k: K, obj?: T): any {
  if (obj === undefined) {
    return <T extends Record<K, any>>(obj: T): T[K] => _prop(k, obj);
  } else {
    return _prop(k, obj)
  }
}
