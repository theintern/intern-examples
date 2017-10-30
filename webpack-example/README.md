# webpack-example

This example uses webpack to create a test bundle for a simple jQuery + Backbone app. The app is partially written in TypeScript to illustrate how to use TypeScript with webpack instrumentation.

## Setup

1. Install the JRE or JDK
   This demo runs with local Selenium, which Intern will automatically install.

2. Install intern command line interface (optional)

   ```
   npm install -g @theintern/cli
   ```

3. Install node modules and intern

    ```
    npm install
    ```

## Running tests

* **Local browser tests**

    ```
    npm start
    ```

    Navigate to `http://localhost:9000/__intern/`

* **Remote node / browser tests**

    ```
    npm test
    ```
