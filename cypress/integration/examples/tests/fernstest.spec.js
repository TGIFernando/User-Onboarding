//http://localhost:3000/

const { iteratee } = require("lodash")

describe('Form App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    const nameInput = () => cy.get('input[name="name"]')
    const emailInput = () => cy.get('input[name="email"]')
    const passInput = () => cy.get('input[name="passsword"]')
    
    it('Tests name input', () => {
        nameInput().should('have.value', '')
        nameInput().type('Example Name')
        nameInput().should('have.value', 'Example Name')
    })

    it('Tests email input', () => {
        emailInput().should('have.value', '')
        emailInput().type('Email@example.com')
        emailInput().should('have.value', 'Email@example.com')
    })





})