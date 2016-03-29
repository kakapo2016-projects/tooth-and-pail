module.exports = {
  'header loads on the page test' : function (browser) {
    browser
      .url('http://localhost:8080/gallery')
      .waitForElementVisible('body', 1000)
      .assert.title('TOOTH & PAIL')
      .verify.visible('.tooth-icon')
      .end();
  }
};