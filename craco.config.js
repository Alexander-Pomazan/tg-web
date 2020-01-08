const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  eslint: {
    enable: false
  },
  webpack: {
    plugins: [
      new CopyPlugin([
        { from: '*.worker.js', context: './node_modules/tdweb/dist/' },
        { from: '*.mem', context: './node_modules/tdweb/dist/' },
        { from: '*.wasm', context: './node_modules/tdweb/dist/' }
      ])
    ]
  }
}
