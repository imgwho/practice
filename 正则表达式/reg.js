// 去除字符串两边的空白字符
function trim(str) {
  str = str.replace(/^\s+|\s+$/g, "")
}


//判断邮箱
function isEmail(str) {
  // 第一部分：由字母、数字、下划线、短线“-”、点号“.”组成， 
  // 第二部分：为一个域名，域名由字母、数字、短线“-”、域名后缀组成， 
  // 而域名后缀一般为.xxx或.xxx.xx，
  let reg = /^(\w+(\.\w+)*@\w+(\.\w+)+|)$/
  return reg.test(str)
}


//判断手机号
function isPhoneNum(str) {
  let reg = /^1[3,5,7,8,9]\d{9}$/
  return reg.test(str)
}


//判断合法用户名（长度6-20个字符，只能包括字母、数字、下划线）
function isValidUsername(str) {
  let reg = /^\w{6,20}$/
  return reg.test(str)
}


//判断合法用户名（长度6-20个字符，只包括大写字母、小写字母、数字、下划线，至少包括两种）
function isValidPassword(str) {
  if (str.length < 6 || str.length > 20 || /\W/.test(str) == true) {
    return false
  }
  if (/^[0-9]+$/.test(str) == true) return false
  if (/^[a-z]+$/.test(str) == true) return false
  if (/^[A-Z]+$/.test(str) == true) return false
  if (/^_+$/.test(str) == true) return false
  return true
}


//获取颜色
var re = /#[0-9a-f]{6}/ig
var subj = "color: #121212; background-color: #AA00ef; width: 12px; bad-colors: f#fddee "
console.log( subj.match(re) )  // ['#121212', '#AA00ef']


// 下面代码输出什么? 为什么? 改写代码，让其输出
// [""hunger"", ""world""].
// var str = 'hello  "hunger" , hello "world"'
// var pat =  /".*"/g
// str.match(pat)
//以上代码是贪婪模式，所以尽量匹配第一个"到最后一个"的内容
// 以下代码是非贪婪模式，输出[ '"hunger"', '"world"' ]

var str = 'hello  "hunger" , hello "world"'//非贪婪模式
var pat =  /".*?"/g
console.log(str.match(pat))