/* 
题目描述
实现函数 closure，调用之后满足如下条件：
1、返回一个函数数组 result，长度与 arr 相同
2、运行 result 中第 i 个函数，即 result[i]()，结果与 fn(arr[i]) 相同
示例1
输入

[1, 2, 3], function (x) { 
	return x * x; 
}
输出

4

 */

function closure(arr, fn) {
  return arr.map(function (item) {
    return function () {
      return fn(item)
    }
  })
}



function closure2(arr, fn) {    
  return arr.map(function (item) {       
    return fn.bind(this, item)    
  })
}


var makeClosures = (arr, fn) => arr.map((num, idx) => fn.bind(null, num))