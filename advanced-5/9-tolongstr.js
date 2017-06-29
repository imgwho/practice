function truncate(str, maxlength) {
  if (str.length > maxlength) {
    var sub1 = str.substr(maxlength, str.length - maxlength)
    str = str.replace(sub1, "...")
  };
  return str
}
console.log(truncate("hello, this is hunger valley,", 10))
console.log(truncate("hello world", 20))