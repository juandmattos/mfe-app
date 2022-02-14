const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = { // Common config for dev and prod
  module: {
    rules: [
      { // loader
        test: /\.m?js$/, // process with babel all .js files
        exclude: /node_modules/, // not the node_modules
        use: {
          loader: 'babel-loader', // use babel and config
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'], // change react and es6 or es7 to es5 or browser ready js
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ]
};
