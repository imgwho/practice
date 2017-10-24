/* 
题目描述
将数组 arr 中的元素作为调用函数 fn 的参数
示例1
输入

function (greeting, name, punctuation) {
  return greeting + ', ' + name + (punctuation || '!');
}, ['Hello', 'Ellie', '!']
输出

Hello, Ellie!

 */

function args(fn, arr) {
  // return fn(...arr)
  return fn.apply(fn, arr)
  // return fn.apply(this, arr)
}



console.log(args['Hello', 'Ellie', '!'])