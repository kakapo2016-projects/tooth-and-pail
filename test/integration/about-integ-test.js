module.exports = {
  'about page test' : function (browser) {
    browser
      .url('http://localhost:8080/about')
      .waitForElementPresent('body', 1000)
      .verify.visible('.about-header')
      .verify.visible('.about-paragraph')
      .verify.visible('.before-and-afters')
      .end();
  }
};