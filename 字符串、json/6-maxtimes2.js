// 1.字符串转为数组进行排序，以便正则选出相同的挨在一起的字符
// 2.通过正则replace()方法的两个参数，来匹配出现最多的字符和数量
var str = "sssfgtdfssddfsssfssss"
var num = 0
var value = null

function max() {
  var new_str = str.split("").sort().join("")
  var re = /(\w)\1+/g; //没有\1,re就是一整个排好序的字符串，有了\1就是出现过的有重复的取出来，\1表示跟前面第一个子项是相同的
  new_str.replace(re, function ($0, $1) { //$0代表取出来重复的一个个整体，如[s,s...],[f,f..],[d,d....] $1代表这个整体里的字符
    if (num < $0.length) {
      num = $0.length
      value = $1
    }
  })
  console.log(value + ":" + num)
}
max(str)