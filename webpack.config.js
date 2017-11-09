const glob = require('glob');
const path = require('path');

const entries = {};
glob.sync("./src/client/**/*.js").map(function (file) {
  console.log(file)
  entries[file.replace(/.\/src\/client/, ".\/src\/server\/public\/javascript\/").replace(/\.vue/, ".js")] = file;
});

module.exports = {
  entry: entries,
  output: {
    filename: '[name]',
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    modules: [
      path.resolve(__dirname, 'src/client'),
      'node_modules',
    ],
    extensions: ['.js', '.ts']
  },
  module: {
    rules: [
      {
        test: /\.scss/,
        loaders: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {url: false}
          },
          'sass-loader'
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          esModule: true
        }
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  }
};
