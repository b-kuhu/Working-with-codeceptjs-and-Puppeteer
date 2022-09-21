Feature('login');

Scenario('test something', ({ I }) => {
I.amOnPage('/index.html');
I.fillField("Name","kuhu");
I.fillField("Email","123@gmail.com");
I.selectOption('Role','Admin');
I.checkOption('Accept');
I.click("//input[@type='login");

});
