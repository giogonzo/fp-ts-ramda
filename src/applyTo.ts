/**
 * Same as [R.applyTo](https://ramdajs.com/docs/#applyTo)
 *
 * @since 0.1.8
 */
export function applyTo<A>(a: A): <B>(fab: (a: A) => B) => B;
export function applyTo<A, B>(a: A, fab: (a: A) => B): B;
export function applyTo<A, B>(a: A, fab?: (a: A) => B): any {
  return typeof fab === 'undefined' ? (fab: (a: A) => B) => fab(a) : fab(a);
}
