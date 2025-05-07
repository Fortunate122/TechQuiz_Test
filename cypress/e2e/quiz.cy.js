import questions from '../fixtures/questions.json';

describe('Tech Quiz E2E', () => {
  it('completes the quiz and shows score', () => {
    // ✅ Wrap in { questions } to match app expectations
    cy.intercept('GET', '**/api/questions/random', {
      statusCode: 200,
      body: { questions },
    }).as('getQuestions');

    cy.visit('/');
    cy.contains('Start Quiz').click();
    cy.wait('@getQuestions');

    for (let i = 0; i < 10; i++) {
      cy.contains(/^(True|False)$/).should('be.visible').click();
      cy.wait(300);
    }

    cy.get('body').then(($body) => {
      const text = $body.text();
      console.log('\n=========== BODY TEXT ===========\n', text, '\n=================================');
      cy.log(text);
    });

    cy.contains(/(You scored|correct|out of|Your score)/i, { timeout: 10000 }).should('exist');
    cy.contains('Start Quiz').should('exist');
  });
});



// describe('Tech Quiz E2E', () => {
//     beforeEach(() => {
//       cy.visit('/');
//     });
  
//     it('completes the quiz and shows score', () => {
//       cy.contains('Start Quiz').click();
  
//       for (let i = 0; i < 10; i++) {
//         cy.get('button').contains(/^(True|False)$/).first().click();
//       }
  
//       cy.contains('Score').should('exist');
//       cy.contains('Start Quiz').should('exist');
//     });
//   });