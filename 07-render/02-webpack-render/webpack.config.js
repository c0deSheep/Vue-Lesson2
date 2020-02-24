const path = require('path');


module.exports = {
  entry : path.join(__dirname, './src/main.js'),
  output:{
    path : path.join(__dirname, './dist'),
    filename : 'bundle.js'
  },
  module: {  // 配置第三方loader 模块的节点
    rules : [
      {test: /\.vue$/, use :'vue-loader' } // 处理vue结尾文件的加载器
],
  }
};