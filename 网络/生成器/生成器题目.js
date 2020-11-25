function * natureNumber() {
for (let i=0; ;i++){
  yield i
}
}

a=natureNumber()
a.next()//0
a.next()//1


/////////////////////////////////////////////////////////////////////////////////


function * natureNumber(start) {
  for (let i=start; ;i++){
    yield i
  }
}

a=natureNumber(5)
a.next()//5
a.next()//6


/////////////////////////////////////////////////////////////////////////////////


function * f() {
  console.log(1)
  let a= yield 5
  console.log(a)
  let b= yield 6
  console.log(b)
}

a=f()
a.next()//1,返回yield值5，a的值待定，等待传参

a.next(88)//a=88，返回yield值6，b的值待定，等待传参

a.next(99)//b=99,返回yield值undefined


/////////////////////////////////////////////////////////////////////////////////


function * f() {
  let a= yield 5
  let b= yield 6
  console.log(a+b)
}

a=f()
a.next()//返回yield值5，a的值待定，等待传参

a.next(7)//a的值7,返回yield值6，b待定，等待传参

a.next(8)//15,因为b的值8，计算a+b，done为true


/////////////////////////////////////////////////////////////////////////////////


function * f() {
  let a= yield 5
  let b= yield 6
  console.log(a+b)
}

try{
  a.throw(99)//抛出异常
}catch (e) {
  console.log('错误！',e)//捕获错误并抛出
}


/////////////////////////////////////////////////////////////////////////////////

//生成器实现
Number.prototype[Symbol.iterator]= function * () {
let n=this
  for (let i = 0; i <n ; i++) {
    yield i
  }
}

for (let x of 9) {  //多态
  console.log(x)
}


/////////////////////////////////////////////////////////////////////////////////


let obj = {
  bar: function * () {
  //
  }
}

for (let x of obj.bar()) { //多态
  console.log(x)
}


//


let foo = {}
let F= function(){}
Object.prototype.a = 'value a'
Function.prototype.b = 'value b';

console.log(foo.a)
console.log(foo.b)

console.log(F.a)
console.log(F.b)
