var obj = {
  age: 18,
  name: 'hua',
  sex: 'male',
  son: {
    name: 'xiaohua'
  }
}

var obj2 = obj
obj.age = 200
obj2.age == 200


function copy(obj) {
  var newObj = {}
  for (var key in obj) {
    if(obj.hasOwnProperty(key)) {
      if(typeof obj[key] === 'number' || typeof obj[key] === 'boolean' || typeof obj[key] === 'string' || typeof obj[key] === undefined || typeof obj[key] === null) {
        newObj[key] = obj[key]
      }else {
        newObj[key] = copy(obj[key])
      }
    }
  }
  return newObj
}

var obj3 = copy(obj)