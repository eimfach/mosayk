const test = require('blue-tape')
const mosayk = require('../index')

test('timeout() returns a promise', (assert) => {
  const expected =
    Promise

  const actual =
    mosayk.promise.timeout().constructor

  assert.equal(actual, expected)
  assert.end()
})
