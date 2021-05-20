# saucedemo-test-framework

This repository contains a test framework built with [Webdriverio](https://www.npmjs.com/package/webdriverio), [Mocha](https://www.npmjs.com/package/mocha) and [TypeScript](https://www.npmjs.com/package/typescript)

## Dependencies

* [Node.js](https://nodejs.org/en/)
* Java -- Needed to run the selenium server
* Chrome

## Get started

Before you begin ensure you have cloned the repository and then install all the dependencies from the project folder:

```
git clone https://github.com/jorekone/saucedemo-test-framework.git
cd ./saucedemo-test-framework
npm install
```

## Tests

All the tests are contained in the `./src/tests` folder

### To run all the tests use:

```
npm run test:all
```

### To run a test suite:

```
npm run test:suite <test_suite>
```

### To run test individually:

```
npm run test <test-with-relative-path>
```