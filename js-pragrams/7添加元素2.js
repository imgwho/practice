/* 
题目描述
在数组 arr 开头添加元素 item。不要直接修改数组 arr，结果返回新的数组
示例1
输入

[1, 2, 3, 4], 10
输出

[10, 1, 2, 3, 4]
 */
function prepend(arr, item) {
  return [item].concat(arr)
}

console.log(prepend([1, 2, 3, 4], 5))