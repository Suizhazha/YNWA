const vNode = {
  key: null,
  props:{
    children:[
      {type:'span',...},
      {type:'span',...}
    ],
    className:'red',
    onclick:()=>{}
  },
  ref:null,
  type:'div',   //标签名 或 组件名
  ...
}

//创建虚拟DOM
// 1 传统
React.createElement('div',{
  className:'red',onClick:()=>{}
  },
  [
    React.createElement('span',{},'span1'),
    React.createElement('span',{},'span2')
  ]
)
// 2 使用React JSX  通过babel转为createElement
<div className = 'red' onClick = {fn}>
  <span>span1</span>
  <span>span2</span>
</div>