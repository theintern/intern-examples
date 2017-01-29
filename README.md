# intern-examples

This repository is a collection of examples of using [Intern](https://github.com/theintern/intern) in web applications.
Use these examples as your guide to integrate [Intern](https://github.com/theintern/intern) into your projects!
Every example has a README that will guide you through the process of setting it up.

## Examples

### Backbone Application

See `backbone-example` folder and the associated README.
This example showcases both unit tests and functional tests that work locally. It is based on the [TodoMVC Backbone Example](http://todomvc.com/examples/backbone/).
This example will generate an HTML code coverage report in the `html-report` directory.

----

### Dojo Application

See `dojo-example` folder and the associated README. This example showcases both unit tests and functional tests that work locally and remotely via Sauce Labs. It is based on the [TodoMVC Dojo Example](http://todomvc.com/examples/dojo/).

----

### jQuery Application

See `jquery-example` folder and the associated README. This example showcases both unit tests and functional tests that work locally and remotely via Sauce Labs. It is based on the [TodoMVC jQuery Example](http://todomvc.com/examples/jquery/).

----

### React Application

See `react-example` folder and the associated README. This example showcases both unit tests and functional tests that work locally and remotely via Sauce Labs. It is based on the [TodoMVC React Example](http://todomvc.com/examples/react/).

----

### Parallel Example

Using bash to run multiple instances of intern locally

----

### Using Intern with Grunt

Grunt support is built into Intern, all you have to do is include the task in your Gruntfile using
`grunt.loadNpmTasks('intern');`.

See `grunt-example` folder for an example of how to use it or read the [task documentation](https://github.com/theintern/intern/wiki/Using-Intern-with-Grunt).

----

### Using Intern with [Travis CI](https://travis-ci.org/)
![](https://api.travis-ci.org/theintern/intern-examples.svg?branch=master)

See `travis-ci-example` folder and the `.travis.yml` in the root of this repository.

Running examples:
* [https://travis-ci.org/vladikoff/intern-examples](https://travis-ci.org/vladikoff/intern-examples)

----

### Using Cloud Testing Providers (BrowserStack, Sauce Labs, Testing Bot)

Each of the examples within this repository can be switched from running tests locally to using a cloud testing provider by setting the relevant
[Cloud testing Intern settings](https://theintern.github.io/intern/#hosted-selenium) within the Intern config
for that example.

----


## External Examples

* [Intern example configuration](https://github.com/theintern/intern/blob/master/tests/example.intern.js)
* [Intern self-testing example](https://github.com/theintern/intern/blob/master/tests/selftest.intern.js)
* [Functional test demo from dojo2-core](https://github.com/csnover/dojo2-core/tree/master/test/functional)
* [Cassowary JS](https://github.com/slightlyoff/cassowary.js/)
* [jQuery PEP](https://github.com/jquery/PEP/tree/master/tests)
* [Official Intern Tutorial](https://github.com/theintern/intern-tutorial)
* [Tutorial from ArcGIS](https://github.com/stdavis/intern-tutorial-esri-jsapi)
* [Firefox Accounts JS Client testing example](https://github.com/mozilla/fxa-js-client/tree/master/tests)

## From the Wiki

* [BDD](https://github.com/theintern/intern/wiki/Writing-Tests-with-Intern#bdd)
* [TDD](https://github.com/theintern/intern/wiki/Writing-Tests-with-Intern#tdd)
* [Object](https://github.com/theintern/intern/wiki/Writing-Tests-with-Intern#object)
* [Functional](https://github.com/theintern/intern/wiki/Writing-Tests-with-Intern#functional)
* [Using Reporters](https://github.com/theintern/intern/wiki/Using-and-Writing-Reporters)

## Other Resources

[Intern Wiki](https://github.com/theintern/intern/wiki) ::
[Intern Website](http://theintern.io/)

## Got Examples?

If you have examples of using Intern in your projects, please file an issue and we will try to add it to this list.
