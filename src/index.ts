import {test as baseTest} from '@playwright/test';
import Login from './login';
import Logout from './logout';
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
