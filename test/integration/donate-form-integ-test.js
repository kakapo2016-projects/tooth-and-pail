module.exports = {
'@disabled': true,
  'donate form test' : function (browser) {
    browser
      .url('http://localhost:8080/submitteeth')
      .waitForElementVisible('body', 1000)
      .verify.visible('#ProgressBar')
      .verify.visible('#DonateForm')
      .click('.donate-button')
      .end();
  }
};

//doesn't want to play ball - even if I have the login in working and sign in
// to the site - still can't get to the donate form