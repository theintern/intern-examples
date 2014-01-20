backbone-example
=============
## Setup

1. The `intern-examples` repository should accessible via a local HTTP server.

2. Install node modules

    ```
    cd backbone-example
    npm install
    ```

## Running tests

* **Local Selenium Tests** 

    (Setup to run in Firefox)

    ```
    node_modules/.bin/intern-runner config=tests/intern_local
    ```

* **Local Browser Tests**

    Navigate to `http://somePath/intern-examples/backbone-example/node_modules/intern/client.html?config=tests/intern`, making sure to adjust the url to match your local web server.

* **Remote node / browser tests via Sauce Labs**

    (Requires Sauce Labs credentials)

    ```
    node node_modules/intern/runner.js config=tests/intern
    ```