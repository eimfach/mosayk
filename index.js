const api = Object.freeze({
  promise: {
    allFullfilled: promiseAllFullfilled,
    timeout: promiseTimeout
  },
  iterable: {
    sequence: sequentialIterator
  },
  number: {
    isValidHex
  }

})

module.exports = api

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

function promiseTimeout (length = 0) {
  const timeout = new Promise(function (resolve, reject) {
    setTimeout(resolve, length)
  })

  return timeout
}

function promiseAllFullfilled (promises) {
  return Promise.all(promises.map((prom) => prom.catch(err => err)))
}

function isValidHex (num) {
  for (let cha of num) {
    if (typeof cha !== 'string' || cha.length > 1) {
      return false
    }
    if (isNaN(parseInt('0x' + cha, 16))) {
      return false
    }
  }
  return !!num.length
}
