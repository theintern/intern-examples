import { ProvidePlugin } from 'webpack';
import { resolve } from 'path';

module.exports = {
	mode: 'development',
	entry: {
		app: './src/app.js',
		tests: './tests/intern.js'
	},
	devtool: 'inline-source-map',
	module: {
		rules: [
			{ test: /\/js\/.*\.js$/, use: '@theintern/istanbul-loader' },
			{ test: /\.ts$/, use: [ '@theintern/istanbul-loader', 'ts-loader' ] }
		]
	},
	resolve: {
		extensions: ['.ts', '.js']
	},
	plugins: [
		new ProvidePlugin({
			jQuery: 'jquery',
			'_': 'underscore',
			Backbone: 'backbone'
		})
	]
};
