module.exports = {
	'@disabled': true,
  'donate form test' : function (browser) {
    browser
      .url('http://localhost:8080/submitteeth')
      .waitForElementVisible('body', 1000)
      .verify.visible('.target')
      .click('button[name=upload_widget_opener]')
      .end();
  }
};

// keeps asking to be logged even in Chrome