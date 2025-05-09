import questionsData from '../fixtures/questions.json';

describe('Tech Quiz E2E', () => {
  it('completes the quiz and shows score', () => {
    cy.intercept('GET', '**/api/questions/random', {
      statusCode: 200,
      body: questionsData,
    }).as('getQuestions');

    cy.visit('/');
    cy.contains('Start Quiz').click();

    cy.wait('@getQuestions');

    for (let i = 0; i < 10; i++) {
      cy.get('.btn.btn-primary').first().click();
      cy.wait(300);
}


    cy.get('body').then(($body) => {
      const text = $body.text();
      console.log('\n=========== BODY TEXT ===========\n', text, '\n=================================');
      cy.log(text);
    });

    cy.contains(/(You scored|correct|out of|Your score)/i, { timeout: 10000 }).should('exist');
    cy.wait(200); // Give time to fully render button
    cy.contains(/Start Quiz|Take New Quiz/, { timeout: 5000 }).should('exist');


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