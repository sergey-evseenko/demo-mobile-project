Feature('Authorization');

Scenario('Test1', async ({ I }) => {
    const phone = '+13044043972';
    const password = 'Testpass1';
    I.login(phone, password);
});
