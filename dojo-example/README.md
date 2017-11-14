dojo-example
=============

It is based on the [TodoMVC Dojo Example](http://todomvc.com/examples/dojo/).

## Setup

1. Install the JRE or JDK. This demo uses Selenium, which requires Java, to run WebDriver tests.

2. Install node modules
   ```
   $ npm install
   ```

## Running tests

**Run unit and functional tests in Chrome**

    $ npm test

**Run unit and functional tests in other browsers**

    $ npm test config=@firefox
    $ npm test config=@ie

Note that the above commands all require that the browser be available on the test system.
