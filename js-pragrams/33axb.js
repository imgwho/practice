/* 
题目描述
求 a 和 b 相乘的值，a 和 b 可能是小数，需要注意结果的精度问题
示例1
输入

3, 0.0001
输出

0.0003

 */

 function multiply(a, b) {
   var reg = /\d*[\.\d]/
   var la = a.toString().replace(reg, '').length
   var lb = b.toString().replace(reg, '').length
    return (a * b).toFixed(la + lb)
 }