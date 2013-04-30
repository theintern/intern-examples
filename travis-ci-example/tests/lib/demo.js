define([
	'intern!tdd',
	'intern/chai!assert',
	'../../app/App'
], function (tdd, assert) {
	with (tdd) {
		suite('demo', function () {
			test('#example', function () {
				// app comes from '../../app/App'
				assert.equal(app.version, 1);
			});
		});
	}
});
