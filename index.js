const expose = Object.freeze({
  allFullfilled,
  sequentialIterator,
  timeout
})

module.exports = expose

function sequentialIterator (arr, sequence) {
  arr[Symbol.iterator] = function * () {
    while (arr.length) {
      if (arr.length < sequence) {
        yield arr.splice(0, arr.length)
      } else {
        yield arr.splice(0, sequence)
      }
    }
  }

  return arr[Symbol.iterator]()
}

function timeout (length = 0) {
  const timeout = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve()
    }, length)
  })

  return timeout
}

function allFullfilled (promises) {
  return Promise.all(promises.map((prom) => prom.catch(err => err)))
}
