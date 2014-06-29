#!/bin/bash

# NOTE:
# Make sure to have 'java -jar selenium-server-standalone-2.39.0.jar'
# and 'phantomjs --webdriver=4445' running for all examples to work.

export SAUCE_USERNAME=intern-example-ci
export SAUCE_ACCESS_KEY=a4eb8d67-ef84-444e-a436-b588abb7faef
echo Running All Examples

# angular
cd angularjs-example
npm install
npm test
cd ..

# backbone
cd backbone-example
npm install
npm test
cd ..


# dojo-example
cd dojo-example
npm install
npm test
cd ..

# ember-example
cd ember-example
npm install
npm test
cd ..

# grunt-example
cd grunt-example
npm install
npm test
cd ..

# jquery-example
cd jquery-example
npm install
npm test
cd ..

# travis-example
cd travis-ci-example
npm install
npm test
cd ..


