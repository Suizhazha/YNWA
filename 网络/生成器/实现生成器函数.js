ary[Symbol.iterator] = function* () {
  for (let i = 0; i < this.length; i++) {
    yield this[i]
  }
}

