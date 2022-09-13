import { dec } from './dec'

describe(dec, () => {
  it('decrements a number', () => {
    expect(dec(1)).toEqual(0)
    expect(dec(4.14)).toBeCloseTo(3.14)
  })
})
