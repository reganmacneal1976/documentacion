module.exports = {
    
      'Busqueda en Google' : function (browser) {
        browser.url('https://www.google.es')   
          .waitForElementVisible('body', 2000)
          .setValue('#lst-ib', 'autentia')
          .click('input[type=submit]')
          .pause(2000)
          .assert.containsText('#rso > div', 'Autentia | Soporte a desarrollo informático')
          .end()
      },
    
      'Busqueda en DuckDuckGo' : function (browser) {
        browser.url('https://www.duckduckgo.com')   
          .waitForElementVisible('body', 2000)
          .setValue('#search_form_input_homepage', 'autentia')
          .click('input[type=submit]')
          .pause(2000)
          .assert.containsText('#r1-0 > div', 'Autentia | Soporte a desarrollo informático')
          .end()
      }
    };