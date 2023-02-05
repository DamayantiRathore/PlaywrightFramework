/*
 * Copyright (C) 2021, Alphabet International GmbH
 */
const Jasmine = require('jasmine');
const jasmineObj = new Jasmine();
const featureName = process.env.TEST_ID!.split('-').slice(0, 1);
const scenarioName = process.env.TEST_ID!.split('-').slice(1, 2);
process.env.tds = 'true';
process.env.DEBUG = 'info';
//set this to 0 as we accept self signed certificates.
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
jasmineObj.loadConfig({
  spec_dir: './src/test-data',
  spec_files: ['modules/**/**/' + featureName + '.ts'],
  helpers: ['hooks.ts', 'jasmine-timeout.ts'],
});
jasmineObj.execute([], scenarioName);
