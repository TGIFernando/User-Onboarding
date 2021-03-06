//http://localhost:3000/

const { iteratee } = require("lodash")

describe('Form App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    const nameInput = () => cy.get('input[name="name"]')
    const emailInput = () => cy.get('input[name="email"]')
    const passInput = () => cy.get('input[name="password"]')
    const checkInput = () => cy.get('input[name="tos"]')
    const subInput = () => cy.get('input[name="submit"]')
    
    const nameTest = () => {it('Tests name input', () => {
        nameInput().should('have.value', '')
        nameInput().type('Example Name')
        nameInput().should('have.value', 'Example Name')
    })}
    nameTest()

    const emailTest = () => {it('Tests email input', () => {
        emailInput().should('have.value', '')
        emailInput().type('Email@example.com')
        emailInput().should('have.value', 'Email@example.com')
    })}
    emailTest()

    const passwordTest = () => {it('Tests password input', () => {
        passInput().should('have.value', '')
        passInput().type('Password')
        passInput().should('have.value', 'Password')
    })}
    passwordTest()

    const checkTest = () => {it('Tests tos input', () => {
        checkInput().should('have.value', 'false')
        checkInput().click()
        checkInput().should('have.value', 'true')
    })}
    checkTest()
    
    const formTest = () => {it('Test the form', () => {
        nameInput().type('Example Name')
        emailInput().type('Email@example.com')
        passInput().type('Password')
        checkInput().click()
        subInput().click()
    })}
    formTest()

    const checkValidation = () => {it('Tests form validation', () => {
        nameInput().type('Example Name')
        emailInput().type('Emailexamplecom')
        passInput().type('Pswrd')
        checkInput().click()
        nameInput().clear()
        checkInput().click()
        subInput().should('be.disabled')
    })}
    checkValidation()




})