import Quiz from '../../client/src/components/Quiz';
import { mount } from 'cypress/react';
import questions from '../fixtures/questions.json';

describe('Quiz Component', () => {
  beforeEach(() => {
    cy.intercept('GET', '/api/questions', questions).as('getQuestions');
  });

  it('starts the quiz and displays the first question', () => {
    mount(<Quiz />);
    cy.contains('Start Quiz').click();
    cy.wait('@getQuestions');
    cy.contains(questions[0].question).should('exist');
  });
});