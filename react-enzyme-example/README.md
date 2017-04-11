react-enzyme-example
====================

This example is based on the [React Redux example](https://github.com/reactjs/redux/tree/master/examples/todomvc).

## Setup

1. Install the JRE or JDK. This demo uses Selenium, which requires Java, to run WebDriver tests.
   
2. Install node modules
   ```
   npm install
   ```

3. Build the example (this is necessary for functional tests to work)
   ```
   $ npm run build
   ```

## Running tests

**Unit tests in Node**

    $ npm test

**WebDriver tests**

	$ npm test webdriver

## Notes

In the `intern.json` file, there are separate `browserSuites` and `nodeSuites` properties. This is because some of the
unit tests don't work in the browser, but all of them will work in Node.
