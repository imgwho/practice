/* 
题目描述
删除数组 arr 最后一个元素。不要直接修改数组 arr，结果返回新的数组
示例1
输入

[1, 2, 3, 4]
输出

[1, 2, 3]
 */


function truncate(arr) {
  return arr.slice(0, arr.length - 1)
}

console.log(truncate([1, 2, 3, 4]))