---
title: assoc.ts
nav_order: 5
parent: Modules
---

---

<h2 class="text-delta">Table of contents</h2>

- [assoc (function)](#assoc-function)

---

# assoc (function)

Same as [R.assoc](https://ramdajs.com/docs/#assoc)

**Signature**

```ts
export function assoc<K extends string>(
  k: K
): {
  <V, A extends object>(v: V, obj: A): A & Record<K, V>;
  <V>(v: V): <A extends object>(obj: A) => A & Record<K, V>;
};
export function assoc<K extends string, V>(k: K, v: V): <A extends object>(obj: A) => A & Record<K, V>;
export function assoc<K extends string, V, A extends object>(k: K, v: V, obj: A): A & Record<K, V>; { ... }
```

Added in v0.1.3
