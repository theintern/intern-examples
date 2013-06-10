grunt-example
=============

## Running Tests

* Make sure you have Intern and Grunt setup
* This example uses local environments:
```
	environments: [
		{ browserName: 'firefox' },
		{ browserName: 'chrome' }
	],
```
so make sure you have [Selenium Server](http://docs.seleniumhq.org/download/) running and
[chromedriver](https://code.google.com/p/chromedriver/downloads/list) is in your PATH
* Run `grunt test`

Check the [Gruntfile](Gruntfile.js) for details.
If you haven't used Grunt before, here are some commands that are also available using the Gruntfile in this example:
* `grunt` - runs the default task in the Gruntfile, which is `test` in this case.
* `grunt intern:client` will run intern with the default `runType: 'client'`
* `grunt intern:clientSuiteGet` will run the `get` suite.
* `grunt intern:runner` will run the `runner` subtask that has `runType: runner`, this will run the test in Chrome and
Firefox


If you need more information check out the [task documentation](https://github.com/theintern/intern/wiki/Using-Intern-with-Grunt).
