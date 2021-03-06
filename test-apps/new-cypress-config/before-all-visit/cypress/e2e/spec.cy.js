/// <reference types="cypress" />
describe('coverage information', () => {
  before(() => {
    cy.log('visiting /')
    cy.visit('/')
  })

  it('calls add', () => {
    cy.window()
      .invoke('add', 2, 3)
      .should('equal', 5)
  })

  it('calls sub', () => {
    cy.window()
      .invoke('sub', 2, 3)
      .should('equal', -1)
  })
})
