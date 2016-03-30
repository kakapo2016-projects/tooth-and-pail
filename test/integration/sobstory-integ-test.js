module.exports = {
  'sob story on profile 2 page test' : function (browser) {
    browser
      .url('http://localhost:8080/recipient/2')
      .waitForElementPresent('body', 1000)
      .verify.visible('.story')
      .verify.visible('#share')
      .end();
  }
};