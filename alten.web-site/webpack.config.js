const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
	entry: ["babel-polyfill", "./src/index.js"],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].bundle.js',
		publicPath: '/'
	},
	watch: true,
	watchOptions: {
		poll: true,
		ignored: /node_modules/
	},
	devServer: {
		historyApiFallback: true,
		stats: {
			colors: true
		},
		proxy: {
			"/api/v0/" : {
				"target" : {
					"host" : "192.168.0.173",
					"protocol" : "http",
					"port" : "8000"
				},
				changeOrigin: true,
				secure: false,
			},
		},
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.scss?$/,
				use: [
					'style-loader',
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader'
				]
			},
			{
			  test: /\.(png|jpg|gif)$/,
			  use: {
			    loader: 'file-loader',
			    options: {
			      name: 'media/[name].[ext]',
			      publicPath: 'public/'
			    }
			  }
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: 'style.[name].css'
		}),
		new HtmlWebpackPlugin({
			template: './src/templates/default/index.html'
		})
	]
}