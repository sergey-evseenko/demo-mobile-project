require('ts-node/register')
const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

exports.config = {
  tests: 'tests/*_test.ts',
  output: './output',
  helpers: {
    Appium: {
      platform:'iOS',
      waitForTimeout: 15000,
      desiredCapabilities: {
        app: '/Users/sergeyevseenko/Desktop/Mobile Automation/FlowHealth/PP.app',
        platformVersion: '15.5',
        deviceName: 'iPhone 13 Pro'
      }
    }
  },
  include: {
    I: './steps_file.ts',
    loginPage: './pages/loginPage.ts'
  },
  bootstrap: null,
  mocha: {},
  name: 'demo-mobile-project'
}
