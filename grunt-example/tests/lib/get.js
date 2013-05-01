define([
	'intern!tdd',
	'intern/chai!assert',
	'app/MiniSet'
], function (tdd, assert) {
	with (tdd) {
		suite('get', function () {

			test('#getSize', function () {
				var bSet = new MiniSet();
				assert.equal(bSet.getSize(), 0);
			});

			test('#getSizewithItems', function () {
				var eSet = new MiniSet([1, 2, 3]);
				assert.equal(eSet.getSize(), 3);
			});
		});
	}
});
