import LoginPage from '../pageobjects/login.page';

describe("Basket - Add and remove items", () => {
    it("Should allow user to log in", () => {
        LoginPage.open();
        LoginPage.usernameInput.click();
        LoginPage.usernameInput.setValue('standard_user');
        LoginPage.passwordInput.click();
        LoginPage.passwordInput.setValue('secret_sauce');
        LoginPage.loginButton.click();
    })
})