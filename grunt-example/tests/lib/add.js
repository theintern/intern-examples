define([
	'intern!tdd',
	'intern/chai!assert',
	'app/Block'
], function (tdd, assert) {
	with (tdd) {
		suite('add', function () {
			test('#addItems', function () {
				var aSet = new Block();
				aSet.add(3);
				aSet.add("text");
				assert.equal(aSet.has(3), true);
				assert.equal(aSet.has("text"), true);
				assert.equal(aSet.has(5), false);
			});
		});
	}
});
