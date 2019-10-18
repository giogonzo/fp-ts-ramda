---
title: any.ts
nav_order: 6
parent: Modules
---

---

<h2 class="text-delta">Table of contents</h2>

- [any (function)](#any-function)

---

# any (function)

Similar to [R.any](https://ramdajs.com/docs/#any). Returns true if at least one of the elements of the list
match the predicate, false otherwise. Does not dispatch to the any method of the second argument if present. Does not
act as a transducer if a transformer is given in the list position.

**Signature**

```ts
export function any<T>(predicate: Predicate<T>): Predicate<Array<T>>;
export function any<T>(predicate: Predicate<T>, as: Array<T>): boolean; { ... }
```

Added in v0.1.6
