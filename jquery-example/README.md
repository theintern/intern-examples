jquery-example
=============

This example is based on the [TodoMVC jQuery Example](http://todomvc.com/examples/jquery/).

## Setup

1. Install the JRE or JDK. This demo uses Selenium, which requires Java, to run WebDriver tests.

2. Install node modules
   ```
   npm install
   ```

## Running tests

**Unit tests in Node**

    $ npm test

Note that this command won’t actually run any tests since the only unit test suites in the test config are in
`browserSuites` (meaning that Intern will only try to run them in a Browser).

**WebDriver tests**

    $ npm test webdriver
