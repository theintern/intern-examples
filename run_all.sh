#!/bin/bash

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
