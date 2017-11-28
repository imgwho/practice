function test() {
  let count = 0
  return {
    get: () => count,
    add: () => {count ++},
    cut: () => {count --}
    
  }
}

console.log(count)

class Closure {
  constructor() {
    this.count = 0
  }

  get() {
    return this.count
  }

  add() {
    this.count ++
  }

  cut() {
    this.count --
  }
}