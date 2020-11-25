//创建一个值为val的树节点
function  createTreeNode(val) {
return {
  left:null,
  right:null,
  val:val
}
}
//将数组中根节点在i位置的树转换成用链式表法的二叉树
function arr2tree(arr,i=0) {

  if(arr[i]===null||arr[i]===undefined)
    return null
  let root=createTreeNode(arr[i])
  root.left = arr2tree(arr,2*i+1)
  root.right = arr2tree(arr,2*i+2)
  return root
}

arr2tree([1,2,3,null,null,6,null,8])

arr2tree([1,2,3,4,5,6,7,8])

//将使用链式表达法表达的二叉树转换成数组方式表达

function tree2arr(root,arr = [],index=0) {
  if (root===null){
    return
  }
arr[index]=root.val
tree2arr(root.left,arr = [],index*2+1)
tree2arr(root.right,arr = [],index*2+2)
return arr
}

let tree=arr2tree([1,2,3,4,5,6,7,8])
tree2arr(tree)


//将二叉树转换为紧凑表示的数组

function treeToarr(root,index=0) {
if (root===null )
return root
}







 