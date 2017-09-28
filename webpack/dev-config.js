module.exports = {
  entry: './src/app/client.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' }
    ]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    host: 'localhost',
    port: 3001,
    publicPath: `http://localhost:${3001}/assets/`
  }
}