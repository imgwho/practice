// 发布订阅模式/观察者模式
class Obverse {
  constructor() {
    this.callbackObject = {}
  }

  listen(key, fn) {
    if(!this.callbackObject[key]) {
      this.callbackObject[key] = []
    }
    this.callbackObject[key].push(fn)
  }

  publish(key) {
    this.callbackObject[key].forEach(item => item())
  }
}

var a = new Obverse()
console.log(a)

a.listen('a', () => console.log('123'))
a.listen('a', () => console.log('456'))
a.listen('a', () => console.log('789'))

a.publish('a')


let b = new Obverse()


b.listen('b', () => console.log('开始'))
b.listen('b', () => console.log('等待中'))
b.listen('b', () => console.log('完成'))

b.publish('b')


