/* 题目描述
移除数组 arr 中的所有值与 item 相等的元素。不要直接修改数组 arr，结果返回新的数组
示例1
输入

[1, 2, 3, 4, 2], 2
输出

[1, 3, 4] */

function remove(arr, item) {
  return newarr = arr.filter(ele => !(ele === item))
}
console.log(remove([1,2,3,4,6,2],2))