---
title: objOf.ts
nav_order: 18
parent: Modules
---

---

<h2 class="text-delta">Table of contents</h2>

- [objOf (function)](#objof-function)

---

# objOf (function)

Same as [R.objOf](https://ramdajs.com/docs/#objOf)

**Signature**

```ts
export function objOf<K extends string>(k: K): <T>(a: T) => Record<K, T>;
export function objOf<K extends string, T>(k: K, a: T): Record<K, T>; { ... }
```

Added in v0.1.8
