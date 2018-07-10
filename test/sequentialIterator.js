const test = require('blue-tape')
const mosayk = require('../index')

test('sequentialIterator() returns an iterable', (assert) => {
  const expected =
    typeof createIterableArray([])[Symbol.iterator]

  const actual =
    typeof mosayk.sequentialIterator([], 2)[Symbol.iterator]

  assert.equal(actual, expected)
  assert.end()
})

test('sequentialIterator() returns sequences', (assert) => {
  const expected = [[1, 2], [3, 4], [5, 6], [7, 8], [9]]

  const actual = []
  const iterable = mosayk.sequentialIterator([1, 2, 3, 4, 5, 6, 7, 8, 9], 2)

  for (let seq of iterable) {
    actual.push(seq)
  }

  assert.deepEqual(actual, expected)
  assert.end()
})

function createIterableArray (arr) {
  arr[Symbol.iterator] = function * () {}
  return arr[Symbol.iterator]()
}
