---
title: defaultTo.ts
nav_order: 8
parent: Modules
---

---

<h2 class="text-delta">Table of contents</h2>

- [defaultTo (function)](#defaultto-function)

---

# defaultTo (function)

Similar to [R.defaultTo](https://ramdajs.com/docs/#defaultTo), but doesn't handle `NaN` as a special case

**Signature**

```ts
export function defaultTo<A>(d: A): (value?: A | null) => A;
export function defaultTo<A>(d: A, value?: A | null): A; { ... }
```

Added in v0.1.3
