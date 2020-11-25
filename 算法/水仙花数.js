function isSXH(value) {
  let width=getDigitWidth(value)
  let sum =0
  while (n>0){
  let digit=n %10
    sum +=power(digit,width)
    n=(n-digit)/10
  }
  return sum ===value
}