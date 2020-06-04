const path = require('path');

function join(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  chainWebpack: config => {
    config.resolve.alias.set('@', join('src'));
  }
}