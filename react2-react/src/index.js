import _ from 'lodash'
import $ from 'jquery'
import foo from './foo'

function component() {
  // var element = document.createElement('div')
  var element = $('<div></div>')

  // Lodash, currently included via a script, is required for this line to work
  //loadsh, now imported by this script
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ')
  element.html(_.join(['Hello', 'Webpack'], ' '))

  // alert("hello, webpack")
  return element.get(0)


}

document.body.appendChild(component())
console.log(foo)
console.log(foo())