function myBindEvent(elem, type, selector, fn) {
  if(fn == null) {
    fn = selector
    selector = null
  }
  elem.addEventListener(type, function(e) {
    var target 
    if(selector) {
      //是代理的时候
      target = e.target
      if(target.matches(selector)) {
        fn.call(target, e)
      }
    }else {
      fn(e)  //不是代理的时候
    }
  })
}


//使用代理
var div1 = document.getElementById('div1')
myBindEvent(div1, 'click', 'a', function(e){
  e.preventDefault()
  console.log(this.href)
})

//不使用代理
var btn1 = document.getElementById('btn1')
myBindEvent(btn1, 'click', function(e) {
  console.log(btn1.innerHTML)
})