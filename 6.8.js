let array = []
function tree2arr(root,index = 0) {
  array[index]=root.value
  tree2arr(root,n*2+1)
  tree2arr(root,n*2+2)
}

