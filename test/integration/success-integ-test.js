module.exports = {
	'@disabled': true,
  'reviews happy teeth success page test' : function (browser) {
    browser
      .url('http://localhost:8080/trends')
      .waitForElementVisible('body', 1000)
      .assert.title('TOOTH & PAIL')
      .verify.visible('.TrendButtons')
      .end();
  }
};

// page not yet completed