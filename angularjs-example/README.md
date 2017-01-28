angular-1x-example
=============

## Setup

1. Install the JRE or JDK
   This demo runs with local Selenium, which Intern will automatically install.

2. Install intern command line interface

   ```
   npm install -g intern-cli
   ```

3. Install node modules and intern

    ```
    npm install
    ```

## Running tests

* **Local browser tests**

    ```
    intern serve
    ```

    Navigate to `http://localhost:9000/node_modules/intern/client.html?config=tests/intern.js`.

* **Remote node / browser tests**

    ```
    intern run --webdriver
    ```
