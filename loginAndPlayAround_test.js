Feature('login');

Scenario('test something', ({ I }) => {
I.amOnPage('/index.html');
I.fillField("Name","kuhu");
I.fillField("Email","123@gmail.com");
I.selectOption('Role','Admin');
I.checkOption('Accept');
I.click('Login');

I.seeInCurrentUrl('/index.html');

pause();

//ASSERTIONS
I.see('Login');
I.seeElement('.login-form');
I.dontSeeElement('.error');

});
