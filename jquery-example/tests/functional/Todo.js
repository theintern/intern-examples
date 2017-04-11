var registerSuite = intern.getInterface('object').registerSuite;
var assert = intern.getAssertions('assert');

registerSuite({
	name: 'Todo (functional)',

	tests: {
		'submit form': function () {
			return this.remote
				.get('./index.html')
				.findById('new-todo')
				.click()
				.pressKeys('Task 1')
				.pressKeys('\n')
				.pressKeys('Task 2')
				.pressKeys('\n')
				.pressKeys('Task 3')
				.getSpecAttribute('value')
				.then(function (val) {
					assert.ok(val.indexOf('Task 3') > -1, 'Task 3 should remain in the new todo');
				});
		}
	}
});
