import { add } from './add'

describe(add, () => {
  it('accepts 2 numbers and adds them together', () => {
    expect(add(1, 2)).toEqual(3)
  })

  it('accepts 1 number and returns a function that accepts the second number', () => {
    const add1 = add(1)
    expect(typeof add1).toBe('function')
    expect(add1(2)).toEqual(3)
  })
})
