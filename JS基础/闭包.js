function f() {
  var a = 8
  var g = function () {
    var b = 3
    return function () {
      return (a++) * (b++)
    }
  }
  return g
}

f1 = f()
f2 = f()

g1 = f1()
g2 = f2()



function multiplier(factor) {
  return number => number * factor;
}

let twice = multiplier(2);
console.log(twice(5));//10


