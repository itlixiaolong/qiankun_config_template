const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

let isProduction = false
let conf = {
  entry: {
    // 通用css
    commoncss: path.resolve(__dirname, './src/js/common.css.js'),

    // 主页
    index: path.resolve(__dirname, './src/js/index.js'),

    // about
    about: path.resolve(__dirname, './src/js/about.js'),

    // detai
    detail: path.resolve(__dirname, './src/js/detail.js'),

  }
};


module.exports= {
  entry: conf.entry,
  target: "web",
  output: {
    path: path.resolve(__dirname + '/dist/'),
    // publicPath: '.\\',
    filename: 'js/[name].js',
    // chunkFilename: "[name].chunk.[hash].js",
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery"
    }),
    new CopyWebpackPlugin({
      patterns: [{
        from: __dirname + '/src/public/'
      }]
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
      chunks: ['commoncss', 'index'],
      inject: 'true',
      hash: true,
    }),
    new HtmlWebpackPlugin({
      filename: 'about.html',
      template: 'src/about.html',
      chunks: ['commoncss', 'share'],
      inject: 'true',
      hash: true,
    }),
    new HtmlWebpackPlugin({
      filename: 'detail.html',
      template: 'src/detail.html',
      chunks: ['commoncss', 'detail'],
      inject: 'true',
      hash: true,
    })
  ],
  mode: 'development',
  node: {
    __filename: true,
    __dirname: true
  },
  devtool: isProduction ? 'source-map' : 'inline-source-map',
  devServer: {
    inline: true,
    writeToDisk: true,
    historyApiFallback: true,
    // host: ip.address(),
    host: 'localhost',
    port:3333,
    progress: true,
    contentBase: "./dist/",
    port: 3333,
    historyApiFallback: true,
    publicPath: '/src/',
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  resolve: {
    alias: {
    },
    extensions: ['.js', '.css'],
  },
  externals: {
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.join(__dirname, '/src'),
        exclude: path.resolve(__dirname, 'node_modules'),
        use: [
          {
            loader: 'babel-loader',
            query: {
              presets: ["@babel/preset-env"]
            }
          }
        ]
      },
      {
        test: /\.xml$/,
        loader: "xml-loader"
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader",
      },
      {
        test: /\.(png|jpg|jpeg|gif|icon|webp)$/,
        loader: 'url-loader',
        options: {
          limit: 16384,
          name: 'images/[name].[hash:5].[ext]',
        }
      },
      {
        test: /\.(woff|woff2|svg|eot|ttf)\??.*$/,
        loader: "file-loader?&name=assets/fonts/[name].[ext]"
      }
    ]
  }

}