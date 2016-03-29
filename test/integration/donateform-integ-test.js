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

