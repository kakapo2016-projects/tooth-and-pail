module.exports = {
  'donate money form test' : function (browser) {
  	var data = {
  		donateInput: 1
  	}
    browser
      .url('http://localhost:8080/recipient/2')
      .waitForElementVisible('body', 1000)
      .verify.visible('#ProgressBar')
      .verify.visible('#DonateForm')
      .verify.visible('.donateInput')
      .setValue('input[type="number"]', data.donateInput)
      .click('.donate-button')
      .end();
  }
};