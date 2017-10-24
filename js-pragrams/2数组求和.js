/* 题目描述
计算给定数组 arr 中所有元素的总和
输入描述:
数组中的元素均为 Number 类型
示例1
输入

[ 1, 2, 3, 4 ]
输出

10 */

function sum(arr) {
  return arr.reduce(function(sum, value) {
    return sum + value
  },0)
}

console.log(sum([0, 1, 2, 3]))