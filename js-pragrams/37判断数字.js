/* 
题目描述
给定字符串 str，检查其是否包含数字，包含返回 true，否则返回 false
示例1
输入

'abc123'
输出

true
 */

function foo(str) {
  return str.split('').filter(function (item) {
    return !isNaN(parseInt(item))
  }).length ? true : false
}