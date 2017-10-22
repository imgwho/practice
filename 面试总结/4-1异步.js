//单线程就是一次只能做一件事 
//异步：不会阻塞
console.log(100)
setTimeout(function (){
  console.log(200)
},1000)
console.log(300)
//打印100 300 1秒后打印200


//同步：会阻塞
console.log(100)
alert(299)          //程序会卡在这里
console.log(300)


//ajax示例
console.log('start')
$.get('./data.json', function (data) {
  console.log(data)
})
console.log('end')
//先打印start 再打印end 最后get请求完成后打印data


//<img>加载示例
console.log('start')
var img = document.createElement('img')
img.onload = function () {
  console.log('loaded')
}
img.src = '/xx.jpg'
console.log('end')
//start ==> end ==> img.src = '/xx.jpg' ==>loaded


//事件绑定示例
console.log('start')
document.getElementById('btn1').addEventListener('click', function () {
  alert('clicked')
})
console.log('end')
//start ==> end ==> alert('clicked')