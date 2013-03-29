backbone-example
=============


## Setup

* Using bower in the `app` directory, run `bower install`
* Serve the `app` folder

## Running Tests

### Setup Intern

	* `git clone --recursive git@github.com:theintern/intern.git` OR [ TODO: `npm install ...` ]
	* `npm install` inside Intern

### Running

* Make sure the app is available at `localhost:8000` by serving the `app` folder using a local server

* Run functional test suites via **Sauce Labs**:
	* [TODO: Setup Steps here]
* Run functional test suites **locally**:
	* Prepare Selenium (i.e. `java-jar selenium-server.jar`)
	* From project root run: `node intern/runner.js config=test/intern.js`
