const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    // Puppeteer: {
    //   url: ' file:///home/dell/Desktop',
    //   show: true,
    //   windowSize: '1200x900'
    // }
    REST: {
      endpoint: 'http://localhost:3000/api',
      defaultHeaders: {
        "Content-Type": "application/json"
      }
    },
    JSONResponse: {}
  },
  include: {
    I: './steps_file.js'
  },
  "bootstrap": false,
  "mocha": {},
  name: 'codeceptjs'
}