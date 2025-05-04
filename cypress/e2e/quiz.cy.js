describe('Tech Quiz E2E', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('completes the quiz and shows score', () => {
      cy.contains('Start Quiz').click();
  
      for (let i = 0; i < 10; i++) {
        cy.get('button').contains(/^(True|False)$/).first().click();
      }
  
      cy.contains('Score').should('exist');
      cy.contains('Start Quiz').should('exist');
    });
  });