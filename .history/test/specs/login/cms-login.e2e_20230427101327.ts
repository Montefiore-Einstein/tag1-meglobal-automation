import LoginPage from  '../../pageobjects/CMS/Login/login.page';
import SecurePage from '../../pageobjects/authenticated.page';
import {users} from '../../data/users.data'

/*
describe('', () => {
    it('Should Login to the Drupal CMS with valid Content Administrator credentials', async () => {
        await LoginPage.open();

        await LoginPage.login(LoginData[0].username, LoginData[0].password);
        
        // TODO: Add successful login assertions
    });
});
*/

describe('Login Page', () => {
    before(async () => {
      // Handle login modal before running tests
      browser.url(`https://meda2022:meda2022@meglobalstg.prod.acquia-sites.com/`)
      await expect(browser.url).toHaveUrlContaining('meglobalstg.prod.acquia-sites.com/home')
    });
  
    afterEach(async function() {
      // Take a screenshot after each test/assertion
      const timestamp = Date.now();
      const testName = this.currentTest?.fullTitle().replace(/\s/g, '_');
      const screenshotPath = `./screenshots/${testName}_${timestamp}.png`;
      await browser.saveScreenshot(screenshotPath);
    });
  
    it('should allow a Content Administrator user to login with valid credentials', async () => {
      //const user = users.validAdmin;
      await LoginPage.open();
      await LoginPage.login(users.validAdmin.username, users.validAdmin.password);

      expect(await LoginPage.headerText).toBeDisplayed();
    });
  
    it('should display an error message for invalid credentials', async () => {
      const user: User = { username: 'invalid_username', password: 'invalid_password' };
      await LoginPage.open();
      await LoginPage.login(user);
      expect(await LoginPage.getErrorMessage()).to.equal('Invalid username or password!');
    });
  });
