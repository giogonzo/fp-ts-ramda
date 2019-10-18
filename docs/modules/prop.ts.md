---
title: prop.ts
nav_order: 15
parent: Modules
---

---

<h2 class="text-delta">Table of contents</h2>

- [prop (function)](#prop-function)

---

# prop (function)

Same as [R.prop](https://ramdajs.com/docs/#prop)

**Signature**

```ts
export function prop<K extends string>(k: K): <T extends Record<K, any>>(obj: T) => T[K];
export function prop<K extends keyof T, T extends object>(k: K, obj: T): T[K]; { ... }
```

Added in v0.1.4
