const assert = require('assert');
Feature('login');

Scenario('test something',async({ I }) => {
let title = await I.grabTitle();
assert.equal(title,'about:blank');  
I.amOnPage('/index.html');
I.fillField("Name","kuhu");
I.fillField("Email","123@gmail.com");
I.selectOption('Role','Admin');
I.checkOption('Accept');

//ASSERTIONS
I.see('Login');
I.seeElement('.login-form');
I.dontSeeElement('.error');
I.retry(3).see('Login');
I.seeInCurrentUrl('/index.html');
I.say('I enter name and email');
I.click('Login');

//pause();

});


