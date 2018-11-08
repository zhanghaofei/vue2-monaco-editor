if (process.env.NODE_ENV === 'examples') {
  // examples
  module.exports = {
    outputDir: 'examples/dist',
    pages: {
      index: {
        entry: 'examples/main.js',
        template: 'examples/public/index.html'
      }
    }
  }
}
