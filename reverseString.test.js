const { test, expect } = require('@jest/globals')

const reverseString = require('./reverseString')

test('Reverse string fn exists', () => {
  expect(reverseString).toBeDefined()
})

test('Reverse string', () => {
  expect(reverseString('Liril')).toEqual('liril')
})
