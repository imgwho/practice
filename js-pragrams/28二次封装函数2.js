/* 
题目描述
实现函数 partialUsingArguments，调用之后满足如下条件：
1、返回一个函数 result
2、调用 result 之后，返回的结果与调用函数 fn 的结果一致
3、fn 的调用参数为 partialUsingArguments 的第一个参数之后的全部参数以及 result 的调用参数

 */



function partialUsingArguments(fn) {    
  var args = [].splice.call(arguments, 1);    
  if (args.length < fn.length) {        
    return function () {            
      return fn.apply(null, [].concat.call(args, [].slice.call(arguments)));        
    }    
  } else {        
    return fn.apply(null, args.slice(0, fn.length));    
  }
}




// concat是连接两个或则两个以上的数组，这个函数不会修改原数组。
function partialUsingArguments(fn) {
  //复制除去第一个参数的数组
  var arr = Array.prototype.slice.call(arguments, 1)
  var result = function () {  
    //复制数组
    var b = Array.prototype.slice.call(arguments)  
    return fn.apply(this, arr.concat(b))
  }
}