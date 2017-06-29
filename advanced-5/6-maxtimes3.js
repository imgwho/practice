function findMaxTimes(str) {    
  var tmp = str.split('').sort().join('')
  var key = ''
  var times = 0
  var re = /(\w)\1+/g
  tmp.replace(re, function ($0, $1) {
    if (times < $0.length) { 
      times = $0.length
      key = $1
    }
  })

  console.log(key + ":" + times)

  return {
    key: key,
    times: times
  }
  
}

var str = "sssfgtdfssddfsssfssss"
findMaxTimes(str)
