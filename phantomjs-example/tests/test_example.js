define([
  'intern!object',
  'intern/chai!assert'
], function (registerSuite, assert) {
  registerSuite({
    name: 'suite',

    'example test': function () {
      assert.ok(true);
    }
  });
});
