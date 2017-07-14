//构造函数模式
// 用js构造器创建一个对象后，新对象就会具有构造器原型的所有属性。通过这种方式，可以创建多个Car对象，并访问相同的原型
function Car(name, year, miles) {
  this.name = name
  this.year = year
  this.miles = miles
}
Car.prototype.run = function () {
  return this.name + ' worked ' + this.miles + ' miles'
}

var Benz = new Car('s350', 2010, 20000)
var QQ = new Car('qq123', 2010, 300000)

console.log(Benz.run()) //s350 worked 20000 miles
console.log(QQ.run()) //qq123 worked 300000 miles



// 混合模式:将一批具有相同操作的对象组织成一个树形结构，可以用一条命令在多个对象上激发复杂或者递归调用。
// 具有树形结构和相同操作的集合（如：图片库展现，一个目录下可能有目录、图片，这种情况，图片就是叶子对象，目录就是根对象或者子对象）
// 子节点个数或者操作实现不确定（如：表单验证，表单的数据项是不容易确定的，且有可能因用户不同而表单区域不一样）
function Person(name, age) {
  this.name = name
  this.age = age
}
Person.prototype.printName = function () {
  console.log(this.name)
}

function Student(name, age, score) {
  // 继承 Person 的属性
  Person.call(this, name, age)
  this.score = score
}

function create(prototype) {
  function F() {}
  F.prototype = prototype
  return new F()
}

// 让Student的原型指向一个对象,该对象的原型指向了Person.prototype,通过这种方式继承 Person 的方法
Student.prototype = create(Person.prototype)
Student.prototype.printAge = function () {
  console.log(this.age)
}
Student.prototype.sayScore = function () {
  console.log(this.score)
}
var student = new Student('admin', 22, 99)
student.printName() //  'admin'
console.log(student)


//模块化
// 最初被定义为一种在传统软件工程中为类提供私有和公有封装的方法。
// 方式: Module模式用于进一步模拟类的概念,
// 好处: 能够使一个单独的对象拥有公有/私有方法和变量,从而屏蔽来自全局作用域的特殊部分
// 结果: 函数名与在页面上其他脚本定义的函数冲突的可能性降低
var moudule = (function () {
  var counter = 0

  return {
    addCounter: function () {
      return counter = counter + 1
    },
    resetCounter: function () {
      console.log('value: ' + counter)
      counter = 0
    }
  }
})()

console.log(moudule)

moudule.addCounter()
moudule.resetCounter()



//工厂模式
// 为了解决多个类似对象声明的问题，解决实例化对象产生大量重复的问题
function createObject(name, age) {
  var obj = new Object()
  obj.name = name
  obj.age = age
  obj.describe = function () {
    return this.name + ' ' + this.age
  }
  return obj
}

var obj1 = createObject('allen', 22)
var obj2 = createObject('bill', 23)

console.log(obj1.describe())
console.log(obj2.describe())



//单例模式
// 保证一个类仅有一个实例，并且提供一个访问它的全局访问点
var obj = function (name) {
  this.name = name
  this.instance = null
}

obj.prototype.getName = function () {
  console.log(this.name)
}

obj.getInstance = function () {
  if (!this.instance) {
    this.instance = new obj(name)
  }

  return this.instance
}

var a = obj.getInstance('about')
var b = obj.getInstance('instagram')
console.log(a === b)



//发布订阅模式
// 这个模式用来作为中间人，一个把发布者和订阅者架接在一起的代理。发布者是当完成某些过程的时候触发事件的对象，订阅者是希望当发布者发布的时候希望被通知的对象。

// 生活中有一个很好地例子，广播电台，人们会把频道调到他们最喜欢的节目。广播站不知道观众听得是什么或者他们正在听什么。他只需要发布他们的节目就可以啦。观众也不知道广播站制作节目的过程。他们只要在他们最喜欢的节目运行的时候把台调到对应的频道或者告知朋友就行。

// 发布/订阅者模式实现了松耦合：你可以让发布者发布消息，订阅者接受消息而不是寻找一种方式把两个分离的系统连接在一起。
var makePubSub = function () {
  var callbacks = {},
    publish = function () {
      //将参数对象转换为数组
      var args = Array.prototype.slice.call(arguments, 0)

      //提取作为第一个事件
      var ev = args.shift()

      //Return 如果毁掉函数不包含
      //任何事件
      var list, i, l
      if (!callbacks[ev]) {
        return this
      }
      list = callbacks[ev]

      //调用回掉函数，传递其余参数
      for (i = 0, l = list.lengthi < li++) {
        list[i].apply(this, args)
      }

      return this
    },
    subscribe = function (ev, callback) {
      //检查是否注册
      //如果不存在就创建一个数组
      if (!callbacks[ev]) {
        callbacks[ev] = []
      }
      callbacks[ev].push(callback)
      return this
    }

  return {
    pub: publish,
    sub: subscribe
  }
}

test = makePubSub()
test.sub("alert", function () {
  alert("hello")
})
test.pub("alert")


// 使用发布订阅模式写一个事件管理器，可以实现如下方式调用
// Event.on('change', function(val){
//     console.log('change...  now val is ' + val)  
// })
// Event.fire('change', '饥人谷')
// Event.off('changer')


var EventCenter = (function () {
  var events = {}

  function on(evt, handler) {
    events[evt] = events[evt] || []
    events[evt].push({
      handler: handler
    })
  }

  function fire(evt, args) {
    if (!events[evt]) {
      return
    }
    for (var i = 0; i < events[evt].length; i++) {
      events[evt][i].handler(args)
    }
  }

  function off(evt) {
    delete events[evt]
  }
  return {
    on: on,
    fire: fire,
    off: off
  }
})()

EventCenter.on('change', function (val) {
  console.log('change...  now val is ' + val)
})