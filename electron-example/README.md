# electron-example

This example is based on the [React Redux example](https://github.com/reactjs/redux/tree/master/examples/todomvc),
running in Electron. It contains two sets of functional tests, one that uses Intern’s built-in WebDriver library, and
one that uses Spectron. It also contains unit tests, but these are run in Node rather than Electron as Intern 4.x does
not currently support running unit tests in Electron.

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

**Unit tests (in Node) and functional tests**

    $ npm test

On Windows, run

    $ npm test config=@windows

**WebDriver tests using Spectron**

    $ npm test config=intern-spectron.json
