<template>
  <div id="editor">
    <nav>
      <ol>
        <li v-for="(item, index) in resumeConfig" :class="{active: item.field === selected}" @click="selected = item.field">
          <svg class="icon">
            <use :xlink:href="`#icon-${item.icon}`"></use>
          </svg>
        </li>
      </ol>
    </nav>
    <ol class="panels">
      <li v-for="item in resumeConfig" v-show="item.field === selected">
        <div v-if="item.type === 'array'">
          <h2>{{$t(`resume.${item.field}._`)}}</h2>
          <div class="subitem" v-for="(subitem,i ) in resume[item.field]">
            <button class="button remove small" @click="removeResumeSubfield(item.field, i)">删除</button>
            <div class="resumeField" v-for="(value, key) in subitem">
              <label> {{$t(`resume.${item.field}.${key}`)}}</label>
              <input type="text" :value="value" @input="changeResumeField(`${item.field}.${i}.${key}`, $event.target.value)">
            </div>
            <hr>
          </div>
          <button class="button" @click="addResumeSubfield(item.field)">添加</button>
        </div>
        <div v-else class="resumeField" v-for="(value, key) in resume[item.field]">
          <label> {{$t(`resume.${item.field}.${key}`)}} </label>

          
          <input type="text" :value="value" @input="changeResumeField(`${item.field}.${key}`, $event.target.value)">
        </div>
        
  
      </li>
  
    </ol>
  </div>
</template>

<script>
export default {
  name: 'Editor',

  computed: {

    selected: {
      get() {
        return this.$store.state.selected
      },
      set(value) {
        return this.$store.commit('switchTab', value)
      }

    },

    resume() {
      return this.$store.state.resume
    },

    resumeConfig() {
      return this.$store.state.resumeConfig
    }

  },

  methods: {
    changeResumeField(path, value) {
      this.$store.commit('updateResume', {
        path,
        value
      })
    },
    addResumeSubfield(field) {
      this.$store.commit('addResumeSubfield', { field })
    },

    removeResumeSubfield(field, index) {
      this.$store.commit('removeResumeSubfield', { field, index })
    }
  }
}

</script>

<style lang="scss" scoped>
#editor {
  background: #ffffff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.25);

  display: flex;
  flex-direction: row;
  overflow: auto;
  .button {
    margin: 15px 10px;
    border: 1px solid #E6E6E6;
    background: transparent;
    border-radius: 5px;
    color: #2BC017;
    cursor: pointer;
  }
  .remove {
    background: #FF6D6D;
    color: white;
  }
  >nav {
    width: 80px;
    background: #FFFFFF;
    color: #999999;
    border-right: solid 1px #E6E6E6;

    >ol {
      >li {
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
        margin-bottom: 20px;
        h2 {
          margin-bottom: 24px;
        }
        &.active {
          background: #ffffff;
          color: #2BC017;
        }
      }
    }
  }

  >.panels {
    flex-grow: 1;
    >li {
      padding: 24px;
    }
  }

  svg.icon {
    width: 34px;
    height: 34px;
  }


  ol {
    list-style: none;
  }

  .resumeField {
    >label {
      display: block;
    }

    input[type=text] {
      margin: 16px 0;
      border: 1px solid #ddd;
      box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0.25);
      width: 100%;
      height: 40px;
      padding: 0 8px;
    }
  }

  hr {
    border: none;
    border-top: 1px solid #ddd;
    margin: 24px 0;
  }
}

.subitem {
  position: relative;
  .button.remove {
    position: absolute;
    right: 0;
    top: -15px;
  }
}
</style>

