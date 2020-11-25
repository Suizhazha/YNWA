let count = 0
for (let i = 1; i <= 10; i++) {
  count += i
}
console.log(count)//55


//forEach
function forEach(arr, action) {
  for (let i = 0; i < arr.length; i++) {
    action(arr[i])
  }
}

let sum = 0
forEach([1, 2, 3, 4], function (value) {
  sum += value
})
console.log(sum)


//foreach第二三个参数
function forEach(arr, action) {
  for (let i = 0; i < arr.length; i++) {
    action(arr[i]，i，arr)
  )
  }
}

let sum = 0
forEach([1, 2, 3, 4], function (value, index, arr) {
  console.log(value, index, arr)
})


//unless是假才执行
function unless(test, then) {
  if (!test) then()
}

function repeat(times, body) {
  for (let i = 0; i < times; i++) {
    body[i]
  }
}

repeat(3, n => {
  unless(n % 2 === 1, () => {
    console.log(n)
  })
})






