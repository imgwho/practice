import _ from 'lodash'
import Vue from 'vue'



var app = new Vue({
  el: '#app',
  data: {
    newTodo: '',
    todoList: []
  },

  //data storage
  created: function () {
    window.onbeforeunload = () => {
      let dataString = JSON.stringify(this.todoList)
      window.localStorage.setItem('myTodos', dataString)
    }

    let oldDataString = window.localStorage.getItem('myTodos')
    let oldData = JSON.parse(oldDataString)
    this.todoList = oldData || []
  },


  methods: {
    // add todo
    addTodo: function () {
      this.todoList.push({
        title: this.newTodo,
        createdAt: new Date(),
        done: false
      })
      // console.log(this.todoList)
      this.newTodo = ''
    },

    //remove todo
    removeTodo: function(todo) {
      let index = this.todoList.indexOf(todo)
      this.todoList.splice(index,1)
    }
  }
})