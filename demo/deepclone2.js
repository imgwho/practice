function deepClone(_obj) {
  const clone = (obj, newObj) => {
    for(let key in obj) {
      if(obj.hasOwnProperty(key)) {
        if(typeof obj[key] === 'object') {
          newObj[key] = clone(obj[key], {})
        }else {
          newObj[key] = obj[key]
        }
      }
    }
    return newObj
  }
  return clone(_obj, {})
}

deepClone({a:{b :{d :1}}, c: 'aaa'})