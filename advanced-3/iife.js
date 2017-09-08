//函数作用域
(function (){
  var foo = 'bar'
  console.log(foo)
})()

foo

const uniqueId = (function() {
  let count = 0;
  return function() {
      ++count;
      return id_${count};
  };
})();

console.log(uniqueId()); // "id_1"
console.log(uniqueId()); // "id_2"
console.log(uniqueId()); // "id_3"