/* 
题目描述
在数组 arr 中，查找值与 item 相等的元素出现的所有位置
示例1
输入

[1, 2, 3, 4, 5, 1, 1], 1
输出

[0, 5, 6]

 */

function find(arr, target) {
  var newarr = []
  arr.map(function (value, index) {
    if (value === target) newarr.push(index)
  })
  return newarr
}

console.log(find([1, 2, 3, 4, 5, 1, 1], 1))