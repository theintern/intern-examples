/*global $:false, app:false */

define([
	'intern!object',
	'intern/chai!assert',
	'intern/order!jquery/jquery',
	'intern/order!underscore/underscore',
	'intern/order!backbone/backbone',
	'intern/order!todo/models/todo'
], function (registerSuite, assert) {
	var todo,
		ajax;

	registerSuite({
		name: 'todo model',

		setup: function () {
			// Extend the Todo model only to add a urlRoot. This
			// property is required for a model to call save()
			// without throwing an error
			var Model = app.Todo.extend({
				urlRoot: 'mockUrlRoot'
			});
			todo = new Model();

			// Mock the jquery ajax method for now
			ajax = $.ajax;
			$.ajax = function () {};
		},

		teardown: function () {
			$.ajax = ajax;
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
});