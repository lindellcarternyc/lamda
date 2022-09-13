import { curry } from './curry'

describe(curry, () => {
  it('curries a 2-n function', () => {
    const add = curry((a: number, b: number) => a + b)
    expect(add(1, 2)).toEqual(3)
    expect(add(1)(2.14)).toEqual(3.14)
  })
})
