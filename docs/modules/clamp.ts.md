---
title: clamp.ts
nav_order: 7
parent: Modules
---

---

<h2 class="text-delta">Table of contents</h2>

- [clamp (function)](#clamp-function)

---

# clamp (function)

Similar to [R.clamp](https://ramdajs.com/docs/#clamp), but:

- requires an explicit `Ord<A>` instance, thus it supports any `A` not just "JS ordered types"
- doesn't throw if `min > max` (returns `min` instead)

**Signature**

```ts
export function clamp<A>(
  O: Ord<A>
): {
  (low: A): {
    (hi: A): (x: A) => A;
    (hi: A, x: A): A;
  };
  (low: A, hi: A): (x: A) => A;
  (low: A, hi: A, x: A): A;
}; { ... }
```

Added in v0.1.2
