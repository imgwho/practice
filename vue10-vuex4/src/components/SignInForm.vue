<template>
  <div>
    <form @submit.prevent="signIn">
      <div class="row">
        <label>用户名</label>
        <input type="text" required v-model="formData.username">
      </div>
      <div class="row">
        <label>密码</label>
        <input type="password" required v-model="formData.password">
      </div>
      <div class="actions">
        <input type="submit" value="提交">
        <span>{{errorMessage}}</span>
      </div>
    </form>
  </div>
</template>

<script>

import AV from '../lib/leancloud'
import getErrorMessage from '../lib/getErrorMessage'
import getAVUser from '../lib/getAVUser'

export default {
  name: 'SignInForm',
  data(){
    return {
      formData: {
        username: '',
        password: ''
      },
      errorMessage: ''
    }
  },
  methods: {
    signIn(){
      let {username, password} = this.formData
      AV.User.logIn(username,password).then(()=> {
        this.$emit('success', getAVUser())
      }, (error)=> {
        this.errorMessage = getErrorMessage(error)
      });
    }
  }
}
</script>

<style lang="scss" scoped>
input {
  margin: 16px 0;
  border: 1px solid #ddd;
  box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0.25);
  width: 100%;
  height: 30px;
  padding: 0 8px;
}

input[type=submit] {
  margin: 15px 1px;
  border: 1px solid #E6E6E6;
  background: transparent;
  border-radius: 5px;
  color: #999999;
  cursor: pointer;
  &:hover {
      box-shadow: 1px 1px 1px hsla(0, 0, 0, 0.2);
      background: #02af5f;
      color: #ffffff;
    }
}
</style>