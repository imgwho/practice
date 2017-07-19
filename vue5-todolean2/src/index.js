import _ from 'lodash'
import Vue from 'vue'
import AV from 'leancloud-storage'

var APP_ID = 'bqSLDvRE7GuX3B8gT7ptqcSV-gzGzoHsz'
var APP_KEY = 'eF1v47wHIjHilAWhFn4VYPEj'
AV.init({
  appId: APP_ID,
  appKey: APP_KEY
})



var app = new Vue({
  el: '#app',
  data: {
    
    actionType: 'signUp',


    formData: {
      username: '',
      password: ''
    },
    newTodo: '',
    todoList: [],
    currentUser: null,
  },

  //data storage
  created: function () {
    this.currentUser = this.getCurrentUser()
    this.fetchTodos()


  },


  methods: {

    //fetch todo
    fetchTodos: function () {
      if (this.currentUser) {
        var query = new AV.Query('AllTodos')
        query.find()
          .then((todos) => {
            let avAllTodos = todos[0] // 因为理论上 AllTodos 只有一个，所以我们取结果的第一项
            let id = avAllTodos.id
            this.todoList = JSON.parse(avAllTodos.attributes.content)
            this.todoList.id = id //给 todoList 这个数组设置 id
          }, (error)=>{
            console.error(error)
          })
      }
    },
    //update todo
    updateTodos: function () {
      let dataString = JSON.stringify(this.todoList)

      let avTodos = AV.Object.createWithoutData('AllTodos', this.todoList.id)
      avTodos.set('content', dataString)
      avTodos.save().then(() => {
        console.log('update successful!')
      })
    },
    //save todo
    saveTodos: function () {
      let dataString = JSON.stringify(this.todoList)
      var AVTodos = AV.Object.extend('AllTodos')
      var avTodos = new AVTodos()
      var acl = new AV.ACL()

      acl.setReadAccess(AV.User.current(), true) // 只有这个 user 能读
      acl.setWriteAccess(AV.User.current(), true) // 只有这个 user 能写

      avTodos.set('content', dataString)
      avTodos.setACL(acl) // 设置访问控制
      avTodos.save().then((todo) => {
        this.todoList.id = todo.id
        console.log('saved successful!')
      }, (error) => {
        alert('saved error!')
      })
    },
    //update todo 
    saveOrUpdateTodos: function () {
      if (this.todoList.id) {
        this.updateTodos()
      } else {
        this.saveTodos()
      }
    },
    // add todo
    addTodo: function () {
      this.todoList.push({
        title: this.newTodo,
        createdAt: new Date(),
        done: false
      })
      // console.log(this.todoList)
      this.newTodo = ''
      this.saveOrUpdateTodos()
    },

    //remove todo
    removeTodo: function (todo) {
      let index = this.todoList.indexOf(todo)
      this.todoList.splice(index, 1)
      this.saveOrUpdateTodos()
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

    //login
    login: function () {
      AV.User.logIn(this.formData.username, this.formData.password).then((loginedUser) => {
        this.currentUser = this.getCurrentUser()
        this.fetchTodos()
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