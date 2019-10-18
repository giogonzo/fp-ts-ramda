---
title: allPass.ts
nav_order: 3
parent: Modules
---

---

<h2 class="text-delta">Table of contents</h2>

- [allPass (function)](#allpass-function)

---

# allPass (function)

Similar to [R.allPass](https://ramdajs.com/docs/#allPass). Returns a curried unary
predicate rather than a function whose arity matches that of the highest-arity predicate supplied.

**Signature**

```ts
export function allPass<T>(predicates: Array<Predicate<T>>): Predicate<T>;
export function allPass<T>(predicates: Array<Predicate<T>>, val: T): boolean; { ... }
```

Added in v0.1.4
