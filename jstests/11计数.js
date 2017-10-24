/* 
题目描述
统计数组 arr 中值等于 item 的元素出现的次数
示例1
输入

[1, 2, 4, 4, 3, 4, 3], 4
输出

3

 */



/* function count(arr, item) {
  var j = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      j++;
    }
  }
  return j
} */



/* function count(arr, item) {
    return arr.reduce(function(prev,curr){
        return curr === item ? ++ prev : prev
    },0)
} */

function count(arr, item) {
  return arr.filter(function(x) {
    return x === item
  }).length
}

console.log(count([1, 2, 4, 4, 3, 4, 3], 4))