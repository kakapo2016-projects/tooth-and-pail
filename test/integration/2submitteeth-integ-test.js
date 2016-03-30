module.exports = {
  'submit my own teeth test page needs to go to login' : function (browser) {
    browser
      .url('http://localhost:8080/submitteeth')
      .waitForElementVisible('body', 500)
      .click('.login-signup')
      .end();
  },

  'then need to login prior to going to submit teeth page': function(browser) {
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
      .url('http://localhost:8080/submitteeth')
      .assert.title('TOOTH & PAIL')
    },

  'then go to the show my own teeth page': function(browser) {
  	browser
      .url('http://localhost:8080/recipient/20d74ca4-81fd-409c-a744-aa886eec46ed')
      .verify.visible('.profile')
      .end();
  }
};

