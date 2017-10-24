/* 
题目描述
将函数 fn 的执行上下文改为 obj，返回 fn 执行后的值
示例1
输入

alterContext(function() {return this.greeting + ', ' + this.name + '!'; }, {name: 'Rebecca', greeting: 'Yo' })
输出

Yo, Rebecca!

 */

function baz(fn, obj) {
  return fn.call(obj)
  return fn.bind(obj)()
  return fn.apply(obj)
}