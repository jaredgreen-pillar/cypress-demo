context('Accessibility', () => {
  beforeEach(() => {
    cy.visit('https://www.scope.org.uk/')
    cy.injectAxe()
  }) 

  it('is accessible', () => {
    checkAccessibility()
  })
})

function checkAccessibility() {
  cy.checkA11y('body', A11Y_OPTIONS);
}

const A11Y_OPTIONS = {
  runOnly: ['section508', 'wcag2aa']
};
