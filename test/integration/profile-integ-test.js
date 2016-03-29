module.exports = {
  'profile test' : function (browser) {
    browser
      .url('http://localhost:8080/recipient/2')
      .waitForElementVisible('body', 1000)
      .verify.visible('.row')
      .verify.visible('.HBar')
      .pause(500)
      .verify.visible('#ProgressBar')
      .click('.donate-button')
      .verify.visible('.rateMe')
      .pause(500)
      .verify.visible('.currentRating')
      .verify.visible('.clickableTeeth')
      .pause(500)
      .verify.visible('.toothMed')
      .verify.visible('.story')
      .verify.visible('#share')
      .end();
  }
};
