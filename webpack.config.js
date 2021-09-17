const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // dynamic building "npm run dev" & "npm run build"
  mode: process.env.NODE_ENV,
  entry: path.resolve(__dirname,"./src/index.js"),
  output: {
    path: path.resolve(__dirname,'build'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module:{
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      }
    ]
  },
  devServer: {
    static: {
      //will run your local server from the src files
      directory: path.join(__dirname,'src')
    },
    compress:true,
    port: 8080,
    proxy: {'/api/*':'http://localhost:3000/'}
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
}
