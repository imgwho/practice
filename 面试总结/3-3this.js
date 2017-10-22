var a = {
  name: 'A',
  fn: function () {
    console.log(this.name)  //这个阶段的this无法确定值
  }
}


a.fn()                  //this === a
a.fn.call({name: 'B'})  //this === {name: 'B'}
var fn1 = a.fn
fn1()                   //this === window

//作为构造函数执行
function Foo(name) {
  // this = {}
  this.name = name
  // return this
}
var f = new Foo('zs')
//作为对象属性执行
var obj = {
  name: 'A',
  printName: function () {
    console.log(this.name)    //这里this就是obj
  }
}
obj.printName
//作为普通函数执行
function fn() {
  console.log(this)       //这里的this就是window
}
fn
//call apply bind
function fn1(name, age) {
  console.log(name)
  console.log(this)       //这里的this是{x:100}
}
fn1.call({x:100}, 'zs', 20)


var fn2h = function fn2(name, age) {
  console.log(name)
  console.log(this)       //这里的this是{x:100}
}.bind({y:200})
fn2('zs', 20)