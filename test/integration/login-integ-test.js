module.exports = {
  'test login page' : function (browser) {
    browser
      .url('http://localhost:8080/')
      .waitForElementVisible('body', 1000)
      .verify.visible('#email-field')
    	.verify.visible('#password')
    	.verify.value( 'input[type=submit]', 'LOG IN' )
      .pause(1000)
      .assert.containsText('#email-field', '')
      .end();
  }
};
