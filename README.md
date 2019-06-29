# (WIP!) fp-ts-ramda

Some [Ramda](https://ramdajs.com/) functions reimplemented using [fp-ts](https://github.com/gcanti/fp-ts).

Since the question "how do I implement `x` from Ramda in fp-ts" comes up pretty often

## Contribution guidelines

Each function should:

- be API compatible with the original Ramda function
- come with a property-based test to verify such compatibility (see [other tests](https://github.com/giogonzo/fp-ts-ramda/blob/master/test/index.test.ts) as an example)
- be typesafe (or even improve on the status of @types/ramda, if possible)
- come with a few typelevel tests (see [other tests](https://github.com/giogonzo/fp-ts-ramda/blob/master/dtslint/ts3.5/index.ts) as an example)
- be non deprecated in Ramda

## More specific notes regarding implementation choices

### Currying

All Ramda functions are "auto curried". Since an objective is to remain API-compatible, translations must be curried too. This is a non-issue for `arity = 1` functions, where the main definition is exported directly (see e.g. `fromPairs.ts`).

For `arity > 1` functions, there should be a non-exported, non-curried version of the function defined clearly at the top of the file.

Then, the exported function should have a series of TS overloads making all the possible combinations of parameters well-typed, and be implemented using the `curry` helper in `src/helpers`. See for instance `adjust.ts`.

### Out of scope

A few things I haven't considered up to now and/or not sure how to handle:

- the [`R.__` placeholder](https://ramdajs.com/docs/#__)
- "Acts as a transducer if a transformer is given..."
- "Dispatches to the `X` method of argument, if present."
