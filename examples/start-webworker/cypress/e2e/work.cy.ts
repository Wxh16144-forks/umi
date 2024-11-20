/// <reference types="cypress" />

describe('Basic Test', () => {
  it('should work', () => {
    cy.visit('/app/docs');
    cy.get('input').should('have.value', '@Wxh16144');

    cy.get('button').click();

    cy.wait(500);
    cy.contains('@WXH16144');
  });
});
