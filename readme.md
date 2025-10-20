npx playwright test
    Runs the end-to-end tests.

  npx playwright test --ui
    Starts the interactive UI mode.

  npx playwright test --project=chromium
    Runs the tests only on Desktop Chrome.

  npx playwright test example
    Runs the tests in a specific file.

  npx playwright test --debug
    Runs the tests in debug mode.

  npx playwright codegen
    Auto generate tests with Codegen.


Run con tags
npx playwright test chapter01/15_tags_test.spec.ts --grep '@SmokeTesting'



We suggest that you begin by typing:

    npx playwright test


Install Allure

npm install -D allure-playwright allure-commandline



Open the report

npx allure generate allure-results --clean

npx allure open


Data Driven CSV File

install plugin

npm install csv-parse