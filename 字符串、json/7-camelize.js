function cssStyle2DomStyle(str) {    
  //使用正则将 前一位有-的字符替换为大写【-([a-z])】 
  //replace第二个参数为函数时：
  //函数的第一个参数是匹配模式的字符 【t】
  //接下来的参数是与模式中的子表达式匹配的字符，可以有0个或多个这样的参数。【m】
  //接下来的参数是一个整数，代表匹配在被替换字符中出现的位置【i】
  //最后一个参数是被替换字符本身【这里没有用到】
  return str.replace(/-([a-z])/g, function (t, m, i) {
    return i ? m.toUpperCase() : m
  })

}

var str = 'list-style-image'
result = cssStyle2DomStyle(str)
console.log(result)   //listStyleImage