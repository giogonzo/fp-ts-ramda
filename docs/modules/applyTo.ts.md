---
title: applyTo.ts
nav_order: 10
parent: Modules
---

---

<h2 class="text-delta">Table of contents</h2>

- [applyTo (function)](#applyto-function)

---

# applyTo (function)

Same as [R.applyTo](https://ramdajs.com/docs/#applyTo)

**Signature**

```ts
export function applyTo<A>(a: A): <B>(fab: (a: A) => B) => B;
export function applyTo<A, B>(a: A, fab: (a: A) => B): B; { ... }
```

Added in v0.1.8
