//count primes
function isPrime(n) {
  let sqrt_n = Math.sqrt(n)
  for (let i = 2; i <= sqrt_n; i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}

let countPrimes = function (n) {
  let count = 0
  for (let i = 2; i < n; i++) {
    if (isPrime(i)){
      count++
    }
      }
  return count
}
countPrimes(10)

//丑数

let isUgly = function(num) {
  if (num<=0)return false
while (num%2){
    num=num/2
}
  while (num%3){
    num=num/3
  }
  while (num%5){
    num=num/5
}

return num === 1;
  //if (num===1){
  //   return true
  // }else return false

};

isUgly(8)

//2的幂

const isPowerOfTwo = function (n) {
  if(n<=0)return false

  while(n%2===0){
    n=n/2
  }
  return n===1
  //位运算
  // return (n&(n-1))===0
};


isPowerOfTwo(218)

//完美数

let checkPerfectNumber = function(num) {
if (num<=0)return false

  let sum =0
  for (let i = 0; i <=num/2 ; i++) {
    if (num%i ===0){
      sum+=1
    }
  }
  return sum === num;
};

//