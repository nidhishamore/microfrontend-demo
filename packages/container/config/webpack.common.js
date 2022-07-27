const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,  //.jsx and .js need to be processed by babel
        exclude: /node_modules/, //Do not try to run babel thing on any file out of node_modules dir
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-react', '@babel/preset-env'],
                plugins: ['@babel/plugin-transform-runtime']
            }
        }
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
        template: './public/index.html'
    })
]
};
