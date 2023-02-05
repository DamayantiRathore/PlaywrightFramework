import {TestInfo} from '@playwright/test';
import path from 'path';
import {test as base} from '../page-objects';
import TestDataService from './api/test-data-service/test-data-service';

const testDataService = new TestDataService();
const tdsData: any = global;
export const test = base.extend<{sharedBeforeEach: void}>({
  sharedBeforeEach: [
    async ({}, use: any, testInfo: TestInfo): Promise<any> => {
      if (testInfo.title.includes('@tds-setup')) {
        const featureName = testDataService.makeStringTDSCompatible(
          path.basename(testInfo.file).replace('.test.ts', '')
        );
        const scenarioName = testDataService.makeStringTDSCompatible(testInfo.title.split('@tds-setup', 1)[0].trim());
        const testId = featureName + '-' + scenarioName;
        tdsData.testData = await testDataService.reserveTestData(testId);
      }
      await use();
      if (tdsData.testData) await testDataService.testSetResultUpdate(tdsData.testData.id, testInfo.status!);
    },
    {auto: true},
  ], // starts automatically for every test - we pass "auto" for that.
});

export {expect} from '@playwright/test';
