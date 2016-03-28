module.exports = {
  '@disabled': true,
  'test login page' : function (browser) {
    browser
      .url('http://localhost:8080/')
      .waitForElementVisible('body', 1000)
      .assert.title('TOOTH & PAIL')
      .verify.visible('.home')
      .verify.visible('.signup')
      .verify.visible('.email')
      .verify.visible('.password')
      .end();
  }
};

// can't get the submit button to be seen