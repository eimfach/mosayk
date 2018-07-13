const test = require('blue-tape')
const mosayk = require('../index')

test('isValidHex() returns false if the given param is empty or falsy', (assert) => {
  const expected = false
  const actual =
  mosayk.number.isValidHex([]) ||
  mosayk.number.isValidHex(['A B']) ||
  mosayk.number.isValidHex(someFalsyIterables()[0]) ||
  mosayk.number.isValidHex(someFalsyIterables()[1]) ||
  mosayk.number.isValidHex(someFalsyIterables()[2])

  assert.equal(actual, expected)
  assert.end()
})

function someFalsyIterables () {
  const someObj = {}
  someObj[Symbol.iterator] = function * () {
    yield 'A'
    yield 'B'
    yield ''
    yield '1'
  }

  const someObj2 = {}
  someObj2[Symbol.iterator] = function * () {
    yield 'A'
    yield 'B'
    yield ' '
    yield '1'
  }

  const someObj3 = {}
  someObj3[Symbol.iterator] = function * () {
    yield 'A'
    yield 'BC'
  }

  return [someObj[Symbol.iterator](), someObj2[Symbol.iterator](), someObj3[Symbol.iterator]()]
}
