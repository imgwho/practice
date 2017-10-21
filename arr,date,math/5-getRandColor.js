function getRandColor(){
  var char = '0123456789abcdef'
  var str = ''
  for (var i = 0; i < 6; i++) {
    str += char[Math.floor(Math.random() * char.length)]
  }
  return "#" + str
}
var color = getRandColor()
console.log(color)   // #3e2f1b