01. 简述什么是随机算法及其基本思想，并设计算法计算派（π）的近似值
```js
// 利用随机数均匀分布的特点实现通过比例计算某种结果的算法

var m = 0
var n = 100000

for (var i = 0; i < n; i++) {
    var x = Math.random() * 2 - 1
    var y = Math.random() * 2 - 1
    if (x * x + y * y < 1) {
        m++
    }
}

console.log(4 * m / n)

```

02. 完成以下代码使其能够输出数组中去掉一个最大值和最小值后的平均值，【并精确到小数点后两位】
```

```

    ```js
    [3,5,2,7,8,1,4,9]
    .reduce(function(memo, value, index, array){
        if (index == 1) {
            return {
                sum: memo + value,
                max: Math.max(memo, value),
                min: Math.min(memo, value),
            }
        }

        memo.sum += value
        memo.max = Math.max(memo.max, value)
        memo.min = Math.min(memo.min, value)

        if (index == array.length - 1) {
            return (memo.sum - memo.max - memo.min) / (index - 1)
        } else {
            return memo
        }
    })
    ```
03. 如下招租广告中租金和房东的电话分别是多少？
```
25920

```

    ```
    // 五道口三居室精装修电梯房xxxx元一个月
    // 空调暖气热水器，三房两卫大阳台
    // 千兆光纤免费用，卧室全部都朝南
    // 但是只租程序员，！！！！！！！
    // 租房还配米家扫地机器人！
    // 房东非北京本地人，长年在外地，人品好，性格好，只为找个好租客
    // 租金及房东电话号码从以下程序中得出
    // 联系我时请说明是在知乎上看到的
    var td = [1, 0, 5, 6, 7, 8]
    var dm = [4, 4, 5, 2, 4, 1, 0, 0, 3, 5, 0]
              7  7  8  5  7  0  1  1  6  8  1
    var 月租金 = [1,2,3,4,5,6,7,8,9,10].filter(isNotPrime).reduce((a,b)=>a*b, 1.5)
    var 房东电话 = dm.map(i => td[i]).reverse().join()

    // 注：相关真实事件地址：http://www.phpjyz.com/article-1065.html
    ```
04. for in循环与for of循环的区别是什么？for in循环有什么需要注意的问题？in运算符有什么需要注意的问题？
```
for in 是用来遍历对象的属性/数组的下标的（而不是属性值的）
for of 是用来遍历数组的元素的（而不是数组下标的）
实际上for of可以以任意形式遍历任意的值。

for in循环有什么需要注意的问题？
    对象原型链上的可枚举属性也会被遍历。如果不想遍历，可以用hasOwnProperty来过滤。
    顺序：先出现从0开始的整数属性
    接下来出现非整数属性，且以它们被添加到对象上的顺序出现


in运算符有什么需要注意的问题？
    原型上的属性也会被判定为真


```

05. 高阶函数的定义是什么？它能给编程人员带来什么便利/好处？
```
高阶函数的定义是什么？
    如果一个函数接收函数做为参数，或将函数做为返回值，或二者皆有，则该函数称为高阶函数

高阶函数可以对某种特定的动作进行抽象
可以提高代码的可读性及可维护性，而且更不容易出bug

```

06. 读程序写结果
```
8
```

    ```js
    var foo = function(){
        return 9
    }

    var obj = {
        foo: function(){
            return 8
        }
    }

    function bar(f) {
        console.log(f())
    }

    bar(obj.foo)
    ```
    ```js
        // 声明位置
        var me = {
            name: 'xiuyan',
            hello: function() {
                console.log(this.name)
            }
        }

        var you = {
            name: 'xiaoming',
            hello: function() {
                var targetFunc = me.hello
                targetFunc()
            }
        }

        var name = [1,2,3]

        // 调用位置
        you.hello()


    ```
07. 算法复杂度中的大O符号的具体定义是什么？
```
对于
f(n)及t(n)
如果存在n0及常数c
当n>n0时，c*f(n) >= t(n)
那么可以说 t(n) = O(f(n))
```

08. 什么是函数的memoize？
```js

function memoize(func, resolver = it => it) {

    var cache = new memoize.Cache()

    function memoized(...args) {
        var key = resolver(...args)
        if (cache.has(key)) {
            return cache.get(key)
        } else {
            var result = func(...args)
            cache.set(key, result)
            return result
        }
    }

    memoized.cache = cache

    return memoized
}

memoize.Cache = Map

```

09. 有一个员工列表（stuffList），每个人有姓名（name），性别（gender），年龄（age），入职时间(joinTime)，职位(position)等字段。现想要对该表进行排序，职位越高越往前排，职位相同的按入职时间排序，入职时间越往前排，请写出大致的代码
```
stuffList
.sort((a,b) => a.joinTime - b.joinTime)
.sort((a,b) => b.position - a.position)

```

10. 从B2单元格出发，还原如下链表。
```

```

![](link-list-memo.png)
11. CSS中zoom:2与transform: scale(2)有何区别？
```

```

12. 对象的属性的常见叫法有哪些？
```
属性
字段
键
property
attribute
field
key
```

13. 如下是一个JSON文件的内容，指出其中的错误
```

```

    ```
    {
        "name": "damiao",
        "age": 16,
        "time": null
    }
    ```
14. var，let，const声明的变量分别有什么不同？
```
var 声明的变量处于函数级作用域，且声明会被提前

let，const 声明的变量处于块级作用域（最近的表示语句块的{}内）
    变量声明不会提前，但会有TDZ（Tamper Dead Zone）
        即变量作用域内，声明完成之前，不能使用该变量

const 声明的变量不可改变其指向
仅仅是变量的指向不可改变
但变量指向的对象依然是可以改的



```

15. 列出至少5种我们讲到过的ES6的新【语法】
```
arrow function
spread operator f(...[1,2,3])
rest parameter function f(a, ...args)
default parameter function f(a, b = 3)

for of

let,const

class

`` template string
f`` taged template string



```

16. 从0开始实现一个Ary类，要求能够通过ary[n]直接访问到编号为n的元素，读取length属性可以得到数组的实时长度，修改length属性会让数组长度发生变化，让其支持for of及for in循环。同时实现原生数组上的如下方法：slice，splice，reduce，reduceRight，map，filter，join，indexOf，lastIndexOf，concat，pop，push，shift，unshift，reverse，includes，forEach，every，some，filter。
```js

class Ary {
  constructor() {
    this._length = 0
  }
  slice(start, end) {

  }
  splice(start, count, ...replace) {

  }
  push(val) {
      this[this.length] = val
  }
  get length() {
    var l = 0
    for (var key in this) {
      if (key == parseInt(key)) {
        l = key
      }
    }
    var tl = parseInt(l) + 1
    return tl > this._length ? tl : this._length
  }
  set length(l) {
    if (l > this.length) {
      this._length = l
    }
    if (l < this.length) {
      for (var i = l; i < this.length; i++) {
        delete this[i]
      }
      this._length = l
    }
  }
}


```

17. 读程序写结果
```

```

    ```js
    var ary = [  1   ,    function(){   console.log(this[0])    }     ]
    console.log(   ary[1]()  )
    ```
18. 读程序写结果
```

```

    ```js
    var obj = {
      a: 3,
      b: this.a * this.a,
      c: function() {
          return this.a * this.a
      },
      d: function() {
          return obj.a * obj.a
      },
      e: function() {
          return this.a * this.a
      }(),
      f: function() {
          return obj.a * obj.a
      }(),
    }
    console.log(obj.b)
    ```
19. 如何判断一个函数当前是否被当做构造函数调用？
```
new.target指向该函数

new.target === F

if (this instanceof F) {

}

用了class语法后不需要判断了，因为class声明的函数必须用new调用

```

20. 请讲述你对“序列化”一词的理解
```
序列化
    是指把一个东西在不损失信息量的前提下转换为由连续字节所表示的数据
    最典型的就是保存为字符串。

反序列化
    把连续字节所表示的数据转换回其之前的结构。
```

21. 请简述你对计算机里随机数的理解
```
计算机里的随机数并不是真正的随机，只是看起来是随机的。
因为它还是用固定的计算方式计算出来的。

常见的计算方式有：
    线性同余
    平方取中
    梅森素数

实际应用中可能把一些外部因素做为生成随机数的条件
如用户击键，cpu的温度，内存的占用量等等
```

22. 什么叫做排序算法的稳定性？它有什么作用？
```
排序前后相同元素的相对位置是否发生变化
作用：多级排序（如成绩单）

```

23. 严格模式是什么？如何触发？有哪些限制？
```
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

```

24. try catch finally 语句一般在什么情况下使用？有哪些需要注意的问题？最佳实践是什么？
```
在代码可能出现 运行时 错误时使用。
有哪些需要注意的问题？
    finally语句无论如何都会运行
    如果存在return，会覆盖之前的return
    如果存在throw，也会覆盖之前catch里的throw
最佳实践是什么？
    catch里一定要检测抛出错误的类型，是自己能处理的才处理，不要一股脑处理

```

25. 简述你对面向对象的三大特性的理解（不是把三大特性列出来）
```
封装：将表示一个事物信息及能够对这些信息做的处理的函数放在一起，用这一个整体来表达这个事物，是为“对象”

继承：一个类型复用已有类型已经实现的逻辑。

多态：各不同类型的对象可以拥有相同的一组或多组接口，以跟特定的只期待这种接口的代码一起工作。
```

26. 解释一下你对构造函数的理解
```
构造函数表示一个类型

构造函数的内容/作用即为“构造”一个对象
如何“构造”呢？初始化表示这个对象所需要的信息。
```

27. 如下代码的运行结果是什么？为什么？
```
语法报错
unexpected token }
```

    ```js
    var a = 8
    try {
        console.log(
    }
    ```
28. 此代码的求值结果是？为什么？
```
Array.apply(null, {0: 1, length: 5})
Array(1, undefined, undefined, undefined, undefined)
```

    Array.apply(null, {0: 1, length: 5})
29. 使用js语言实现如下功能
```js
class Person {
    constructor(fullName) {
        this.fullName = fullName
    }
    get fullName() {
        return this.firstName + ' ' + this.lastName
    }
    set fullName(val) {
        var a = val.split(' ')
        this.firstName = a[0]
        this.lastName = a[1]
    }
}

```

    ```js
    //传入表示fullName的字符串，包含两个单词
    var damiao = new Person('Xie Ran')

    console.log(damiao.firstName)//Xie
    console.log(damiao.lastName)//Ran

    damiao.fullName = 'Da Miao'

    console.log(damiao.firstName)//Da
    console.log(damiao.lastName)//Miao

    damiao.firstName = 'Xiao'

    console.log(damiao.fullName)// Xiao Miao
    ```

30. 如何删除一个对象的某个属性？如何阻止一个对象的某个属性被删除？
```
delete obj.foo

如何阻止一个对象的某个属性被删除？
通过属性描述符将该属性设置为不可配置（前提是该属性是可配置的）。

Object.defineProperty(obj, 'foo', {
    configurable: false,
})

Object.preventExtension(obj) 阻止增加属性
Object.seal(obj)  阻止增加和删除
Object.freeze(obj)  阻止增加，删除和修改

```

31. 简述使用JS实现页面中动画的原理并写出相应代码
```
使用requestAnimationFrame间歇性（一般情况为60分之1秒）让一个函数运行
每次运行时修改页面的样式或结构，在它运行完以后浏览器会绘制新的页面样式
动画就有了。

requestAnimationFrame(function animate(time) {

    // calculate and modify DOM style based on time

    requestAnimationFrame(animate)
})

```

32. 如何创建一个没有原型的对象？
```js
 var obj = Object.create(null)

 Object.setPrototypeOf(obj, null)
```

33. 上题中，老浏览器中如果没有Object.create函数如何创建呢？
```js
// var obj = {}
// obj.__proto__ = null

function f(){}
f.prototype = null
var obj = new f()

```

34. 读代码画出以下各个对象的指向图：`A.__proto__`，`B.__proto__`，`A.prototype.__proto__`，`B.prototype.__proto__`，`a`，`b`，`a.__proto__`，`b.__proto__`，`a.prototype`，`b.prototype`
```
A.__proto__   ----->   Function.prototype
B.__proto__   ----->   Function.prototype
A.prototype.__proto__   ----->   B.prototype
B.prototype.__proto__   ----->   Object.prototype
a            ---> 一个对象
b            ---> 一个对象
a.__proto__  ---> A.prototype
b.__proto__  ---> b.prototype
a.prototype  ---> undefined
b.prototype  ---> undefined
```

    ```js
    function A(){}
    function B(){}
    A.prototype.__proto__ = B.prototype
    var a = new A()
    var b = new B();
    ```
35. 请写出按IEEE754标准使用双精度(double，64位)表示0.0123的结果
```
3f 89 30 be 0d ed 28 8d
```

36. 请写出如下8位十六进制数序列双精度理解是多少 40 45 18 f5 c2 8f 5c 29
```
42.195

```

37. 请写出大O符号的数学定义
```

```

38. 请分析为什么最大子串和算法的第三种算法的时间复杂度为O(N*logN)
```

```

39. 请分析快速排序算法的复杂度；另分析使用快排同类算法找出乱序数组中第k大的数的复杂度
```
n*log(n)

n

```

40. 分别说出call，apply，bind的行为、用法，并实现bind函数
```
call,apply 是调用函数

call为函数传入this并以正常的方式传入固定数量的参数
f.call(xx,a,b,c)
f.call(xx,a,b,c,d,e,f,g)

call为函数传入this并以数组的形式传入不定数量的参数
f.call(xx, ary)

bind 是为函数绑定参数并返回绑定后的函数。

bind返回一个新的函数，相当于旧函数的特定参数被固定为了某个值。可以认为这个参数从参数列表中去掉，成为了函数内部的一个var声明的变量，并为该变量赋值了被绑定的值。

function f (a,b,c) {
    return a + b + c
}
f2 = f.bind(null, 1)
f2相当于以下函数。
function f2 (b,c) {
    var a = 1
    return a + b + c
}
```
```js
Function.prototype.myBind = function(thisArg, ...args) {
    var func = this
    return function bound(...args2) {
        return func.call(thisArg, ...args, ...args2)
    }
}

f2 = f.myBind(1,2,3)
f2(1,2,3)
```

41. 在老版本的浏览器中，没有`Object.create`，也没有`Object.set/getPrototypeOf`以及`__proto__`，如何实现一个Object.create函数呢？
```js
Object.create2 = function(proto) {
    function f() {}
    f.prototype = proto
    return new f()
}
obj = Object.create2({a:1,b:2})
```

42. 至少列出四种this在不同情况分别指向
```
弄清楚this的指向关键在于明确【在调用哪个函数】，以及以【何种方式】调用的这个函数


一、当函数调用
f() 在严格模式下指向undefined，在非严格模式下指向全局对象（浏览器中是window，Node中是global）

二、当方法调用
obj.f()
obj['f']()
obj[3]()
此次被当成谁的方法，this就是谁

三、call，apply，bind
a.b.c.d.f.call(obj)
a.b.c.d.f.apply(obj)
f2 = a.b.c.d.f.bind(obj);f2()

设定的是哪个对象，就是哪个对象

四、用new调用
this为一个新创建的对象，且这个对象以该函数的prototype属性为原型

五、箭头函数里的this
不看箭头函数如何调用
看箭头外面的this是谁。
外面如果还是箭头函数，看更外面
直到看到一个function或看到全局
如果是function，则看该function是【如何被调用】的。

六、将函数传给其它函数

[1,2,3].map(function(){   this   })
el.addEventListener('click', function(){
    this
})
requestAnimationFrame(function() {  this  })

此种写法使用者是无法看见函数是【如何被调用】的。
所以无法确定this是谁，只能阅读相关函数的文档。

此种场景如果想要this为特定的值，则可以bind。
```

43. 如何给一个已存在的对象添加getter/setter属性，写出代码。
```

var obj = {
    get foo() {

    },
    set foo() {

    }
}

Object.defineProperty(obj, 'propName', {
    get: function(){},
    set: function(val){}
})


```

44. 实现lodash的`forOwn`函数，用于遍历一个对象的自有属性
```



```

45. 实现一个类【Queue】用以表达一个队列：
```js
class Queue {
    static createNode(val) {
        return {
            val: val,
            next: null
        }
    }
    constructor() {
        this.head = this.tail = null
        this.count = 0
    }
    push(val) {
        var node = Queue.createNode(val)
        this.count++
        if (this.head == null) {
            this.head = this.tail = node
        } else {
            this.tail.next = node
            this.tail = node
        }
    }
    next() {
        if (this.head == null) {
            return undefined
        } else if (this.head == this.tail) {
            var result = this.head.val
            this.head = this.tail = null
            this.count--
            return result
        } else {
            var node = this.head
            this.head = node.next
            this.count--
            return node.val
        }
    }
    get length() {
        return this.count
    }
}
```

  * 队列是一种类似于数组的数据结构，但元素仅能从一边进入且仅能从另一边弹出队列，类似火车站
  * 设计良好的构造函数及接口以方便自己和他人使用
  * 至少需要实现的几个实例方法（其它方法按需实现）：
    * `Quene.prototype.next` 获取队列的下一个元素
    * `Quene.prototype.push` 将一个元素放进队列
    * `Quene.prorotype.length` 获取队列的长度（getter）
46. prototype与`__proto__`有什么区别和联系？
```
区别：
prototype是普通函数的一属性，一般只有函数会自动有。

__proto__是任意对象的原型所在的属性。

联系：一个对象的__proto__会指向其构造函数的prototype属性

```

47. 实现一个解析queryString的函数（Hint：不要想的太复杂）
```

```

    ```js
    var str = 'a=b&a=c&a=d&b=true'
    function parseQueryString(str) {
         return str
            .split('&')
            .map(it => it.split('='))
            .reduce((result, pair) => {
                var key = pair[0]
                var val = pair[1]

                if (!(key in result)) {
                    result[key] = val
                } else {
                    if (Array.isArray(result[key])) {
                        result[key].push(val)
                    } else {
                        result[key] = [result[key], val]
                    }
                }
                return result
            }, {})
    }
    parseQueryString(str)
    /*
    返回如下值：
    {
        a: ['b','c','d'],
        b: 'true'
    }
     */
    ```
48. 你认为不同排序算法性能不同的本质原因是什么？
```
思路不同，算法不同，性能分析的结果不同
性能必然不一样
```

49. 如下数组按照经典算法就地调整成一个最大堆后的结果是什么样？
```
9837501462
```

    ```js
      var ary = [2,5,1,7,8,0,3,4,6,9]
    ```
50. 使用 new 调用一个函数时具体发生了什么？
```js
// new Cont(...args)
// NEW(Cont, ...args)

function NEW(Cont, ...args) {
    var obj = Object.create(Cont.prototype)
    var ret = Cont.call(obj, ...args)
    if (ret && typeof ret == 'object') {
        return ret
    } else {
        return obj
    }
}
```

51. 什么叫做断言？它有什么用？一般用在什么地方？
```
判断某个条件是否成立，如果不成立就抛出错误

作用：尽早的发现问题所在

用在：
    测试框架。
    一个函数判断参数是否符合期望。
```

52. 什么是属性描述符？如何获取一个对象某属性的属性描述符？
```
什么是属性描述符？
    是一个用来描述属性配置的一个对象
    有value，get，set，writable,enumberable,configurable这几个字段分别控制该属性的各方面特性。

    Object.getOwnPropertyDescriptor
    Object.getOwnPropertyDescriptors

```

53. 实现一个跟原生bind一样的函数Function.prototype.myBind()，即需要考虑被myBind返回的函数当做构造函数的情况（自行查文档）。
```js
// bind返回的函数被new调用时，原来的this绑定会失效。
Function.prototype.myBind = function(thisArg, ...args) {
    var func = this
    return function bound(...args2) {
        if (new.target === bound) {
            return new func(...args, ...args2)
        }
        return func.call(thisArg, ...args, ...args2)
    }
}


```

54. 解释transform-origin属性的意义。
```

```

55. 如下代码中，section 元素的宽度分别为 300px 和 23em 时，三个 div 元素的宽度分别为多少？
```

```

    ```html
    <style>
      section {
        display: flex;
        height: 100px;
        font-size: 20px;
        width: ???;
      }
      .a1 {
        width: 250px;
        flex-basis: 100px;
        flex-grow: 1;
        flex-shrink: 2;
        background-color: tan;
      }
      .a2 {
        width: 160px;
        flex-basis: 150px;
        flex-grow: 3;
        flex-shrink: 1;
        background-color: lime;
      }
      .a3 {
        width: 120px;
        flex-basis: auto;
        flex-grow: 2;
        flex-shrink: 4;
        background-color: olive;
      }
    </style>
    <section>
      <div class="a1">a1</div>
      <div class="a2">a2</div>
      <div class="a3">a3</div>
    </section>
    ```
56. flex-basis 与 width 用在同一个元素上时，在何种情况下哪一个属性会生效？
```

```

57. 详述有多少种方法可以让一个元素尽量的窄？
```

```

58. 属性 animation-direction 有哪些取值？分别是什么意义？
```

```

59. 属性 animation-fill-mode 有哪些取值？分别是什么意义？
```

```

60. 补全如下replace函数的调用使其将如下字符串中左边不是xx但右边是yy的OO替换为XX.
```

```

    ```js
    'lskOOyydjfxxOOyyiwexxOOhayyOOxxlskdwOOyyflxxOOyykaxOOydfh'.replace(/(?<!xx)OO(?=yy)/g, 'XX')
    'lskOOyydjfxxOOyyiwexxOOhayyOOxxlskdwOOyyflxxOOyykaxOOydfh'.replace(/(?!xx)(..)OO(?=yy)/g, '$1XX')
    ```
61. 画出以下正则表达式的铁路图
```

```

    ```js
    /^(-)?\d+(.\d{1,2})?$/
    ```
62. 写出与如下铁路图等价的正则表达式
```

```

    ![](reg-railway.png)
63. 如下代码最后一行运行时，函数t接收到的参数分别是什么？
```
第一个参数为一个数组，内容为：
    ['', 'foo', 'bar', '\\']
该数组有一个raw属性，内容为：
    ['', 'foo', 'bar', '\\\\']

剩下的参数为1，　2，　6
```

    ```js
    function t(){}
    var a = 1
    var b = 2
    var c = 3
    t`${a}foo${a*b}bar${b*c}\\`
    ```
64. 什么是多重转义，在什么时候会用到？使用合适的语言描述出来。
```
当使用一种语言表达另一种语言时且两种语言有相同的转义符的情况下
就有可能发生多重转义。
如用字符串构造正则表达式时。

```

65. 什么是正则表达式中的零宽断言？并举出至少两个使用场景。
```
零宽断言用于断言一个位置的左边或右边满足或者不满足某种匹配条件。
```

66. 分别说出以下几个与正则相关的函数的【各种】用法及效果，可以查文档
```

```

    * String.prototype.replace
    * String.prototype.search
    * String.prototype.match
    * RegExp.prototype.test
    * RegExp.prototype.exec
67. 什么是vanilla.js？
```
不用任何框架。
```

68. HTML、JS、正则表达式、URL encode、CSS等的转义符分别是什么
```
HTML  &xxx;
JS  \x
正则 \x
URL encode: %xx
CSS:  \x
div:before{
    content: '\A';
}

```

69. 为字符串对象增加一个方法replaceAll（wildcard，target），讨论poilfill
```

```

    * 其中wildcard为一个表示通配符的字符串
    * target可以为一个字符串，也可以为一个函数
        * 如果是一个字符串，则把所有匹配到的内容替换为该字符串
        * 如果为一个函数，则把每一个匹配得到的内容传给该函数，并将该函数的返回值做为被替换的内容
70. 描述正则表达式的匹配过程
```
回溯。
```

71. 为什么说编程语言的代码是树状结构？
```
因为语言的语法确实符合树状结构的特点：
一个东西可以包含与自己相同结构的东西：
    如：
        一个语句块可以包含另一个语句块
        代码里的表达式更是这样。
```

