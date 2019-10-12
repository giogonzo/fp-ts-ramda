---
title: xprod.ts
nav_order: 16
parent: Modules
---

---

<h2 class="text-delta">Table of contents</h2>

- [xprod (function)](#xprod-function)

---

# xprod (function)

Same as [R.xprod](https://ramdajs.com/docs/#xprod)

**Signature**

```ts
export function xprod<A>(as: Array<A>): <B>(bs: Array<B>) => Array<[A, B]>;
export function xprod<A, B>(as: Array<A>, bs: Array<B>): Array<[A, B]>; { ... }
```

Added in v0.1.1
