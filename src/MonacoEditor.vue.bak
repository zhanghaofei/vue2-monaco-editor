<template>
  <div :id="editorId" class="editor" :style="{ width, height }"></div>
</template>

<script>
// import * as monaco from 'monaco-editor/esm/vs/editor/editor.api'
import * as monaco from 'monaco-editor'
export default {
  name: 'MonacoEditor',
  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100%'
    },
    value: {
      type: String,
      default: ''
    },
    options: {
      type: Object
    }
  },
  data () {
    return {
    }
  },
  computed: {
    editorId () {
      return `editor${this._uid}`
    }
  },
  methods: {
  },
  mounted () {
    this.options.value = this.value
    this.editor = monaco.editor.create(document.getElementById(this.editorId), this.options)
    const vm = this
    this.editor.onDidChangeModelContent(function (e) {
      vm.$emit('onDidChangeModelContent', e)
      vm.$emit('input', vm.editor.getValue())
    })
    this.editor.onMouseMove(function (e) {
      vm.$emit('onMouseMove', e)
    })
    //
    this.getSelections = this.editor.getSelections
  }
}
</script>
