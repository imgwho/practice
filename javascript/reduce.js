// var numbers = [1, 2, 3, 4, 5, 6]

// function reduce(array, fn, init) {
//   var result = init
//   for (var i = 0; i < array.length; i++) {
//     result = fn(result, array[i], i)
//   }
//   return result
// }

// var sum = reduce(numbers, function(prev, next){
//   return prev + next
// }, 0)

// console.log(sum)


//模拟map
// var numbers = [1, 2, 3, 4, 5, 6]

// function reduce(array, fn, init) {
//   var result = init
//   for (var i = 0; i < array.length; i++) {
//     result = fn(result, array[i], i)
//   }
//   return result
// }

// var sum = reduce(numbers, function(prev, next, index){
//   var letters = ['A', 'B', 'C', 'D', 'E', 'F']
//   var newItem = letters[index] + next
//   return prev.concat(newItem)
// }, [])

// console.log(sum)


//模拟filter
// var numbers = [1, 2, 3, 4, 5, 6]

// function reduce(array, fn, init) {
//   var result = init
//   for (var i = 0; i < array.length; i++) {
//     result = fn(result, array[i], i)
//   }
//   return result
// }

// var sum = reduce(numbers, function(prev, next, index){
//   if(next % 2 === 1) {
//     return prev.concat(next)
//   }else {
//     return prev
//   }
  
// }, [])

// console.log(sum)


//fibanacci map
// var fabs = map([0,0,0,0,0,0,0,0], function(item, index, results){
//   if (index === 0) {
//     return 1
//   }else if(index ===1 ) {
//     return 1
//   }else {
//     return results[index - 1] + results[index - 2]
//   }
// })

// console.log(fabs)

// function map(array, fn) {
//   var results = []
//   for(var i = 0; i < array.length; i ++) {
//     var item = fn(array[i], i, results)
//     results.push(item)
//   }
//   return results
// }


//fibanacci reduce
var fabs = reduce([0,0,0,0,0,0,0,0], function(prev, index, index){
  if(index === 0){
    return prev.concat(1)
  }else if(index === 1){
    return prev.concat(1)
  }else {
    var newItem = prev[prev.length-1] + prev[prev.length-2]
    return prev.concat(newItem)
  }
},[])

console.log(fabs)



function reduce(array, fn, init) {
  var result = init
  for (var i = 0; i < array.length; i++) {
    result = fn(result, array[i], i)
  }
  return result
}