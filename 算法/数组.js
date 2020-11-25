//找数组下标

function findIndex(arr,target) {
  for (let i = 0; i <arr.length ; i++) {
    if (arr[i]===target){
      return i}
  }
  return -1
}
findIndex([1,2,4],4)

//Leetcode  Fizz Buzz

var fizzBuzz = function(n) {
let arr = []
  for (var i = 1; i <=n; i++) {
    if (i%3===0&&i%5===0){
      arr.push("FizzBuzz")
    } else  if (i%3===0){
      arr.push("Fizz")
    }else if (i%5===0){
      arr.push("Buzz")
    } else {arr.push(String(i))}
  }
return arr
};

var fizzBuzz = function(n) {
  let arr = []
  for (var i = 1; i <=n; i++) {
    i%3&&i%5?arr.push("FizzBuzz"):i%3? arr.push("Fizz"):i%5? arr.push("Buzz"):arr.push(i.toString())
  }
  return arr
};