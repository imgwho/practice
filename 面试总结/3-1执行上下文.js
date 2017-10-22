//执行上下文：当前被执行代码的环境/作用域
console.log(a)
var a = 100

fn('zs')
//函数声明
function fn(name) {

  console.log(this)
  console.log(arguments)

  age = 20
  console.log(name, age)
  var age

  bar(100)

  function bar(num) {
    console.log(num)
  }
}
//函数表达式： var fn = function () {}


//在全局代码执行前，会将变量定义和函数声明先提出来
//在函数代码执行前，会将变量定义，函数声明，this，arguments(所有参数的集合)先提出来