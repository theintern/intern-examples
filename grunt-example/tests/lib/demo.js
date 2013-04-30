define([
	'intern!tdd',
	'intern/chai!assert',
	'app/MiniSet'
], function (tdd, assert) {
	with (tdd) {
		suite('exampleSetApp', function () {

			test('#getSize', function () {
				var bSet = new MiniSet();
				assert.equal(bSet.getSize(), 0);
			});

			test('#getSizewithItems', function () {
				var eSet = new MiniSet([1, 2, 3]);
				assert.equal(eSet.getSize(), 3);
			});

			test('#addItems', function () {
				var aSet = new MiniSet();
				aSet.add(3);
				aSet.add("text");
				assert.equal(aSet.has(3), true);
				assert.equal(aSet.has("text"), true);
				assert.equal(aSet.has(5), false);
			});
		});
	}
});
