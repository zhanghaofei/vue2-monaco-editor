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
} else {
  // vue2-monaco-editor
  module.exports = {
    pages: {
      index: {
        entry: 'src/index.js'
      }
    },
    configureWebpack: {
      output: {
        filename: 'vue2-monaco-editor.js',
        library: 'MonacoEditor',
        libraryTarget: 'umd',
        umdNamedDefine: true
      },
      plugins: [
        new MonacoWebpackPlugin() // https://github.com/Microsoft/monaco-editor/blob/master/docs/integrate-esm.md
      ],
      // externals: {
      //   vue: {
      //     root: 'Vue',
      //     commonjs: 'vue',
      //     commonjs2: 'vue',
      //     amd: 'vue'
      //   }
      // },
      externals: {
        'monaco-editor': 'monaco-editor',
        vue: {
          root: 'Vue',
          commonjs: 'vue',
          commonjs2: 'vue',
          amd: 'vue'
        }
      }
    }
  }
}
