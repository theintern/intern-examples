# Intern-examples

This repository is a collection of examples of using [Intern](https://github.com/theintern/intern) in web applications.
Use these examples as your guide to integrate [Intern](https://github.com/theintern/intern) into your projects!
Every example has a README that will guide you through the process of setting it up.

## Examples

### Backbone Application

See `backbone-example` folder. This example showcases functional tests that work
locally and remotely with Sauce Labs.
Based on the [TodoMVC Backbone Example](http://todomvc.com/architecture-examples/backbone/).

----

### Using Intern with `grunt-intern`

Grunt support is built into Intern, all you have to do is include the task in your Gruntfile using
`grunt.loadTasks('intern/grunt');`.

See `grunt-example` folder for an example of how to use it or read the [task documentation](https://github.com/theintern/intern/wiki/Using-Intern-with-Grunt).

----

### Using Intern with [Travis CI](https://travis-ci.org/)
![](https://api.travis-ci.org/vladikoff/intern-examples.png)

See `travis-ci-example` folder and the `.travis.yml` in the root of this repository.

Running examples:
* [https://travis-ci.org/vladikoff/intern-examples](https://travis-ci.org/vladikoff/intern-examples)

----

### Full SauceLabs Example

The goal of this example is to test as many browsers on SauceLabs as possible.
This example might use a lot of your available minutes on SauceLabs and it is not recommended to run it.

See `travis-ci-example/test/teststack_full.js`.

----


## External Examples

* [Intern example configuration](https://github.com/theintern/intern/blob/master/tests/example.intern.js)
* [Intern self-testing example](https://github.com/theintern/intern/blob/master/tests/selftest.intern.js)
* [Functional test demo from dojo2-core](https://github.com/csnover/dojo2-core/tree/master/test/functional)

## Examples from the Wiki

* [BDD](https://github.com/theintern/intern/wiki/Writing-Tests#bdd)
* [TDD](https://github.com/theintern/intern/wiki/Writing-Tests#tdd)
* [Object](https://github.com/theintern/intern/wiki/Writing-Tests#object)
* [Functional](https://github.com/theintern/intern/wiki/Writing-Tests#functional)

## Other Resources

[Intern Wiki](https://github.com/theintern/intern/wiki) ::
[Intern Website](http://theintern.io/)
