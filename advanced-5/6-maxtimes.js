var stringUtil = {};
stringUtil.getMaxLengthCharacter = function (s) {
  var info = {},
    getObj, getMaxLength;
  //把字符和出现次数存放在对象中
  getObj = (function (s) {
    var obj = {};
    for (var i = 0, j = s.length; i < j; i++) {
      if (obj[s[i]]) {
        obj[s[i]] += 1;
      } else {
        obj[s[i]] = 1;
      }
    };
    return obj;
  })(s);
  console.log(getObj);
  //考虑到一个字符串中次数最多的可能不止一个，所以需要找出最大数
  getMaxLength = (function () {
    var max = 0;
    for (var i in getObj) {
      if (getObj[i] > max) {
        max = getObj[i];
      }
    };
    return max;
  })();
  console.log(getMaxLength);

  for (var i in getObj) {
    if (getObj[i] === getMaxLength) {
      info[i] = getObj[i];
    }
  };
  return info;
}
//调用
stringUtil.getMaxLengthCharacter("adbgggghjkkkk");