jquery-example
=============
## Setup

1. The `intern-examples` repository should accessible via a local HTTP server.

2. Install node modules

    ```
    cd jquery-example
    npm install
    ```

The application should be accessible via `http://somePath/intern-examples/jquery-example` after the url is adjusted to match your local web server.

## Running tests

* **Local node tests**

    ```
    node node_modules/intern/client.js config=tests/intern
    ```

* **Local browser tests**

    Navigate to `http://somePath/intern-examples/jquery-example/node_modules/intern/client.html?config=tests/intern`, making sure to adjust the url to match your local web server.

* **Remote node / browser tests**

    ```
    node node_modules/intern/runner.js config=tests/intern
    ```
