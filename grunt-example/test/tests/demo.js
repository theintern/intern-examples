define([
	'teststack!tdd',
	'teststack/chai!assert',
	'../../app/MiniSet'
], function (tdd, assert) {
	with (tdd) {
		suite('exampleSetApp', function () {

			// TODO BUG: cannot use 'before, beforeEach', Chrome will report that tests passed
			test('#getSize', function () {
				var eSet = new MiniSet();
				assert.equal(eSet.getSize(), 0);
			});

			test('#getSizewithItems', function () {
				var eSet = new MiniSet([1,2,3]);
				assert.equal(eSet.getSize(), 3);
			});
		});
	}
});
