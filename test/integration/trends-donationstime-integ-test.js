module.exports = {
  'trends test' : function (browser) {
    browser
      .url('http://localhost:8080/trends')
      .waitForElementVisible('body', 1000)
      .assert.title('Trends')
      .verify.visible('.TrendButtons')
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