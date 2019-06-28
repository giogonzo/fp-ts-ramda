export function curry(f: Function): any {
  return function curried(this: any, ...args: any): any {
    if (args.length < f.length) {
      return function(this: any, ...args2: any) {
        return curried.apply(this, args.concat(args2));
      };
    }
    return f.apply(this, args);
  };
}
