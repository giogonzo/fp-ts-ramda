export const curry = (f: Function, arity = f.length, ...args: any) =>
  arity <= args.length ? f(...args) : (...argz: any) => curry(f, arity, ...args, ...argz);
