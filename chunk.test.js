const { test, expect } = require('@jest/globals')

const chunk = require('./chunk')

test('Is fn exists', () => {
  expect(chunk).toBeDefined()
})

test('chunk arr of 10 items with len of 10', () => {
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const len = 2
  const chunkedArr = chunk(num, len)

  expect(chunkedArr).toEqual([[2], [3, 4], [5, 6], [7, 8], [9, 10]])
})
