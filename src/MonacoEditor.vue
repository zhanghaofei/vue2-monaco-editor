<template>
  <div id="editor">{{value}}</div>
</template>

<script>
export default {
  name: 'MonacoEditor',
  props: {
    value: {
      type: String,
      default: 'Vue2 Monaco Editor'
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style>
  .editor{
    color: red;
    font-size: 20px;
  }
</style>
