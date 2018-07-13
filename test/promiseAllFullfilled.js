const test = require('blue-tape')
const mosayk = require('../index')

test('promiseAllFullfilled() returns a promise', (assert) => {
  const expected =
    Promise

  const actual =
    mosayk.promise.allFullfilled([Promise.resolve(), Promise.reject()], 2).constructor

  assert.equal(actual, expected)
  assert.end()
})

test(
  'promiseAllFullfilled() resolves the promise when all given promises are fullfilled',
  (assert) => new Promise(function (resolve, reject) {
    mosayk.promise.allFullfilled([Promise.resolve(), Promise.reject()], 2)
      .then(resolve)
      .catch(reject)
  })
)
