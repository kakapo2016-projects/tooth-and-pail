module.exports = {
  '@disabled': true,
  'gallery photo page' : function (browser) {
    browser
      .url('http://localhost:8080/recipient/2')
      .waitForElementVisible('body', 500)
      .assert.title('TOOTH & PAIL')
      .verify.visible('.profilePhoto')
      .verify.visible('.HBar')
      .verify.visible('#ProgressBar')
      .verify.visible('#DonateForm')
      .verify.visible('.rateMe')
      .verify.visible('.row')
      .end();
  }
};