function getChIntv(time) {
  var time = Math.abs(new Date(time).getTime() - Date.now())
  var days = parseInt(time / 86400000)
  var hours = parseInt(time % 86400000 / 3600000)
  var minutes = parseInt((time - (86400000 * days) - (3600000 * hours)) / 60000)
  var seconds = parseInt((time - (86400000 * days) - (3600000 * hours) - (minutes * 60000)) / 1000)
  return (days + "天" + hours + "小时" + minutes + "分钟" + seconds + "秒")
}
var str = getChIntv("2017-05-21")
console.log(str)



function getChsDate(str) {
  var char = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二", "十三", "十四", "十五", "十六", "十七", "十八", "十九", "二十", "二十一", "二十二", "二十三", "二十四", "二十五", "二十六", "二十七", "二十八", "二十九", "三十", "三十一"]
  var arr = str.split('-')
  var year = arr[0]
  var month = arr[1]
  var day = arr[2]
  var cyear = char[parseInt(year[0])] + char[parseInt(year[1])] + char[parseInt(year[2])] + char[parseInt(year[3])] + '年'
  var cmonth = char[parseInt(month)] + '月'
  var cday = char[parseInt(day)] + '日'
  return cyear + cmonth + cday
}
var str = getChsDate('2015-01-08')
console.log(str)



function friendlyDate(time) {
  var now = Date.now(); //Date.now()获取当前时间距离1970年1月1日00:00:00的毫秒数
  past = now - time;
  if (past <= 60 * 1000) {
    return '刚刚'
  }
  if (past > 60000 && past < 3600 * 1000) {
    return Math.floor(past / 60000) + '分钟前'
  }
  if (past >= 3600 * 1000 && past < 24 * 3600 * 1000) {
    return Math.floor(past / (3600 * 1000)) + '小时前'
  }
  if (past >= 24 * 3600 * 1000 && past < 30 * 24 * 3600 * 1000) {
    return Math.floor(past / (24 * 3600 * 1000)) + '天前'
  }
  if (past >= 30 * 24 * 3600 * 1000 && past < 12 * 30 * 24 * 3600 * 1000) {
    return Math.floor(past / (30 * 24 * 3600 * 1000)) + '月前'
  } else {
    return Math.floor(past / (360 * 24 * 3600 * 1000)) + '年前'
  }
}
friendlyDate(1496246400000) //一天前；