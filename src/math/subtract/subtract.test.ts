import { subtract } from './subtract'

describe(subtract, () => {
  it('subtracts 2 numbers', () => {
    expect(subtract(1, 2)).toBe(-1)
    expect(subtract(0)(5)).toBe(-5)
  })
})
