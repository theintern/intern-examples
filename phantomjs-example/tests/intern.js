define({
 environments: [
    { browserName: 'phantom' }
  ],

  useSauceConnect: false,

  suites: [ 'tests/test_example.js' ],

  excludeInstrumentation: /./
});
