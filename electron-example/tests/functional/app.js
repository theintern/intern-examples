var { assert } = intern.getPlugin('chai');
const { registerSuite } = intern.getInterface('object');

registerSuite('Application', {
	afterEach() {
		return this.remote
			.refresh()
			.sleep(1000);
	},

	tests: {
		initialized() {
			return this.remote
				.getPageTitle()
				.then(title => assert.equal(title, 'Redux TodoMVC Example'));
		},

		'add item'() {
			return this.remote
				.setFindTimeout(5000)
				.findByCssSelector('input.new-todo')
				.type('Task 1\n')
				.type('Task 2\n')
				.type('Task 3')
				.getSpecAttribute('value')
				.then(val => assert.include(val, 'Task 3'));
		}
	}
});
