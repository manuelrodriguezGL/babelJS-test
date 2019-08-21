import Page from './pageObject/page';
import LoginPageVar from './pageVar/loginPageVar';

class LoginPage extends Page {

    get username() { return LoginPageVar.username; }
    get password() { return LoginPageVar.password; }
    get submitButton() { return LoginPageVar.submitButton; }
    get pageUrl() { return LoginPageVar.pageUrl; }

    fillUserName(value) {
        this.username.setValue(value);
    }

    fillPassword(value) {
        this.password.setValue(value);
    }

    submit() {
        this.submitButton.click();
    }
}

export default new LoginPage();
