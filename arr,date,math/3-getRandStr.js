// function getRandStr(len){
//   //补全函数
// }
// var str = getRandStr(10); // 0a3iJiRZap
// var str = '';
// for (var i = 65, j = 97; i < 91, j < 123; i++, j++) {
//   str += String.fromCharCode(i) + String.fromCharCode(j);
// }

// console.log(str)


function random_str(len) {
  var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
  var max = chars.length
  var str = ''
  for (var i = 0; i < len; i++) {　　　　
    str += chars.charAt(Math.floor(Math.random() * max))
  }
  return str
}

console.log(random_str(100))


// function generateUIDNotMoreThan1million() {
//     return ("0000" + (Math.random()*Math.pow(36,4) << 0).toString(36)).slice(-4)
// }

// console.log(generateUIDNotMoreThan1million())