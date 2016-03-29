module.exports = {
  'test tooth and pail login page loads' : function (browser) {
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

