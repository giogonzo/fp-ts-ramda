---
title: and.ts
nav_order: 4
parent: Modules
---

---

<h2 class="text-delta">Table of contents</h2>

- [and (function)](#and-function)

---

# and (function)

Similar to [R.and](https://ramdajs.com/docs/#and) but accepts only `boolean` values, thus will not work considering
"truthy/falsy"ness.

**Signature**

```ts
export function and(a: boolean): (b: boolean) => boolean;
export function and(a: boolean, b: boolean): boolean; { ... }
```

Added in v0.1.1
