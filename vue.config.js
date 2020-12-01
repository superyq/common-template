const path = require('path');

function join(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: './',
  filenameHashing: false,
  productionSourceMap: false,
  devServer: {
    proxy: 'http://128.196.118.101:8101'
  },
  chainWebpack: config => {
    config.resolve.alias.set('@', join('src'));
  }
}