//Promise 比async.js和任务队列，更简洁的展示了成功和失败的两种情况

//promise大体的写法
class Promise {
  constructor(executor) {
    function resolve() {
    }
    function reject() {

    }
    try {
      executor(resolve(), reject())
    } catch (e) {

    }
  }
}

//一个 promise 代表异步操作的结果
let p = new Promise(function (resolve, reject) {
  let xhr = new XMLHttpRequest()
  xhr.open('GET', a.text)

  xhr.onload = function () {
    if (xhr.status < 400) {
      resolve(xhr.responseText)
    } else {
      reject({
        errno: xhr.status,
        response: xhr.responseText
      })
    }
  }
  xhr.onerror = function (e) {
    reject(e)
  }

  xhr.send()

})

//then返回一个新的Promise,而不是p所在的Promise
p.then(
  //函数名可不写，this被刻意设成window,所以可以用箭头函数
  // function onResolved(){
  //
  // },
  // function onRejected(){
  //
  // }
  (value) => {

  },
  (error) => {

  }
)

//此时p2取p的状态，p成功p2则成功，p失败p2则失败
let p2 = p.then()


//可以挂多组
p.then(
  (success) => {

  },
  (error) => {

  }
)


//方方版

ajax = (methods,url,options)=>{
  return new Promise((resolve,reject) =>{
    const {success,fail} = options//可省略
    let xhr = new XMLHttpRequest()
    xhr.open('get','/xxx')
    xhr.onreadystatechange = ()=>{
      if (xhr.readyState ===4){
        //成功调用resolve，失败调用reject
        if (xhr.status<400){
          resolve.call(null,xhr.response)
        }else if (xhr.status>= 400){
          reject.call(null,xhr)
        }
      }
    }
    xhr.send()
  })
}

ajax('GET','/xxx').then(
  (response)=>{},(request)=>{}
)