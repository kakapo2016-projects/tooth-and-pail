module.exports = {
  '@disabled': true,
  'test tooth and pail login page loads' : function (browser) {
    browser
      .url('http://localhost:8080/')
      .waitForElementVisible('body', 1000)
      .assert.title('TOOTH & PAIL')
      .verify.visible('.home')
      .verify.visible('.signup')
      .verify.visible('.email')
      .verify.visible('.password')
      .pause(500)
      .url('http://localhost:8080/gallery')
      .end();
  }
};

