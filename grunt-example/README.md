grunt-example
=============

## Running Tests

* Make sure you have Intern and Grunt setup
* Setup [grunt-intern](https://npmjs.org/package/grunt-intern). Also see `package.json` for this example
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
