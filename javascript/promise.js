function ajax() {
  return new Promise((resolve, reject) => {
    const a = 1
    setTimeout(function () {
      if (a === 1) {
        reject()
      } else {
        resolve()
      }
    }, 1000)
  })
}

function powerPromise(index) {
  let _index = index,
    current_index = 0
  const _ajax = function () {
    return new Promise((resolve, reject) => {
      const _catch = function () {
        console.log('我被catch捕获')
        if (current_index < _index) {
          console.log('重启ajax函数', current_index, _index)
          current_index++
          _ajax().then(resolve).catch(_catch)
        } else {
          console.log('执行真的catch函数', current_index, _index)
          reject('reject')
        }
      }
      ajax().then(resolve).catch(_catch)
    })
  }
  return _ajax()
}

powerPromise(2).then(() => console.log('then')).catch((res) => console.log(res, '我没被catch捕获'))