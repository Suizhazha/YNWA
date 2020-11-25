var p = new Promise(function (resolve, reject) {
  reject()
})

//p2的值由value和reason的返回值确定
var p2 = p.then(value => {
  throw 8
}, reason => {
  return 999
})

//p2的值由value和reason的返回值确定
p2.then(value => {//999
  console.log(value)
}, reason => {
  console.log(reason)
})


// p3的值由value和reason的返回值确定
var p3 = p2.then(value => {
  console.log(value)
}, reason => {
  console.log(reason)
})

//因为p3没有抛出错误，都成功返回undefined
p3.then(
  value => {
    console.log(value)
  },
  reason => {
    console.log(reason)
  }
)


/////////////////////////////////////

var p = new Promise(function (resolve, reject) {
  resolve()
})

//success
p.then(value => {
  console.log(1)//1
  throw 5
}, reason => {
  console.log(reason)
  return 8
})
  .then(value => {
    console.log(value)
    return 7
  }, reason => {
    console.log(reason)//5
  })
  .then(value => {
      return value * value//NaN
    },
    reason => {
      console.log(reason)
      return 9
    })


////////////////////////////////

var p = new Promise(function (resolve, reject) {
  resolve(666)
})
//resolve by 666
p.then(value => {
    console.log(1)//1
    return 5
  })
  .then(value => {
    console.log(value)//5
    throw 7
  })
  .then(value => {
    return value * value
  }, reason => {
    console.log(reason)//7
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(888)
      }, 1000)//1秒后失败，跳到下一个then
    })
  })

  //无失败函数，跳到下一个
  .then(value => {
    console.log(value)
  })

  //一秒后log  888
  .then(null, reason => {
    console.log(reason)//888
  })


/////////////////////////////////////////////

//resolve by 666
p.then(value => {
  console.log(1)//1
  return 5
})
  .then(value => {
    console.log(value)//5
    new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(888)
      }, 1000)//1秒后失败，跳到下一个then
    })
  })
  .then(value => {
    return value * value//NaN.  没有return，返回undefined
  }, reason => {
    console.log(reason)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(888)
      }, 1000)
    })
  })


  .then(value => {
    console.log(value)//NaN
  })


  .then(null, reason => {
    console.log(reason)
  })


//////////////////

//5秒后调用then，打印出1
function sleep(time) {
return new Promise(resolve=>{
  setTimeout(()=>{
    resolve()
  },time)
})
}

sleep(5000).then(()=>{
  console.log(1)
})