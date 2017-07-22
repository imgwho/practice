<template>
  <div id="topbar">
    <div class="wrap">
      <span class="logo">resume</span>
      <div class="actions">
        <div v-if="logined" class="userActions">
          <span class="welcome">你好，{{user.username}}</span>
          <a class="button" href="#" @click.prevent="signOut">登出</a>
        </div>
        <div v-else class="userActions">
          <a class="button primary" href="#" @click.prevent="signUpDialogVisible = true">注册</a>
          <a class="button" href="#" @click.prevent="signInDialogVisible = true">登录</a>
        </div>
      </div>
      <MyDialog title="注册" :visible="signUpDialogVisible" @close="signUpDialogVisible = false">
        <SignUpForm @success="signIn($event)" />
      </MyDialog>
      <MyDialog title="登录" :visible="signInDialogVisible" @close="signInDialogVisible = false">
        <SignInForm @success="signIn($event)" />
      </MyDialog>
    </div>
  </div>
</template>

<script>
import MyDialog from './MyDialog'
import SignUpForm from './SignUpForm'
import SignInForm from './SignInForm'
import AV from '../lib/leancloud'
export default {
  name: 'Topbar',
  data(){
    return {
      signUpDialogVisible: false,
      signInDialogVisible: false,
    }
  },
  computed: {
    user(){
      return this.$store.state.user
    },
    logined(){
      return this.user.id
    }
  },
  components: {
    MyDialog, SignUpForm, SignInForm
  },
  methods: {
    signOut(){
      AV.User.logOut()
      this.$store.commit('removeUser')
    },
    signIn(user){
      this.signUpDialogVisible = false
      this.signInDialogVisible = false
      this.$store.commit('setUser', user)
    }
  }
}
</script>

<style scoped lang = "scss">
#topbar {
  background: #ffffff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.25);

  >.wrap {
    min-width: 1024px;
    max-width: 1440px;
    margin: 0 auto;
    height: 64px;
  }

  >.wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
  }

  .logo {
    font-size: 24px;
    color: #000000;
  }


  .actions {
    display: flex;
    .userActions {
      margin-right: 3em;
      .welcome {
        margin-right: .5em;
      }
    }
  }
}
</style>

