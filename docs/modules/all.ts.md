---
title: all.ts
nav_order: 3
parent: Modules
---

---

<h2 class="text-delta">Table of contents</h2>

- [all (function)](#all-function)

---

# all (function)

Similar to [R.all](https://ramdajs.com/docs/#all). Returns true if all the elements of the list
match the predicate, false otherwise. Does not dispatch to the all method of the second argument if present. Does not
act as a transducer if a transformer is given in the list position.

**Signature**

```ts
export function all<T>(predicate: Predicate<T>): Predicate<Array<T>>;
export function all<T>(predicate: Predicate<T>, as: Array<T>): boolean; { ... }
```

Added in v0.1.6
