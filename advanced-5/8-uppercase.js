const fn = (str) => {
  return str.charAt(0).toUpperCase(str.charAt(0)) + str.substring(1)
}
let str = "hello jiRenGu"
console.log(fn(str))