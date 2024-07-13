# PlaywrightTestTask
## summary
5 test cases for https://www.redmine.org/ website

## requirements:
- npm
- java

## steps to install:
```
npm init playwright@latest
npm install --save-dev allure-commandline
npm install --save-dev allure-playwright
```
add Allure Playwright as a reporter -- in config.js: add 
```
reporter: [["line"], ["allure-playwright"]]
```

## steps to launch:
```
npx playwright test
```

## steps to creating the report:
```
npx allure serve allure-results
```