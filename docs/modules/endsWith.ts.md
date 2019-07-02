---
title: endsWith.ts
nav_order: 6
parent: Modules
---

---

<h2 class="text-delta">Table of contents</h2>

- [endsWith (function)](#endswith-function)

---

# endsWith (function)

Similar to [R.edsWith](https://ramdajs.com/docs/#endsWith), but doesn't work with `string`s

**Signature**

```ts
export function endsWith<A>(
  E: Eq<A>
): {
  (suffix: Array<A>): (as: Array<A>) => boolean;
  (suffix: Array<A>, as: Array<A>): boolean;
}; { ... }
```

Added in v0.1.2
