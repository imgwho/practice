/* 题目描述
找出元素 item 在给定数组 arr 中的位置
输出描述:
如果数组中存在 item，则返回元素在数组中的位置，否则返回 -1
示例1
输入

[ 1, 2, 3, 4 ], 3
输出

2 */

function indexOf(arr, item) {
  return arr.indexOf(item)
}

console.log(indexOf([1, 2, 3, 4], 5))