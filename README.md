# (WIP!) `Ramda` functions reimplemented using `fp-ts`

Some [Ramda](https://ramdajs.com/) functions reimplemented using [fp-ts](https://github.com/gcanti/fp-ts).

Since the question "how do I implement `x` from Ramda in fp-ts" comes up pretty often

## how to contribute

Each function should:
- be API compatible with the original Ramda function
- come with a property-based test to verify such compatibility (see [other tests](https://github.com/giogonzo/fp-ts-ramda/blob/master/test/index.test.ts) as an example)
- be typesafe (or even improve on the status of @types/ramda, if possible)
- come with a few typelevel tests (see [other tests](https://github.com/giogonzo/fp-ts-ramda/blob/master/dtslint/ts3.5/index.ts) as an example)
