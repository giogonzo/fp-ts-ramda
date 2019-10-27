---
title: equals.ts
nav_order: 13
parent: Modules
---

---

<h2 class="text-delta">Table of contents</h2>

- [equals (function)](#equals-function)

---

# equals (function)

Similar to [R.equals](https://ramdajs.com/docs/#equals), but:

- Requires an explicit `Eq<A>` instance
- Does not directly handle cyclical data structures, relies on `Eq<A> instance to determine equality
- Does not dispatch to the `equals` method of both arguments if present

**Signature**

```ts
export function equals<A>(
  E: Eq<A>
): {
  (x: A, y: A): boolean;
  (x: A): Predicate<A>;
}; { ... }
```

Added in v0.1.7
