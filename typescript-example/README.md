# typescript-example

This example uses Intern to test a jQuery + Backbone TodoMVC app written in TypeScript.

## Setup

1. Install the JRE or JDK
   This demo runs with local Selenium, which Intern will automatically install.

2. Install node modules

    ```
    npm install
    ```

## Running tests

* **From a browser**

    ```
    npm start
    ```

    Navigate to `http://localhost:9000/__intern/`

* **Using WebDriver**

    ```
    npm test
    ```

The `npm test` command will run tests in Chrome by default. The test config in this project contains convenience configurations for other browsers as well.

```
npm test config=@edge
npm test config=@firefox
npm test config=@ie
npm test config=@safari
```
