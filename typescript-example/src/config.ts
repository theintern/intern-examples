SystemJS.config({
	map: {
		backbone: 'node_modules/backbone/backbone.js',
		underscore: 'node_modules/underscore/underscore.js',
		jquery: 'node_modules/jquery/dist/jquery.js',
		'backbone.localstorage':
			'node_modules/backbone.localstorage/build/backbone.localStorage.js'
	},
	packages: {
		src: {
			defaultExtension: 'js'
		}
	}
});
