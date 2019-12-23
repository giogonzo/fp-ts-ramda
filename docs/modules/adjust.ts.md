---
title: adjust.ts
nav_order: 2
parent: Modules
---

---

<h2 class="text-delta">Table of contents</h2>

- [adjust (function)](#adjust-function)

---

# adjust (function)

Same as [R.adjust](https://ramdajs.com/docs/#adjust)

**Signature**

```ts
export function adjust(
  i: number
): {
  <A>(f: Endomorphism<A>, as: Array<A>): Array<A>;
  <A>(f: Endomorphism<A>): (as: Array<A>) => Array<A>;
};
export function adjust<A>(i: number, f: Endomorphism<A>): (as: Array<A>) => Array<A>;
export function adjust<A>(i: number, f: Endomorphism<A>, as: Array<A>): Array<A>; { ... }
```

Added in v0.1.1
