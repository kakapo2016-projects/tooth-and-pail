module.exports = {
  'test tooth and pail login page loads' : function (browser) {
    browser
      .url('http://localhost:8080/')
      .waitForElementVisible('body', 1000)
      .assert.title('TOOTH & PAIL')
      .verify.visible('.home')
      .verify.visible('.signup')
      .verify.visible('.email')
      .verify.visible('.password')
      .end();
  },
  
  'test login for tooth and pail' : function (browser) {
    browser
      .waitForElementVisible('body', 1000)
      .setValue('.email-field', 'shazza@gmail.com', 500)
      .setValue('input[name="password"]', '666666', 500)
      .click('input[name="login"]')
      .pause(1000)
      .end();

      // what happens after login?
  }   
};
// Error while running setValue command: Provided locating strategy is not supported: input[name="#email-field"]. It must be one of the following:
// class name, css selector, id, name, link text, partial link text, tag name, xpath

// can't get the submit button to be seen
