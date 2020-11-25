function get(url, success) {
  var xhr = new XMLHttpRequest()
  xhr.open('GET', url)
  xhr.addEventListener('load', e => {//请求，响应流程正常结束 
    success(JSON.parse(xhr.responseText))
  })
  xhr.addEventListener( 'error',()=>{//网络完全不通

  })
  xhr.send()
}



function post(url, data, success) {
  var xhr = new XMLHttpRequest()
  xhr.open('POST', url)
  xhr.addEventListener('load', e => {
    success(JSON.parse(xhr.responseText))
  })
  xhr.send(data)
}