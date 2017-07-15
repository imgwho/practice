import _ from 'lodash'
import Vue from 'vue'


  // var element = document.createElement('div')

  // Lodash, currently included via a script, is required for this line to work
  //loadsh, now imported by this script
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ')
  // alert("hello, webpack")
  // return element
  var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    }
  })


