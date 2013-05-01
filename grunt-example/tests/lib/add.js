define([
	'intern!tdd',
	'intern/chai!assert',
	'app/MiniSet'
], function (tdd, assert) {
	with (tdd) {
		suite('add', function () {
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
