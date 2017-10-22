function isFirstLoad() {
  var _list = []
  return function (id) {
    if (_list.indexOf(id) >=0) {
      return false
    } else {
      _list.push(id)
      return true
    }
  }
}

var firstLoad = isFirstLoad()
console.log(firstLoad(10))
console.log(firstLoad(10))
console.log(firstLoad(20))
console.log(firstLoad(20))