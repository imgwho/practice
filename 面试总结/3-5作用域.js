//不断向父级作用域寻找变量的过程形成了作用域链
//没有块级作用域概念
if (true) {
  var name = 'zs'
}
console.log(name)


//函数、全局作用域
var a = 10
function fn() {
  var a = 200
  console.log('fn', a)
}
console.log('global', a)
fn()


var b = 100
function fn() {
  var c = 200

  console.log(b)  //当前作用域没有定义的变量叫做自由变量
  console.log(c)  
}
fn()

var a = 100
function f1() {
  var b = 200
  function f2() {
    var c = 300

    console.log(a)
    console.log(b)
    console.log(c)
  }
  f2()
}
f1()
//哪个作用域定义了f1这个函数,f1的父级作用域就是谁