let canvas=document.getElementById('canvas')

//js获取屏幕宽高

canvas.height=document.documentElement.clientHeight
canvas.width =document.documentElement.clientWidth

let ctx=canvas.getContext('2d')

//默认不画，鼠标按下时开始画
let padding=false

ctx.fillStyle = "black"
ctx.strokeStyle = 'none'
ctx.lineCap = 'round'
ctx.lineWidth= 10

canvas.onmousedown=()=>{
  padding=true
}

//画线
function drawLine(x1,y1,x2,y2) {
  ctx.beginPath()
  ctx.moveTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.stroke()
}
//检测移动端触屏事件
let last
let isTouchDevice = 'ontouchstart' in document.documentElement

if (isTouchDevice){
  canvas.ontouchstart =(e)=>{
    //多个手指触屏
    let x=e.touches[0].clientX
    let y=e.touches[0].clientY
    last = [x,y]
  }
canvas.ontouchmove =(e)=>{
  let x=e.touches[0].clientX
  let y=e.touches[0].clientY
  drawLine(last[0],last[1],x,y)
  last=[x,y]

}
}else {
  canvas.onmousedown=(e)=>{
    padding=true
    last=[e.clientX,e.clientY]//记录鼠标上一次位置
  }
  canvas.onmousemove = (e) => {
    if (padding) {
      drawLine(last[0],last[1],e.clientX,e.clientY)
      last=[e.clientX,e.clientY]
      }
    }
    canvas.onmouseup = () => {
      padding = false
    }
}
