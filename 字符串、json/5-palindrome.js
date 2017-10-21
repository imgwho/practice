function palindrome(str) {
  // Good luck!
  var newStr = str.replace(/\W+/g, ''); //匹配所有非单词的字符，替换为空字符串
  newStr = newStr.replace(/\_+/g, ''); //匹配所有下划线，替换为空字符串 
  newStr = newStr.toLowerCase();
  //转化字符串为小写
  var arr1 = newStr.split('');;
  var arr2 = arr1.reverse();

  var newStr2 = arr2.join('');
  //重构倒序的字符串

  if (newStr == newStr2) { //比较1
    return true;
  } else {
    return false;
  }
}


// function palindrome(str) {
//   return str.replace(/[\W_]/g, '').toLowerCase() === str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('')
// }

console.log(palindrome('abcdcba'))
console.log(palindrome("今天好开心开好天今"))
console.log(palindrome('abcdcba'))
console.log(palindrome('3653745856'))