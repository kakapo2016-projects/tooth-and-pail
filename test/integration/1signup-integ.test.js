module.exports = {
  'test logging in with email and password' : function (browser) {
    var data = {
      email: 'shazza@gmail.com',
      password: '666666',
      urls: {
        login: 'http://localhost:8080/'
      }
  }
    browser
      .url(data.urls.login)
      .assert.title('TOOTH & PAIL')
      .waitForElementVisible('body', 1000)
      .verify.visible('.email')
      .setValue('input[type="text"]', data.email)
      .setValue('input[type="password"]', data.password)
      .pause(1000)
      .click('.login-button')
      .url('http://localhost:8080/gallery')
      .end()
  }
};

