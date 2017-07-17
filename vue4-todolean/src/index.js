import _ from 'lodash'
import Vue from 'vue'
import AV from 'leancloud-storage'

var APP_ID = 'bqSLDvRE7GuX3B8gT7ptqcSV-gzGzoHsz'
var APP_KEY = 'eF1v47wHIjHilAWhFn4VYPEj'
AV.init({
  appId: APP_ID,
  appKey: APP_KEY
})

// var TestObject = AV.Object.extend('TestObject')
// var testObject = new TestObject()
// testObject.save({
//   words: 'hello '
// }).then(function(object){
//   alert('leancloud rocks')
// })




var app = new Vue({
  el: '#app',
  data: {
    newTodo: '',
    todoList: [],
    actionType: 'signUp',
    formData: {
      username: '',
      password: ''
    },
    currentUser: null
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

    this.currentUser = this.getCurrentUser()
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
    removeTodo: function (todo) {
      let index = this.todoList.indexOf(todo)
      this.todoList.splice(index, 1)
    },

    //signup user
    signUp: function () {
      let user = new AV.User()
      user.setUsername(this.formData.username)
      user.setPassword(this.formData.password)
      user.signUp().then((loginedUser) => {
        this.currentUser = this.getCurrentUser()
      }, (error) => {
        alert('注册失败')
      })
    },

    //login user
    login: function () {
      AV.User.logIn(this.formData.username, this.formData.password).then((loginedUser) => {
        this.currentUser = this.getCurrentUser()
      }, (error) => {
        alert('登录失败')
      })
    },

    //get current user
    getCurrentUser: function () {
      let current = AV.User.current()
      if (current) {
        let {
          id,
          createdAt,
          attributes: {
            username
          }
        } = current
        return {
          id,
          username,
          createdAt
        }
      } else {
        return null
      }

    },

    //logout
    logout: () => {
      AV.User.logOut()
      this.currentUser = null
      window.location.reload()
    }
  }
})