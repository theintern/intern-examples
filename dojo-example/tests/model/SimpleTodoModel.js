define([
	'intern!object',
	'intern/chai!assert',
	'todo/model/SimpleTodoModel'
], function (registerSuite, assert, SimpleTodoModel) {
	registerSuite({
		name: 'SimpleTodoModel',

		'default data': function () {
			var emptyModel = new SimpleTodoModel();
			assert.strictEqual(emptyModel.get('id'), 'todos-dojo', 'Id should default to "todos-dojo"');
			assert.strictEqual(emptyModel.get('todos').length, 0, 'Todos array should default to an empty array.');
			assert.strictEqual(emptyModel.get('incomplete'), 0, 'Incomplete count should default to 0.');
			assert.strictEqual(emptyModel.get('complete'), 0, 'Incomplete count should default to 0.');
		},

		'get incomplete (empty model)': function () {
			var emptyModel = new SimpleTodoModel();
			emptyModel.todos.push({});
			emptyModel.todos.push({});
			assert.strictEqual(emptyModel.get('incomplete'), 2, 'Prepopulated model todos should determine incomplete model property.');
			emptyModel.set('complete', 2);
			assert.strictEqual(emptyModel.get('incomplete'), 0, 'Incomplete count should change when complete count is manually updated.');
		},

		'get complete (empty model)': function () {
			var emptyModel = new SimpleTodoModel();
			emptyModel.todos.push({});
			emptyModel.todos.push({});
			assert.strictEqual(emptyModel.get('complete'), 0, 'Prepopulated model todos should determine complete model property.');
			emptyModel.set('incomplete', 0);
			assert.strictEqual(emptyModel.get('complete'), 2, 'Complete count should change when incomplete count is manually updated.');
		}
	});
});