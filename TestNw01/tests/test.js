module.exports = {

  'Autenticacion en el Banco' : function (browser) {
    browser.url(browser.launchUrl)   
      .waitForElementVisible('body', 2000)
      .setValue('#username', browser.globals.username)
      .setValue('#password', browser.globals.password)
      .click('input[type=submit]')
  },

  'Selección de cuenta bancaria' : function (browser) {
    browser
      .waitForElementVisible('h1',2000)
      .assert.containsText('h1', 'Bienvenido')
      .setValue('#numeroCuenta', browser.globals.numeroCuenta)
      .click('#shop-send')
  },

  'Se comprueba que estamos en la cuenta seleccionada' : function(browser) {
    browser
      .pause(2000)
      .assert.containsText('.selectedAccount', browser.globals.numeroCuenta)
      .assert.containsText('#saldo', 'Su saldo es ')
      .end();
  }
};