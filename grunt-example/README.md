grunt-example
=============

## Setup 

1. Install the JRE or JDK. This demo uses Selenium, which requires Java, to run WebDriver tests.
   
2. Install grunt-cli
   ```
   $ npm install -g grunt-cli
   ```

3. Install node modules
   ```
   $ npm install
   ```

## Running Tests

**Unit tests in Node**

    $ grunt test

**WebDriver tests**

	$ grunt test:browser

## More information

Check the [Gruntfile](Gruntfile.js) for details. If you haven't used Grunt before, here are some commands that are also
available using the Gruntfile in this example:

* `grunt` runs the default task in the Gruntfile, which is `test` in this case.
* `grunt intern:node` will run Intern’s Node executor
* `grunt intern:webdriver` will run Intern’s WebDriver executor, which will run unit tests in a browser

If you need more information check out the [task
documentation](https://github.com/jason0x43/intern/blob/4.0.0-pre/docs/running.md#grunt).
