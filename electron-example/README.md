electron-example
================

This example is based on the [React Redux example](https://github.com/reactjs/redux/tree/master/examples/todomvc),
running in Electron. It contains two sets of functional tests, one that uses Intern’s built-in WebDriver library, and
one that uses Spectron.

## Setup 

1. Install the JRE or JDK. This demo uses Selenium, which requires Java, to run WebDriver tests.
   
2. Install node modules
   ```
   $ npm install
   ```

3. Build the example
   ```
   $ npm run build
   ```


## Running Tests

**Unit tests in Node**

    $ npm test

**WebDriver tests**

	$ npm test webdriver

**WebDriver tests using Spectron**

	$ npm test config=intern-spectron.json
