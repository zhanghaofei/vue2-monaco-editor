const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')
if (process.env.NODE_ENV === 'examples') {
  // examples
  module.exports = {
    outputDir: 'examples/dist',
    pages: {
      index: {
        entry: 'examples/main.js',
        template: 'examples/public/index.html'
      }
    },
    configureWebpack: {
      plugins: [
        new MonacoWebpackPlugin() // https://github.com/Microsoft/monaco-editor/blob/master/docs/integrate-esm.md
      ]
    }
  }
}
