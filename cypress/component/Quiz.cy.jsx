import Quiz from '../../client/src/components/Quiz';
import { mount } from 'cypress/react';
import questionsData from '../fixtures/questions.json';

/**
 * @typedef {import('../fixtures/questions.d').Question} Question
 */

/** @type {Question[]} */
const questions = questionsData;

describe('Quiz Component', () => {
  beforeEach(() => {
    // ✅ Wrap in { questions } to match app expectations
    cy.intercept('GET', '/api/questions/random', { questions }).as('getQuestions');
  });

  it('starts the quiz and displays the first question', () => {
    mount(<Quiz />);
    cy.contains('Start Quiz').click();
    cy.wait('@getQuestions');

    cy.contains(questions[0].question.question).should('exist');
  });
});



// import Quiz from '../../client/src/components/Quiz';
// import { mount } from 'cypress/react';
// import questions from '../fixtures/questions.json';

// describe('Quiz Component', () => {
//   beforeEach(() => {
//     cy.intercept('GET', '/api/questions', questions).as('getQuestions');
//   });

//   it('starts the quiz and displays the first question', () => {
//     mount(<Quiz />);
//     cy.contains('Start Quiz').click();
//     cy.wait('@getQuestions');
//     cy.contains(questions[0].question.question).should('exist');

//   });
// });