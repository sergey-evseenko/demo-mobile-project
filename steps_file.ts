const { loginPage } = inject();

export = function() {
  return actor({

    login: function (phone: string, password: string) {

      this.waitForElement("~Skip");
      this.click("~Skip");

      loginPage.selectEnv("~stage");
      loginPage.authorize(phone, password);

      this.waitForElement("~agreementRadioButton");
      this.wait(1);
      this.click("~agreementRadioButton");
      this.click("~agreementContinueButton");
      this.waitForElement("~Step 1 of 2");
      this.wait(2);
      for (let i = 0; i < 4; i++) this.click(`~${i}`);
      this.waitForElement("~Step 2 of 2");
      this.wait(2);
      for (let i = 0; i < 4; i++) this.click(`~${i}`);
      this.waitForElement("~Notifications");
      this.wait(2);
      this.click("~Skip for Now");
      this.wait(2);
    }

  });
}
