/* global intern, Block */

var tdd = intern.getInterface('tdd');
var assert = intern.getAssertions('assert');

var suite = tdd.suite;
var test = tdd.test;

suite('add', function () {
	test('#addItems', function () {
		var aSet = new Block();
		aSet.add(3);
		aSet.add('text');
		assert.equal(aSet.has(3), true);
		assert.equal(aSet.has('text'), true);
		assert.equal(aSet.has(5), false);
	});
});
