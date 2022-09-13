/* eslint-disable @typescript-eslint/ban-types */
// Drop N entries from array T
type Drop<
  N extends number,
  T extends unknown[],
  I extends unknown[] = []
> = Length<I> extends N ? T : Drop<N, Tail<T>, Prepend<Head<T>, I>>

// Add element E to array A (i.e Prepend<0, [1, 2]> = [0, 1, 2])
type Prepend<E, A extends unknown[]> = [E, ...A]

// Get the tail of the array, i.e Tail<[0, 1, 2]> = [1, 2]
type Tail<A extends unknown[]> = A extends [unknown]
  ? []
  : A extends [unknown, ...infer T]
  ? T
  : never

// Get the head of the array, i.e Head<[0, 1, 2]> = 0
type Head<A extends unknown[]> = A extends [infer H]
  ? H
  : A extends [infer H, ...unknown[]]
  ? H
  : never

// Get the length of an array
type Length<T extends unknown[]> = T['length']

// Use type X if X is assignable to Y, otherwise Y
type Cast<X, Y> = X extends Y ? X : Y

// Curry a function
type Curry<P extends unknown[], R> = <T extends unknown[]>(
  ...args: Cast<T, Partial<P>>
) => Drop<Length<T>, P> extends [unknown, ...unknown[]]
  ? Curry<Cast<Drop<Length<T>, P>, unknown[]>, R>
  : R

export function curry<P extends unknown[], R>(fn: (...args: P) => R) {
  return ((...args: unknown[]) => {
    if (args.length >= fn.length) {
      return (fn as Function)(...args) as R
    }

    return (...more: unknown[]) => (curry(fn) as Function)(...args, ...more)
  }) as unknown as Curry<P, R>
}
