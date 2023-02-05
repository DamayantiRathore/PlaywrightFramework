import {expect} from '@playwright/test';
import {test} from '../../../../helpers/hooks';

test.describe('test suite', () => {
  test.beforeEach(async ({testDataUtility}) => {
    contractNumber = await testDataUtility.getValueFromTestData(
      'xyz',
      'Using xyz'
    );
  });

  test('test something@tds-setup', async ({loginPage}) => {
    await loginPage.goToAndLogin('asset-purchase-app', 'qqiam300');
   });
  });
