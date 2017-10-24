/* 
题目描述
找出数组 arr 中重复出现过的元素
示例1
输入

[1, 2, 4, 4, 3, 3, 1, 5, 3]
输出

[1, 3, 4]

 */

/* function duplicates(arr) {
  var a = arr.sort(), b = []
  for(var i in a) {
    if(a[i] === a[i - 1] && b.indexOf(a[i]) === -1) b.push(a[i])
  }
  return b
} */



function duplicates(arr) {        
  arr.sort()
  var newarr = []
  for (var i = 0; i < arr.length; i++) {
    //如果元素第一次出现，并且不是最后一次出现    
    if (arr.indexOf(arr[i]) === i && arr.lastIndexOf(arr[i]) != i)newarr.push(arr[i])            
  }    
  return newarr
}

/* function duplicates(arr) {
  var hash = {}, ret = {}
  arr.forEach(function(v) {
    hash[v] ? ret[v] =1 : hash[v] =1
  })
  return Object.keys(ret)
} */

console.log(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3]))