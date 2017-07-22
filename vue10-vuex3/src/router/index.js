import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Resume from '../components/Resume.vue'
import Preview from '../components/PreviewResult.vue'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Resume',
      component: Resume
    },
    {
       path: '/preview',
       name: 'PreviewResult',
       component: Preview
      }
  ]
})