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

		'get incomplete (prepopulated model)': function () {
			var prepopulatedModel = new SimpleTodoModel({
				todos: [{}, {}]
			});
			assert.strictEqual(prepopulatedModel.get('incomplete'), 2, 'Prepopulated model todos should determine incomplete model propery.');
			prepopulatedModel.set('complete', 2);
			assert.strictEqual(prepopulatedModel.get('incomplete'), 0, 'Incomplete count should drop to 0 when complete count is manually updated.');
		},

		'get incomplete (empty model)': function () {
			var emptyModel = new SimpleTodoModel();
			emptyModel.todos.push({});
			emptyModel.todos.push({});
			assert.strictEqual(emptyModel.get('incomplete'), 2, 'Prepopulated model todos should determine incomplete model propery.');
			emptyModel.set('complete', 2);
			assert.strictEqual(emptyModel.get('incomplete'), 0, 'Incomplete count should change when complete count is manually updated.');
		},

		'get complete (prepopulated model)': function () {
			var prepopulatedModel = new SimpleTodoModel({
				todos: [{}, {}]
			});
			assert.strictEqual(prepopulatedModel.get('complete'), 0, 'Prepopulated model todos should determine complete model propery.');
			prepopulatedModel.set('incomplete', 0);
			assert.strictEqual(prepopulatedModel.get('complete'), 2, 'Complete count should change when incomplete count is manually updated.');
		},

		'get complete (empty model)': function () {
			var emptyModel = new SimpleTodoModel();
			emptyModel.todos.push({});
			emptyModel.todos.push({});
			assert.strictEqual(emptyModel.get('complete'), 0, 'Prepopulated model todos should determine complete model propery.');
			emptyModel.set('incomplete', 0);
			assert.strictEqual(emptyModel.get('complete'), 2, 'Complete count should change when incomplete count is manually updated.');
		}
	});
});