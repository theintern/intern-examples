define([
	'teststack!object',
	'teststack/chai!assert',
	'require'
], function (registerSuite, assert, require) {
	var request, url = 'http://localhost:8000/';

	registerSuite({
		name: 'demo',

		'submit form': function () {
			return this.remote
				.get(require.toUrl(url))
				.elementById('new-todo')
				.clickElement()
				.keys('Task 1')
				.keys("\n")
				.keys('Task 2')
				.keys("\n")
				.keys('Task 3')
				.getAttribute('value')
				.then(function (val) {
					assert.ok(val.indexOf('Task 3') > -1, 'Task 3 should remain in the new todo');
				})
		}
	});
});
