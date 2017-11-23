var x = 10
bar()

function foo() {
  console.log(x)
}

function bar() {
  var x = 30
  foo()
}