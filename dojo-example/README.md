dojo-example
=============
## Setup

1. The `intern-examples` repository should accessible via a local HTTP server.

1. Install and update submodules

    ```
    cd intern-examples
    git submodule update --init --recursive
    ```
2. Install node modules

    ```
    cd dojo-example
    npm install
    ```

The application should be accessible via `http://somePath/intern-examples/dojo-example` after the url is adjusted to match your local web server.

## Running tests

* **Local node tests**

    ```
    node node_modules/intern/client.js config=tests/intern
    ```

* **Local browser tests**

    Navigate to `http://somePath/intern-examples/dojo-example/node_modules/intern/client.html?config=tests/intern`, making sure to adjust the url to match your local web server.

* **Remote node / browser tests**

    ```
    node node_modules/intern/runner.js config=tests/intern
    ```
