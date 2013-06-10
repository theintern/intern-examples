define([
	'intern!tdd',
	'intern/chai!assert',
	'app/Block'
], function (tdd, assert) {
	with (tdd) {
		suite('get', function () {

			test('#getSize', function () {
				var bSet = new Block();
				assert.equal(bSet.getSize(), 0);
			});

			test('#getSizewithItems', function () {
				var eSet = new Block([1, 2, 3]);
				assert.equal(eSet.getSize(), 3);
			});
		});
	}
});
