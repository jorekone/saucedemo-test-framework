import Page from './page';

class LoginPage extends Page {
    get usernameInput() { return $("//*[@data-test='username']") }
    get passwordInput() { return $("//*[@data-test='password']") }
    get loginButton() { return $("//*[@data-test='password']") }

    open(): void {
        super.open("https://www.saucedemo.com/");
    }
}

export default new LoginPage();