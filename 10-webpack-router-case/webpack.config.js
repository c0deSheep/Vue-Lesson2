const path = require('path')

module.exports = {
  entry : path.join(__dirname, './src/main.js'),

  output : {
    path : path.join(__dirname,'./dist'),
    filename : 'bundle.js'
  },

  module : {
    rules : [
      { test : /\.vue$/ , use : 'vue-loader'},

      {test : /\.css$/, use : ['style-loader' , 'css-loader']},

      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use:'url-loader'
      },

    ]
  },
  resolve:{
    alias:{
      '@' :'/src',
      'assets':'@/assets',
      'common':'@/common',
      'components':'@/components',
      'network':'@/network',
      'views':'@/views',
    }
  }
}