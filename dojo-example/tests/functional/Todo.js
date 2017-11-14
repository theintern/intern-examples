define([ 'dojo/node!@theintern/leadfoot/keys' ], function (keysModule) {
	var registerSuite = intern.getInterface('object').registerSuite;
	var assert = intern.getPlugin('chai').assert;
	var keys = keysModule.default;

	registerSuite('Todo (functional)', {
		'submit form': function () {
			return this.remote
				.get('index.html')
				.setFindTimeout(60000)
				.findById('new-todo')
				.type('Task 1')
				.type(keys.RETURN)
				.type('Task 2')
				.type(keys.RETURN)
				.type('Task 3')
				.getSpecAttribute('value')
				.then(function (val) {
					assert.ok(val.indexOf('Task 3') > -1, 'Task 3 should remain in the new todo');
				});
		}
	});
});
