<template>
  <div>
    <div class="page">
      <header>
        <Topbar/>
      </header>
      <main>
        <Editor/>
        <Preview/>
      </main>
    </div>
  </div>
</template>

<script>
import Topbar from './Topbar'
import Editor from './Editor'
import Preview from './Preview'

export default {
  name: 'Resume',
  components: { Topbar, Editor, Preview },
  created() {
  }
}
</script>

<style lang="scss">
#editor {
   min-width: 35%;
   background: #444;
 }
 
 #preview {
   flex-grow: 1;
   margin-left: 16px;
 }
</style>