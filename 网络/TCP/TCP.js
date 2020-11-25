let server = net.createServer()//创建TCP服务对象
let port = 5555

server.on('connection',conn =>{
  //有客户端连接成功时运行，conn为表示该连接的对象
  console.log(conn.address(),'come in')
  conn.write('hello!')//向对方发送数据
  conn.on('data',data=>{//该连接上 发来数据时触发的事件及函数
    console.log(conn.address(), 'says', data.toString())
  })
})

server.listen(port,()=>{ //让服务套接字监听port端口
  console.log('listening on port',port)//监听成功后运行
})

conn = net.connect(5555,'10.3.3.3')

conn.write('suixin')

conn.on('data',data =>{
  console.log(data.toString())
})