/* 
题目描述
将函数 fn 的执行上下文改为 obj 对象
示例1
输入

function () {return this.greeting + ', ' + this.name + '!!!'}, {greeting: 'Hello', name: 'Rebecca'}
输出

Hello, Rebecca!!!

 */

function speak(fn, obj) {
  return fn.apply(obj)
  return fn.call(obj)
  return fn.bind(obj)()
}