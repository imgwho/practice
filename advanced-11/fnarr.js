var fnArr = []

for (var i = 0; i < 10; i++) {
  (function (n) {
    fnArr[n] = function () {
      return n
    }
  })(i)
}

for (var i = 0; i < 10; i++) {
  (function (n) {
    var n = i
    fnArr[n] = function () {
      return n
    }
  }())
}