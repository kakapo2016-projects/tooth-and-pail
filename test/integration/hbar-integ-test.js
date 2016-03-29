module.exports = {
	'@disabled': true,
  'test horizontal bar' : function (browser) {
    browser
      .url('http://localhost:8080/recipient/1')
      .waitForElementPresent('body', 1000)
      .verify.visible('.HBar')
      .pause(1000)
      .end();
  }
};

