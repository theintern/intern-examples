/* global intern, jQuery */
var registerSuite = intern.getPlugin('interface.object').registerSuite;
var assert = intern.getPlugin('chai').assert;

require('../../src/models/todo');

var todo;
var ajax;

registerSuite('todo model', {
	before: function () {
		// Extend the Todo model only to add a urlRoot. This
		// property is required for a model to call save()
		// without throwing an error
		var Model = window.app.Todo.extend({
			urlRoot: 'mockUrlRoot'
		});
		todo = new Model();

		// Mock the jquery ajax method for now
		ajax = jQuery.ajax;
		jQuery.ajax = function () {};
	},

	after: function () {
		jQuery.ajax = ajax;
		intern.log('coverage:', window.__coverage__);
	},

	defaults: function () {
		assert.isFalse(todo.get('completed'), 'A Todo model should default the completed property to false');
		assert.strictEqual(todo.get('title'), '', 'A Todo model should default the title property to an empty string');
	},

	toggle: function () {
		todo.toggle();
		assert.isTrue(todo.get('completed'), '', 'Completed property should switch to true after being toggled for the first time');
		todo.toggle();
		assert.isFalse(todo.get('completed'), '', 'Completed property should switch back to false after being toggled again');
	}
});
