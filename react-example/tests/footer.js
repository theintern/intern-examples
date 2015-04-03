define([
	'intern!object',
	'intern/chai!assert',
	'react/react-with-addons',
	'./support/jsx!../js/footer.jsx'
], function (registerSuite, assert, React) {
	var TestUtils = React.addons.TestUtils;

	registerSuite({
		name: 'footer',

		construction: function () {
			assert.isDefined(app);
			assert.isDefined(app.TodoFooter);
		},

		render: function () {
			var node = React.createElement(app.TodoFooter);
			assert.isTrue(TestUtils.isElement(node));
		}
	});
});
