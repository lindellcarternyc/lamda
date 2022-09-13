import { inc } from './inc'

describe(inc, () => {
  it('increments a number', () => {
    expect(inc(2.14)).toBeCloseTo(3.14)
  })
})
