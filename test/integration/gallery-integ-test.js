module.exports = {
  'test gallery page' : function (browser) {
    browser
      .url('http://localhost:8080/gallery')
      .waitForElementPresent('body', 1000)
      .pause(1000)
      .end();
  }
};