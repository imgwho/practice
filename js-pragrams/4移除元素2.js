/* 题目描述
移除数组 arr 中的所有值与 item 相等的元素，直接在给定的 arr 数组上进行操作，并将结果返回
示例1
输入

[1, 2, 2, 3, 4, 2, 2], 2
输出

[1, 3, 4] */

function remove(arr, item) {
  for(var i = arr.length - 1; i >= 0; i --) {
    if(arr[i] === item) {
      arr.splice(i, 1)
    }
  }
  return arr
}

function remove2(arr, item) {
  while(arr.indexOf(item)!== -1) {
    arr.splice(arr.indexOf(item), 1)
  }
  return arr
}

function remove3(arr, item) {
  arr.forEach((va, index) => {
    if (va === item) {
      arr.splice(index, 1);
    }
    return arr - 1
  })
  return arr
}

console.log(remove([1, 2, 2, 3, 4, 2, 2], 2))
console.log(remove2([1, 2, 2, 3, 4, 2, 2], 2))
console.log(remove3([1, 2, 2, 3, 4, 2, 2], 2))
