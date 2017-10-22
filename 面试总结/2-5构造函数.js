function Foo(name, age) {
  this.name = name
  this.age = age 
  this.class = 'class-1'
  //return this  默认有这行
}

var f = new Foo('zs', 20)

//执行过程：1.new函数执行时this会变成空对象 2.this. 的时候赋值 3.return this 4.赋值给f


//var a = {}         ===> var a = new Object()
//var a =[]          ===> var a = new Array()
//function Foo(){}   ===> var Foo = new Function()
//instanceof 判断一个函数是否是一个变量的构造函数