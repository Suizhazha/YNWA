//等差数列

function a(n) {
return n
}

function S(n) {
  if (n===0) return 0
return S(n-1)+a(n)
}

  S(10)//55

//幂函数
function power(x,n) {
  return n===0?1:x*power(x,n-1)
  }

console.log(power(2,3))

//判断n是否是 3 的幂次方

var isPowerOfThree = function(n) {
  if (n===0){
    return false}
  else if (n===1){
    return true
  }else if (n%3!==0){
    return false}
  else {
    return isPowerOfThree(n/3)
  }
};

isPowerOfThree(9)

//20层台阶走法
function find(surrStep,howDidIGetHere){
  if(surrStep===20){
    console.log(howDidIGetHere)
  }else if (surrStep>20){
    return null
  }else {
    find(surrStep+1,howDidIGetHere+'1')
    find(surrStep+2,howDidIGetHere+'2')
  }
}

find(0,'')//surrStep:初始台阶

//61.unique-paths,变形
function find(x,y,howDidIGetHere) {
if (x===6&&y===3){
  console.log(howDidIGetHere);
}else if (x>6||y>3){
  return null
}else {
  find(x+1,y,howDidIGetHere+'>')
  find(x,y+1,howDidIGetHere+'v')
}
}

find(0,0,'')

