const { I } = inject();

export = {

    buttons: {
        welcome: '~welcomeLoginButton',
        confirm: '~ChangeEnvConfirmButton',
        login: '~loginLoginButton'
    },
    fields: {
        phone: '~loginPhoneNumberInput',
        password: '~loginPasswordInput'
    },

    selectEnv(env: string) {
        I.waitForElement(this.buttons.welcome);
        I.click(this.buttons.welcome);
        I.wait(1);
        I.waitForElement(env);
        I.wait(1);
        I.click(env);
        I.wait(1);
        I.click(this.buttons.confirm);
    },
    authorize(phone: string, password: string) {
        I.fillField(this.fields.phone, phone);
        I.fillField(this.fields.password, password);
        I.wait(1);
        I.click(this.buttons.login);
    }
}
