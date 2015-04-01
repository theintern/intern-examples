define([
	'intern!object',
	'intern/chai!assert',
	'intern/order!todo/utils',
	'intern/order!todo/todoModel'
], function (registerSuite, assert, todoModel) {
	registerSuite({
		name: 'todoModel',

		beforeEach: function () {
			localStorage.clear();
		},

		'default data': function () {
			var emptyModel = new app.TodoModel('foo');
			assert.strictEqual(emptyModel.todos.length, 0, 'Todos array should default to an empty array.');
		},

		'complete (empty model)': function () {
			var emptyModel = new app.TodoModel('bar');
			emptyModel.addTodo('item1');
			emptyModel.addTodo('item2');
			assert.strictEqual(emptyModel.todos.length, 2, 'Todos array should have two items.');
			assert.strictEqual(emptyModel.todos.filter(function (todo) { return !!todo.completed; } ).length, 0, 'Prepopulated model todos should not be complete');
			emptyModel.toggleAll(true);
			assert.strictEqual(emptyModel.todos.filter(function (todo) { return !!todo.completed; } ).length, 2, 'Complete count should change when item is manually toggled');
		}
	});
});
