/* 
题目描述
函数 useArguments 可以接收 1 个及以上的参数。请实现函数 useArguments，返回所有调用参数相加后的结果。本题的测试参数全部为 Number 类型，不需考虑参数转换。
示例1
输入

1, 2, 3, 4
输出

10

 */


// 先将arguments数组化,再reduce()
function useArguments() {    
  return Array.prototype.slice.call(arguments).reduce(function (a, b) {        
    return a + b
  })
}

// var useArguments = (...args) => args.reduce((a,b) => a+b)