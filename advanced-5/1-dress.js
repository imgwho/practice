//  转义字符
//  \'	单引号
//  \"	双引号
//  \&	和号
//  \\	反斜杠
//  \n	换行符
//  \r	回车符
//  \t	制表符
//  \b	退格符
//  \f	换页符

var prod = {
  name: '女装',
  styles: ['短款', '冬季', '春装']
}

var arr = []

function getStr(data) {
  arr.push('<dl class="product"><dt>')
  arr.push(data.name + '</dt>')
  for (var i in data.styles) {
    arr.push("<dd>" + data.styles[i] + "</dd>")
  }
  arr.push("</dl>")
  return arr.join('')
}
var result = getStr(prod)
console.log(result)

{ /*<dl class="product"><dt>女装</dt><dd>短款</dd<dd>冬季</dd><dd>春装</dd></dl>*/ }