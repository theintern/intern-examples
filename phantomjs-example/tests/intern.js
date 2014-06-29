define({
 environments: [
    { browserName: 'phantom' }
  ],

  suites: [ 'tests/test_example.js' ],
  tunnelOptions: {
    port: 4445
  },

  excludeInstrumentation: /./
});
