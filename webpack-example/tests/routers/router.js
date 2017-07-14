/* global intern */
var registerSuite = intern.getPlugin('interface.object').registerSuite;
var assert = intern.getPlugin('chai').assert;

var router;
var triggerType;

registerSuite('router', {
	before: function () {
		// Create a mock app with a todos collection
		window.app = {
			todos: {
				trigger: function (type) {
					triggerType = type;
				}
			}
		};

		// Require router here so it wil use the mock app
		require('../../src/routers/router');
		router = window.app.TodoRouter;
	},

	beforeEach: function () {
		triggerType = null;
	},

	route: function () {
		router.setFilter('foo');
		assert.equal(window.app.TodoFilter, 'foo');
		assert.equal(triggerType, 'filter');
	}
});
