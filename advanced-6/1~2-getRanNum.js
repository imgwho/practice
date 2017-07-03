function getRanNum(min, max) {
  return Math.floor( Math.random () * (max -min + 1 ) + min)
}

console.log(getRanNum(1,100))