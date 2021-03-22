/// <reference types="cypress" />

context('Routing', () => {

  it('should redirect to the products page', () => {
    cy.visit('http://localhost:4200')

    cy.location('pathname').should('eq', '/products')
    cy.get('.title').should('have.text', 'Products Page')
  });

  it('should open the products page', () => {
    cy.visit('http://localhost:4200/products')

    cy.get('.title').should('have.text', 'Products Page')
  });

  it('should redirect unknown paths to page not found', () => {
    cy.visit('http://localhost:4200/classified-information')

    cy.get('.title').should('have.text', 'Page not found')
  });
})
