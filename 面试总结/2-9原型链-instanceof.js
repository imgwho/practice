//instanceof 是用于判断引用类型属于哪个构造函数的方法
//构造函数
function Foo(name, age) {
  this.name = name
}

Foo.prototype.alertName = function () {
  alert(this.name)
}

//创建实例
var f = new Foo('zs')
f.printName = function () {
  console.log(this.name)
}


f.printName()
f.alertName()
f.toString()


// f instanceof Foo 判断过程：
// f 的 __proto__一层层往上找到是否对应Foo.prototype
// 再判断f instanceof Object