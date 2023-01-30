import {PlaywrightTestConfig} from '@playwright/test';

require('dotenv').config();

// This Configuration file sets the default configuration for Playwright

const config: PlaywrightTestConfig = {
  use: {
    baseURL: process.env.baseUrl,
    channel: 'chromium',
    headless: !!process.env.CI,
    viewport: {width: 1920, height: 1080},
    ignoreHTTPSErrors: true,
    trace: 'retain-on-failure',
    video: 'off',
    acceptDownloads: true,
    actionTimeout: process.env.pwActionTimeout ? parseInt(process.env.pwActionTimeout) : 30000, // this is the timeout for every individual action
  },

  expect: {
    timeout: process.env.pwExpectTimeout ? parseInt(process.env.pwExpectTimeout) : 30000,
  },
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI
    ? [
        ['dot'],
        ['html', {open: 'never'}],
        ['json', {outputFile: 'results.json'}],
        [
          'allure-playwright',
          {
            detail: true,
            outputFolder: 'allure-temp',
            suiteTitle: false,
          },
        ],
      ]
    : [['list'], ['html', {open: 'never'}]],
  workers: process.env.CI ? 10 : 1,
  forbidOnly: !!process.env.CI,
  timeout: process.env.pwTimeout ? parseInt(process.env.pwTimeout) : 600000, // this is the timeout for each individual test(step)
  globalTimeout: process.env.pwGlobalTimeout ? parseInt(process.env.pwGlobalTimeout) : 1800000, // this is the maximum duration for the entire suite. Setting this to prevent a CI build from locking up indefinitely
  reportSlowTests: {max: 0, threshold: 300000}, // reports on slow tests, this will inform us when tests are slowing down.
  projects: [
    {
      name: 'Amazon',
      testDir: './src/test/Amazon',
      fullyParallel: true,
    },
  ],
};
export default config;
