/* 
题目描述
将给定数字转换成二进制字符串。如果字符串长度不足 8 位，则在前面补 0 到满8位。
示例1
输入

65
输出

01000001
 */




function convertToBinary(num) {    
  var s =  num.toString(2);    
  return '00000000'.slice(s.length) + s;
}

function convertToBinary2(num) {
  return str.length < 8 ? str.padStart(8, '0') : str;
}