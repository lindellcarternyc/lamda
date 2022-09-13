import { curry } from '../../function'

export const subtract = curry<[number, number], number>((x, y) => x - y)
