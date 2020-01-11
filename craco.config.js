/* eslint-disable @typescript-eslint/no-var-requires */
const CopyPlugin = require('copy-webpack-plugin')
const reactHotReloadPlugin = require('craco-plugin-react-hot-reload')

module.exports = {
  eslint: {
    enable: false,
  },
  webpack: {
    plugins: [
      new CopyPlugin([
        { from: '*.worker.js', context: './node_modules/tdweb/dist/' },
        { from: '*.mem', context: './node_modules/tdweb/dist/' },
        { from: '*.wasm', context: './node_modules/tdweb/dist/' },
      ]),
    ],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  plugins: [{
    plugin: reactHotReloadPlugin,
  }],
}
