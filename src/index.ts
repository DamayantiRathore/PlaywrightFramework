import {test as baseTest} from '@playwright/test';
import Login from './shared/login';
import Logout from './shared/logout';
export const test = baseTest.extend<{
  loginPage: Login;
  logoutPage: Logout;
}>({
  loginPage: async ({page}, use) => {
    await use(new Login(page));
  },
  logoutPage: async ({page}, use) => {
    await use(new Logout(page));
  }
});
