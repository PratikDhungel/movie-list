const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, '../src/index.tsx'), // Set the entry point for the app
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  }, // Allows us to resolve the extensions, allows to leave the file extension off while importing
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      }, // Use babel for all ts, js, tsx ans jsx files
    ],
  },
  output: {
    path: path.resolve(__dirname, '../build'), // Output file bundle.js will be in the build directory
    filename: 'bundle.js',
  },
  mode: 'development',
  devServer: {
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html'),
    }),
  ], // Injects the bundle js file into the index html file and place the html file in the build folder
  stats: 'errors-only',
};
