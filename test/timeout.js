const test = require('blue-tape')
const mosayk = require('../index')

test('timeout() returns a promise', (assert) => {
  const expected =
    Promise

  const actual =
    mosayk.timeout().constructor

  assert.equal(actual, expected)
  assert.end()
})

test('timeout() resolves when callback is invoked',
  (assert) =>
    new Promise(async function (resolve, reject) {
      try {
        await mosayk.timeout()
        resolve()
      } catch (e) {
        reject(e)
      }
    })
)
