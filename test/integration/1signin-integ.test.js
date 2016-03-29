module.exports = {
  'test logging in with email and password' : function (browser) {
    var data = {
      email: 'shazza@gmail.com',
      password: '666666',
      url: {
        login: 'http://localhost:8080/'
      }
  }
    browser
      .url(data.url.login)
      .assert.title('TOOTH & PAIL')
      .waitForElementVisible('body', 1000)
      .verify.visible('.email')
      .setValue('input[type="text"]', data.email)
      .setValue('input[type="password"]', data.password)
      .click('.login-button')
      .url('http://localhost:8080/gallery')
      .assert.title('TOOTH & PAIL')
      .end();
  }
};

