/* global intern, Block */

var tdd = intern.getInterface('tdd');
var assert = intern.getPlugin('chai').assert;

var suite = tdd.suite;
var test = tdd.test;

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
