module.exports = {
  '@disabled': true,
  'test signup form on the login page' : function (browser) {
    browser
      .url('http://localhost:8080/')
      .waitForElementVisible('body', 1000)
      .assert.title('TOOTH & PAIL')
      .verify.visible('.signup')
      .verify.visible('.username')
      .verify.visible('.email')
      .verify.visible('.password')
      .verify.visible('.confirm-password')
      .pause(500)
      .click('.signup-button')
      .url('http://localhost:8080/gallery')
      .end();
  }
};