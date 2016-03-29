module.exports = {
  'recent activity test' : function (browser) {
    browser
      .url('http://localhost:8080/feed')
      .waitForElementPresent('body', 1000)
      .verify.visible('.recent-activity-header')
      .end();
  }
};