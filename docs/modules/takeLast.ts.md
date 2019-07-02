---
title: takeLast.ts
nav_order: 8
parent: Modules
---

---

<h2 class="text-delta">Table of contents</h2>

- [takeLast (function)](#takelast-function)

---

# takeLast (function)

Similar to [R.takeLast](https://ramdajs.com/docs/#takeLast), but doesn't work with `string`s

**Signature**

```ts
export function takeLast(i: number): <A>(as: Array<A>) => Array<A>;
export function takeLast<A>(i: number, as: Array<A>): Array<A>; { ... }
```

Added in v0.1.2
