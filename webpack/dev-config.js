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
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    host: 'localhost',
    port: 3001,
    publicPath: `http://localhost:${3001}/assets/`
  }
}