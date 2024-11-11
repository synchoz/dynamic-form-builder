const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  plugins: [
     new HtmlWebpackPlugin({
        template: './public/index.html',
        title: 'Output Management',
     }),
   ],
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/, // rule for CSS files
        use: ['style-loader', 'css-loader'], // process CSS files and inject them into the HTML
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  devServer: {
    static: './dist',
    hot: true,
  },
  optimization: {
    runtimeChunk: 'single',
  },
/*   output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: './'
  }, */
};