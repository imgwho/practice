/* 
题目描述
合并数组 arr1 和数组 arr2。不要直接修改数组 arr，结果返回新的数组
示例1
输入

[1, 2, 3, 4], ['a', 'b', 'c', 1]
输出

[1, 2, 3, 4, 'a', 'b', 'c', 1]

 */
function concat(arr1, arr2) {
  return arr1.concat(arr2)
}

console.log(concat([1, 2, 3, 4], ['a', 'b', 'c', 'd']))