module.exports = {
  'photo footer and rate teeth loads on the gallery page' : function (browser) {
    browser
      .url('http://localhost:8080/gallery')
      .waitForElementVisible('body', 1000)
      .verify.visible('.galleryPhoto')
      .verify.visible('.galleryProgressBar')
      .verify.visible('.rate')
      .end();
  }
};