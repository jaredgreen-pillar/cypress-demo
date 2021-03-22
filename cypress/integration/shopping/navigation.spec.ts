describe('app navigation', () => {
  it('clicking home should return to products page', () => {
    cy.visit('http://localhost:4200/page-that-does-not-exist')

    cy.get('#homeButton').click()

    cy.get('#title').should('have.text', 'Products Page')
  });
})