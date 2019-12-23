---
title: anyPass.ts
nav_order: 8
parent: Modules
---

---

<h2 class="text-delta">Table of contents</h2>

- [anyPass (function)](#anypass-function)

---

# anyPass (function)

Similar to [R.anyPass](https://ramdajs.com/docs/#anyPass). Returns a curried unary
predicate rather than a function whose arity matches that of the highest-arity predicate supplied.

**Signature**

```ts
export function anyPass<T>(predicates: Array<Predicate<T>>): Predicate<T>;
export function anyPass<T>(predicates: Array<Predicate<T>>, val: T): boolean; { ... }
```

Added in v0.1.5
