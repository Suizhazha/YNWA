//逆序输出
Number.prototype.digits = function* () {
  let n = this.valueOf()
  if (n === 0) {
    yield 0
    return
  }
  while (n > 0) {
    let digit = n % 10
    yield digit
    n = (n - digit) / 10
  }
}

//正序输出
Number.prototype.digits = function* () {
  let n = this.valueOf()


    let digit = n % 10
  let rest = (n - digit) / 10
   if (rest> 0 )
     yield * rest.digits()
yield digit
}


for (let x of 10086..digits()) {
  console.log(x)
}