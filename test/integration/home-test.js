module.exports = {
  'test Home' : function (browser) {
    browser
      .url('http://localhost:8080/')
      .waitForElementPresent('body', 1000)
      .verify.visible('#app')
      .assert.title('TOOTH & PAIL')
      .verify.visible('.home')
      .verify.visible('header')
      .verify.visible('h1')
      .verify.visible('#loginForm')
      .verify.visible('#signupForm')
      .end();
  }
};
