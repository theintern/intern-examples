import { ProvidePlugin } from 'webpack';
import { join } from 'path';

module.exports = {
	entry: {
		tests: './tests/intern.js'
	},
	output: {
		filename: join('tests', 'tests.js')
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
