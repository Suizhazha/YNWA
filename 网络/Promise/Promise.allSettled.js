//Promise.allSettled实现

Promise.allSettled = function(promises) {
  return new Promise(resolve => {
    var results = []
    var count = 0

    if (promises.length) {
      for (let i = 0; i < promises.length; i++) {
        var promise = promises[i]
        promise.then(value => {
          results[i] = {
            status: 'fulfilled',
            value,
          }
          count++
          if (count === promises.length) {
            resolve(results)
          }
        }, reason => {
          results[i] = {
            status: 'rejected',
            reason,
          }
          count++
          if (count === promises.length) {
            resolve(results)
          }
        })
      }
    } else {
      resolve(results)
    }
  })
}



////////////////////////////////////////////////////////////


//Promise.allSettled使用

Promise.allSettled([getValue(3),getValue(4).then(v=>{throw v})])
.then(
  //results是一个有对象组成的数组，代表每个Promise的最终状态
  results=>{

    //[{status:'fulfilled',value: 3  },{status:'rejected',reason： 4 }]
  console.log(results)
})


function getValue(value) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(value)
    }, 3000 + Math.random() * 2000)
  })
}