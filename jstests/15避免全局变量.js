// 题目描述
// 给定的 js 代码中存在全局变量，请修复

function global() {
  //加上var
  var myObject = {
    name: 'holy'
  }
  console.log(myObject)
  return myObject
  console.log(myObject)
}

global()
