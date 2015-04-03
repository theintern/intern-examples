// Inspired by https://theintern.github.io/intern/#testing-other-module

define([
	'intern/dojo/request',
	'react/JSXTransformer',
	'react/react-with-addons'
], function (request, transformer, react) {
	/**
	 * React has AMD support so when require is present it will behave as a module
	 * The react example however expects a global React so we need to put it back
	 * into global space.
	 */
	function globalizeReact() {
		var global = (function () {
			return this;
		})();
		global.React = global.React || react;
	}

	return {
		/**
		 * A function that is called to load a resource.
		 *
		 * @param name The name of the resource to load.
		 * @param req A local "require" function to use to load other modules.
		 * @param onload A function to call with the value for name. This tells the loader that the plugin is done
		 * 		  loading the resource. onload.error() can be called, passing an error object to it, if the plugin
		 * 		  detects an error condition that means the resource will fail to load correctly.
		 */
		load: function (name, req, onload) {
			globalizeReact();

			request(req.toUrl(name)).then(function (sourceCode) {
				// Compile the JSX source into JavaScript code
				var javascriptCode = transformer.transform(sourceCode).code;

				// Execute the compiled function. In this case the example code
				// puts things into the global space so it needs to be run in a script tag.
				var codeNode = document.createTextNode(javascriptCode);
				var node = document.createElement('script');
				node.type = 'text/javascript';
				node.appendChild(codeNode);
				document.head.appendChild(node);
				onload();
			});
		}
	};
});
