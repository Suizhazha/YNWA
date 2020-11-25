var net = require('net')

var server = net.createServer()
var port = 80

server.on('connection', conn => {
  global.conn = conn

  console.log(conn.address(), 'comes in')

  conn.on('data', data => {
    var d = data.toString()
    var lines = d.split('\r\n')
    var firstLine = lines.shift()
    var firstLinePart = firstLine.split(' ')

    console.log(firstLinePart)

    conn.write('HTTP/1.1 200 OK\r\n')
    conn.write('Content-Type: text/plain\r\n')
    conn.write('\r\n')
    conn.write(`<h1>
      you are visiting ${firstLinePart[1]}, use ${firstLinePart[0]} method
      it's now ${new Date()}
      <img src="a.jpg" >
    </h1>`)
    conn.end()
  })

  conn.on('error', () => {})

})

server.listen(port, () => {
  console.log('listening on port', port)
})
