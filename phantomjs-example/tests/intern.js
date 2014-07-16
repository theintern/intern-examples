define({
 environments: [
    { browserName: 'phantomjs' }
  ],

  suites: [ 'tests/test_example.js' ],
  tunnel: 'NullTunnel',

  excludeInstrumentation: /./
});
