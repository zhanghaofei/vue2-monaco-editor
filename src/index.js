import MonacoEditor from './MonacoEditor.vue'

// https://cn.vuejs.org/v2/guide/plugins.html
const install = (Vue, options) => {
  Vue.component(MonacoEditor.name, MonacoEditor)
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

// import MonacoEditor from 'vue2-monaco-editor'
MonacoEditor.install = install
export default MonacoEditor

// import { MonacoEditor } from 'vue2-monaco-editor'
// export {
//   MonacoEditor,
//   install
// }
