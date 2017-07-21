import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selected: 'profile',
    resume: {
      config: [{
          field: 'profile',
          icon: 'id'
        },
        {
          field: 'workHistory',
          icon: 'work'
        },
        {
          field: 'education',
          icon: 'book'
        },
        {
          field: 'projects',
          icon: 'heart'
        },
        {
          field: 'awards',
          icon: 'cup'
        },
        {
          field: 'contacts',
          icon: 'phone'
        },
      ],
      profile: {
        name: 'imgwho',
        city: 'chengdu',
        title: 'web front engineer',
        birthday: '1996-01-31'
      },
      workHistory: [{
          company: 'tencent',
          content: 'web front engineer'
        },
        {
          company: 'alibaba',
          content: 'web front engineer'
        },
      ],
      education: [{
          school: 'sichuan universal',
          content: 'nginx'
        },
        {
          school: 'sichuan universal',
          content: 'soft building'
        },
      ],
      projects: [{
          name: 'project A',
          content: '文字'
        },
        {
          name: 'project B',
          content: '文字'
        },
      ],
      awards: [{
          name: 'awards A',
          content: '文字'
        },
        {
          name: 'awards B',
          content: '文字'
        },
      ],
      contacts: [{
          contact: 'phone',
          content: '13812345678'
        },
        {
          contact: 'qq',
          content: '12345678'
        },
      ],
    }
  },

  mutations: {
    switchTab(state, payload) {
      state.selected = payload
    }
  }
})
