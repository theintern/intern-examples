define([
	'intern!object',
	'intern/chai!assert',
	'require'
], function (registerSuite, assert, require) {
	var request,
		url = 'http://localhost/Projects/intern-examples/dojo-example';

	registerSuite({
		name: 'Todo (functional)',

		'submit form': function () {
			return this.remote
				.get('http://localhost/Projects/intern-examples/dojo-example').then(function () {
					console.log('page loaded');
				})
				// .elementById('new-todo')
				// .clickElement()
				// .keys('Task 1')
				// .keys("\n")
				// .keys('Task 2')
				// .keys("\n")
				// .keys('Task 3')
				// .getAttribute('value')
				// .then(function (val) {
				// 	assert.ok(val.indexOf('Task 3') > -1, 'Task 3 should remain in the new todo');
				// })
		}
	});
});