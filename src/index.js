import MonacoEditor from './MonacoEditor'

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component(MonacoEditor.name, MonacoEditor)
}

export default MonacoEditor
