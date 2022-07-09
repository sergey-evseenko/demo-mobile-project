Feature('Authorization');

Scenario('Test1', async ({ I }) => {
    const phone: string = "+13044043972";
    const password: string = "Testpass1";
    I.login(phone, password);
});
