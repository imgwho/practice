function jump(num) {
  var f = 1,g = 2
  while (--num > 0) {
    g += f
    f = g -f
  }
  return f
  console.log(f)
}

jump(20)