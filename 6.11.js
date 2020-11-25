//伪数组实现push

let arrayLike={
  0:1,
  1:2,
  length:2
}

arrayLike.push= function (val) {
  this[this.length]=val
  this.length +=1
  return this.length
}
arrayLike.push(4)


//数组实现push

let arr=[1,2,3]

arr.push2= function (val) {
this[this.length]=val
  return this.length //真数组长度会自增
}
arr.push2(2)

// apply和call
//call的arguments长度要确定的，apply中长度可以不确定

arr.call(arr,arg)
arr.call(arr,...args)
arr.apply(arr,args)

//call()方法的作用和 apply() 方法类似，区别就是call()方法接受的是参数列表，而apply()方法接受的是一个参数数组。
arr.call[arr,1,2,3]
arr.apply[arr,[1,2,3]]


/ /this指向什么,取决函数的调用形式（怎样调用），
 /而不取决于函数的在哪调用，也不取决于在哪定义

 /而函数内部能访问到的非形参变量，取决于函数在哪定义，以及它在哪个作用域

var a=4

function f(){
  console.log(this,a)
}

!function add(){
  var a=56
  f()
}()

