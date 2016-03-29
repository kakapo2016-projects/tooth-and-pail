module.exports = {
  'donate money form test' : function (browser) {
  	var data = {
  		donateInput: 1
  	}
    browser
      .url('http://localhost:8080/submitteeth')
      .waitForElementVisible('body', 1000)
      .verify.visible()
      .url('http://localhost:8080/recipient/20d74ca4-81fd-409c-a744-aa886eec46ed')
      .verify.visible('.profilePhoto')
      .verify.visible('#DonateForm')
      .verify.visible('.donateInput')
      .setValue('input[type="number"]', data.donateInput)
      .click('.donate-button')
      .end();
  }
};