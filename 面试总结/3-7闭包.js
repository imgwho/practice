//闭包应用：1.函数作为返回值
function F1() {
  var a = 100

  //返回一个函数  
  return function () {
    console.log(a)
  }
}

//f1得到一个函数
var f1 = F1()
var a = 200
f1()


//2.函数作为参数传递
function F1() {
  var a = 100
  return function() {
    console.log(a)
  }
}

var f1 = F1()

function F2(fn) {
  var a = 200
  fn()
}
F2(f1)