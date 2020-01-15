const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CirculareDependencyPlugin = require('circular-dependency-plugin');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const smp = new SpeedMeasurePlugin();

module.exports = (env, argv) => smp.wrap({
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
				loader: 'babel-loader'
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
			  loader: 'file-loader',
			  options: {
				  name(file) {
					  if(argv.mode === 'development') {
						  return '[path][name].[ext]';
					  }
					  return '[contenthash].[ext]';
				  },
				  outputPath: 'images',
			  },
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({filename: 'style.[name].css'}),
		new HtmlWebpackPlugin({template: './src/templates/default/index.html'}),
		new CirculareDependencyPlugin()
	]
})