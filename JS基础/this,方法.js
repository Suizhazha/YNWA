/**
 * @param {number} n
 * @return {number}
 */
var isPrime=(n)=>{
  let sqrt_n = Math.sqrt(n)
  for(i=2;i<=sqrt_n;i++){
    if(n%i===0)
      return false
  }
  return true
}

var countPrimes = function(n) {
  let j=0
  for(let i=2;i<n;i++)
  {
    if(isPrime(i)) j++
  }
  return j
};