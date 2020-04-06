const path = require('path')
const webpack = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: {
		main: './src/index.js'
	},
	mode: 'development',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, '../dist'),
		publicPath: '/'
	},
	devServer: {
		contentBase: 'dist',
		overlay: true,
		hot: true,
		stats: {
			colors: true
		}
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
					{
						loader: 'babel-loader'
					}
				],
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					}
				]
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader'
					}
				]
			},
			{
				test: /\.(jpg|gif|png|)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'images/[name].[ext]'
						}
					}
				]
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HTMLWebpackPlugin({
			template: './src/index.ejs',
			inject: true,
			title: 'Webpack-course'
		})
	]
}
