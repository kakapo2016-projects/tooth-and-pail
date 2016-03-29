module.exports = {
  '@disabled': true,
  'submit my own teeth test' : function (browser) {
    browser
      .url('http://localhost:8080/submitteeth')
      .waitForElementVisible('body', 500)
      .click('.showmyteeth')
      .url('http://localhost:8080/recipient/20d74ca4-81fd-409c-a744-aa886eec46ed')
      .end();
  }
};

// even if it runs directly after signin it gets the Oops page 
// asking to log in first