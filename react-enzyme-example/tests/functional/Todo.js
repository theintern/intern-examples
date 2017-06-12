const { describe, it } = intern.getPlugin('interface.bdd');
const expect = intern.getPlugin('chai.expect');

describe('Todo (functional)', suite => {
	it('should let users add items', function () {
		return this.remote
			.setFindTimeout(5000)
			.get('http://localhost:10543/index.html')
			.findByCssSelector('input.new-todo')
			.click()
			.pressKeys('Task 1')
			.pressKeys('\n')
			.pressKeys('Task 2')
			.pressKeys('\n')
			.pressKeys('Task 3')
			.getSpecAttribute('value')
			.then(function (val) {
				expect(val).to.include('Task 3');
			});
	});
});
