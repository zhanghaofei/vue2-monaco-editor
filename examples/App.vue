<template>
  <div id="app">
    <h1>vue2-monaco-editor 示例</h1>
    <h4>编辑器</h4>
    <div id="editor">
      <MonacoEditor v-model="code" :options="options"></MonacoEditor>
    </div>
    <h4>源代码</h4>
    <div id="preview">
      <textarea readonly v-model="code"></textarea>
    </div>
  </div>
</template>

<script>
import MonacoEditor from '../src' // import MonacoEditor from 'vue2-monaco-editor'
export default {
  name: 'app',
  components: {
    MonacoEditor
  },
  data () {
    return {
      code: "function hello() {\n\talert('Hello world!');\n}",
      options: {
        language: 'javascript',
        automaticLayout: true,
        lineNumbersMinChars: 1
      }
    }
  }
}
</script>
<style>
  h1{
    text-align: center;
  }
  h4{
    text-align: center;
  }
  #editor {
    width: 50vw;
    height: 50vh;
    box-shadow: 0 0 14px 3px #666;
    margin: 0 auto;
  }
  #preview{
    margin: 20px auto;
    /*border: solid 1px #666;*/
    width: 50vw;
    height: 20vh;
  }
  #preview textarea{
    resize: none;
    height: 100%;
    width: 100%;
    outline: none;
  }
</style>
