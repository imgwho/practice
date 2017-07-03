// function getRandIP() {
//   function getRand(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min)
//   }

//   return getRandIP(0, 255)
// }

// var ip = getRandIP()

// console.log(ip) // 10.234.121.45


// function getRandIP() {
//   function ipPart(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min)
//   }
//   return ipPart(0, 255) + '.' + ipPart(0, 255) + '.' + ipPart(0, 255) + '.' + ipPart(0, 255)
// }

// console.log(getRandIP())

function getRandIP(){
  function ipPart() {
    return Math.floor(Math.random() * 256)
  }
  return ipPart(0) + '.' + ipPart() + '.' + ipPart() + '.' + ipPart()
}
var ip = getRandIP()
console.log(ip) // 10.234.121.45