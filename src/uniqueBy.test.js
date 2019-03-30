import { uniqueBy } from './uniqueBy'

test('test uniqueBy', () => {
  expect(uniqueBy([1, 2, 3, 1, 2])).toEqual(expect.arrayContaining([1, 2, 3]))
})
