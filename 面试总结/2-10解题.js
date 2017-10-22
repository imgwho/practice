// 1. 如何判断一个变量是数组类型
var arr = []
arr instanceof Array
typeof arr //object, typeof 是无法判断是否是数组的



// 2. 写一个原型继承例子
function Elem(id) {
  this.elem = document.getElementById(id)
}

Elem.prototype.html = function (val) {
  var elem = this.elem
  if (val) {
    elem.innerHTML = val
    return this
  } else {
    return elem.innerHTML
  }
}

Elem.prototype.on = function (type, fn) {
  var elem = this.elem
  elem.addEventListener(type, fn)
  return this
}

var div1 = new Elem('wrapper')
div1.html('<p>hello</p>').on('click', function () {
  alert('clicked')
}).html('<p>javascript</p>')

// 3. 描述new 一个对象的过程(就是构造函数的理解)
//创建一个对象
//this指向这个对象
//执行代码  即对this赋值
//返回this
function Foo(name, age) {
  this.name = name 
  this.age = age
  this.class = 'class-1'
  //return this   构造函数最好不要写return
}

var f = new Foo('zs', 20)
