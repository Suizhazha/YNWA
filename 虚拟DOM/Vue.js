const vNode = {
  tag:'div',
  data:{
    class:'red',
    on:{
      click:()=>{}
    }
  },
  children:[
    {tag:'span',...},
    {tag:'span',...}
  ],
    ...
}

//创建虚拟DOM
//Vue只能在render函数中得到h
// 1 传统
h('div',{
  class: 'red',
  on: {
    click:()=>{}
  },
},
  [ h('span',{},'span1'),
    h('span',{},'span2')]
  )

// 2 使用Vue Template  通过vue-loader 转为 h 形式
<div className = 'red' @Click = 'fn'>
  <span>span1</span>
  <span>span2</span>
</div>