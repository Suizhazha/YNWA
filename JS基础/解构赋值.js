var a,b,rest;
[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a); // 10
console.log(b); // 20
console.log(rest); // [30, 40, 50]

({ a, b } = { a: 10, b: 20 });
console.log(a); // 10
console.log(b); // 20


// Stage 4（已完成）提案中的特性
({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
console.log(a); // 10
console.log(b); // 20
console.log(rest); // {c: 30, d: 40}


var foo = ["one", "two", "three"];

var [one, two, three] = foo;
console.log(one); // "one"
console.log(two); // "two"
console.log(three); // "three"

//为了防止从数组中取出一个值为undefined的对象，可以在表达式左边的数组中为任意对象预设默认值。
var a, b;

[a=5, b=7] = [1];
console.log(a); // 1
console.log(b); // 7

//交换变量
var a = 1;
var b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1


function f() {
  return [1, 2];
}

//从一个函数返回一个数组是十分常见的情况。解构使得处理返回值为数组时更加方便。
var a, b;
[a, b] = f();
console.log(a); // 1
console.log(b); // 2