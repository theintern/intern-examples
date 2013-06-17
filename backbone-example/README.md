backbone-example
=============


## Setup

* Using bower in the `app` directory, run `bower install`
* Serve the `app` folder

## Running Tests

### Setup Intern using NPM

Follow the steps in the [quick start guide](https://github.com/theintern/intern#quick-start).

### Running

* Make sure the app is available at `localhost:8000` by serving the `app` folder using a local server

* Run functional test suites via **Sauce Labs**:
	* [TODO: Setup Steps here]
* Run functional test suites **locally**:
	* Prepare Selenium (i.e. `java -jar selenium-server.jar`)
	* From project root run: `node node_modules/intern/runner.js config=tests/intern_local.js`
