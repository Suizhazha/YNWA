//返回node及其内容中有没有出现过text
function talksAbout(node, text) {
  for (let i = 0; i < node.childNodes.length; i++) {
    let child = node.childNodes[i]
    if (child.nodeType === document.TEXT_NODE) {
      if (child.nodeValue.includes(text)) {
        return true
      } else if (child.nodeType === document.ELEMENT_NODE) {
        if (talksAbout(child, text)) {
          return true
        }
      }
      return false
    }
  }
}

function talksAbout(node, string) {
  if (node.nodeType == document.ELEMENT_NODE) {
    for (let i = 0; i < node.childNodes.length; i++) {
      if (talksAbout(node.childNodes[i], string)) {
        return true;
      }
    }
    return false;
  } else if (node.nodeType == document.TEXT_NODE) {
    return node.nodeValue.indexOf(string) > -1;
  }
}

console.log(talksAbout(document.body, "book"));
// → true


//实现getElementsByTagName

function getElementsByTagName(node,name) {
  let result = []
  for (let i = 0; i <node.children.length ; i++) {
    let child = node.children[i]
    if (child.tagName === name){
      result.push(child)
    }
    result.push(...getElementsByTagName(child,name))
  }
  return result
}

getElementsByTagName(document.body,'DIV')



