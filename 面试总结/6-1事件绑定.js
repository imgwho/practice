var btn = document.getElementById('btn1')
btn.addEventListener('click', function (event) {
  console.log('clicked')
})

function bindEvent(elem, type, fn) {
  elem.addEventListener(type, fn)
}

var a = document.getElementById('link')
bindEvent(a, 'click', function(e) {
  e.preventDefault()    //阻止默认行为
  alert('clicked')
})