import { divide } from './divide'

describe(divide, () => {
  it('divides 2 numbers', () => {
    expect(divide(6, 3)).toEqual(6 / 3)

    expect(divide(2)(5)).toBeCloseTo(2 / 5)
  })
})
