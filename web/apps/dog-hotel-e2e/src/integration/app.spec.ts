import { getGreeting } from '../support/app.po';

describe('dog-hotel', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to dog-hotel!');
  });
});
