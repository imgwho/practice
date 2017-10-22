//何时使用 === 何时使用 ==
if (obj.a == null) {
  //这里相当于 obj.a === null || obj.a === undefined
}

//有哪些内置函数
Object
Array
Boolean
Number
String
Function
Date
RegExp
Error


//变量按照存储方式分类
//值类型
var a = 10
var b = a
a = 11
consoole.log(b) //10

//引用类型
var obj1 = {x: 100}
var obj2 = obj1d
obj1.x = 200
console.log(obj2.x)  //200
//内存问题

