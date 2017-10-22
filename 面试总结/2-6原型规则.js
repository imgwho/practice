//所有的引用类型（数组、对象、函数）都具有对象特性，除了null之外，都可以自由扩展属性
//所有的引用类型 都有__proto__ 隐式原型
//所有的函数都有 prototype 显式原型   属性值也是一个普通对象
//所有的引用类型（数组、对象、函数），__proto__属性值指向它的构造函数的prototype属性值
var obj = {}; obj.a = 100
var arr = []; arr.a = 100
function fn () {}
fn.a = 100

console.log(obj.__proto__)
console.log(arr.__proto__)
console.log(fn.__proto__)

console.log(fn.prototype)

console.log(obj.__proto__ === Object.prototype)


//试图得到一个对象的某个属性时，如果这个对象本身没有这个属性，那么会去它的__proto__(构造函数的prototype)中寻找
function Foo(name, age) {
  this.name = name
}

Foo.prototype.alertName = function () {
  alert(this.name)
}

var f = new Foo('zs')
f.printName = function () {
  console.log(this.name)
}

f.printName()
f.alertName()