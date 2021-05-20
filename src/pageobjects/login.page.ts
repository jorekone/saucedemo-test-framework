import config from '../config.json';
import Page from './basepageobjects/page';

class LoginPage extends Page {
    get usernameInput() { return $('[data-test="username"]') }
    get passwordInput() { return $('[data-test="password"]') }
    get loginButton() { return $('[data-test="login-button"]') }

    open(): LoginPage {
        super.open(`https://www.saucedemo.${config.domain}/`);
        return this;
    }

    loginWithStandardUser(): void {
        this.usernameInput.click();
        this.usernameInput.setValue('standard_user');
        this.passwordInput.click();
        this.passwordInput.setValue('secret_sauce');
        this.loginButton.click();
    }
}

export default new LoginPage();