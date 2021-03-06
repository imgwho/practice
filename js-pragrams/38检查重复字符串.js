/* 
题目描述
给定字符串 str，检查其是否包含连续重复的字母（a-zA-Z），包含返回 true，否则返回 false
示例1
输入

'rattler'
输出

true
 */

// 在正则表达式中，利用()进行分组，使用斜杠加数字表示引用，\1就是引用第一个分组，\2就是引用第二个分组。将[a-zA-Z]做为一个分组，然后引用，就可以判断是否有连续重复的字母。

function containsRepeatingLetter(str) {
  return /([a-zA-Z])\1/.test(str)
}


/* 题目描述
给定字符串 str，检查其是否以元音字母结尾
1、元音字母包括 a，e，i，o，u，以及对应的大写
2、包含返回 true，否则返回 false
示例1
输入

'gorilla'
输出

true
 */
function end(str) {
  return (/[a, e, i, o, u]$/i.test(str))
}


/* 题目描述
给定字符串 str，检查其是否包含 连续3个数字 
1、如果包含，返回最新出现的 3 个数字的字符串
2、如果不包含，返回 false
示例1
输入

'9876543'
输出

987
 */
function capture(str) {
  var arr = str.match(/\d{3}/)
  return (arr && arr[0] || false)
}


/* 题目描述
给定字符串 str，检查其是否符合如下格式
1、XXX-XXX-XXXX
2、其中 X 为 Number 类型
示例1
输入

'800-555-1212'
输出

true
 */

// 开头^和结尾$必须加上来限定字符串，3个数可表示为\d{3}，4个数则为\d{4}，{n}表示前面内容出现的次数。正则表达式可写作/^\d{3}-\d{3}-\d{4}$/，有相同部分\d{3}-，因此也可写作/^(\d{3}-){2}\d{4}$/
function match(str) {
  return /^(\d{3}-){2}\d{4}$/.test(str)
}


/* 题目描述
给定字符串 str，检查其是否符合美元书写格式
1、以 $ 开始
2、整数部分，从个位起，满 3 个数字用 , 分隔
3、如果为小数，则小数部分长度为 2
4、正确的格式如：$1,023,032.03 或者 $2.03，错误的格式如：$3,432,12.12 或者 $34,344.3
示例1
输入

'$20,933,209.93'
输出

true
 */

// 本题注意点有必须是USD格式，以$开头，数字结尾，$和小数点的转义。
// 首先，开头必是$，而正则表达式中$表示结尾，需要进行转义，因此开头为^\$
// 然后$后必然接数字，并且最少一位，最多三位数，可用{m,n}表示,最少m位，最多n位，因此此段为\d{1,3}
// 接着，后面如还有数，则必然有，分隔，并且后面必有3个数，类似于，XXX的格式会出现0或者n次，因此此段可表示为(,\d{3})*
// 最后，如有小数部分，则注意对小数点进行转义，此段可表示为(\.\d{2})?
// 因此，最后的正则表达式为/^\$\d{1,3}(,\d{3})*(\.\d{2})?$/
// 使用test方法去检测str

function isUSD(str) {
  return /^\$\d{1,3}(,\d{3})*(\.\d{2})?$/.test(str)
}