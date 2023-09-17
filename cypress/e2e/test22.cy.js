/// <reference types="cypress" />
const expectedCurrency = "SAR"
const expectedAttribute = "lang"
const expectedLanguge = "en"

describe(' Aspire test cases', () => {
  it.skip('passes', () => {
    cy.visit('https://www.almosafer.com/')
    cy.get('.cta__saudi').click()
    cy.get('[data-testid="Header__CurrencySelector"]').invoke('text').should('include',expectedcurrency)
  });
    it('check the language of the website', () => {
      cy.visit('https://www.almosafer.com/')
      cy.get('.cta__saudi').click()
      cy.get('html').should('have.a.attr',expectedAttribute,expectedLanguge)


      
    });
  
})