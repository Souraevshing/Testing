const functions = require('./functions')
const { expect, test } = require('@jest/globals')

test('Adding 2 numbers 1 + 1 is 2', () => {
  expect(functions.add(1, 1)).toBe(2)
})

test('Subtracting 2 numbers 1 - 1 is 0', () => {
  expect(functions.substract(1, 1)).toBe(0)
})

test('Should be null', () => {
  expect(functions.isNull()).toBeNull()
})

test('Should be falsy', () => {
  expect(functions.checkValue(undefined)).toBeFalsy()
})

test('create user', () => {
  expect(functions.createUser()).toEqual({
    firstName: 'sourav',
    lastName: 'kr',
  })
})

test('less than 1500', () => {
  const load1 = 1000
  const load2 = 400
  expect(load1 + load2).toBeLessThan(1500)
})

test('more than 1500', () => {
  const load1 = 1000
  const load2 = 600
  expect(load1 + load2).toBeGreaterThan(1500)
})

//ReGex
test('Regular expression, i is present in teams', () => {
  expect('teami').toMatch(/i/)
})

//array
test('Admin should be in username', () => {
  username = ['admin', 'test']
  expect(username).toContain('admin')
})

//async test
test('User fetched contain user to be Leanne Graham', async () => {
  expect.assertions(1)
  return await functions.fetchUser().then((data) => {
    expect(data.name).toEqual('Leanne Graham')
  })
})
