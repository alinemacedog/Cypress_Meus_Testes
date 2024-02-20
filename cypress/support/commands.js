// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('[data-test="loginUserName"]').type(usuario);
    cy.get('[data-test="loginPassword"]').type(senha);
    cy.contains('button', 'login').click(); 
})

Cypress.Commands.add('cadastro', (email, nome, usuario, senha) => {    
    cy.contains('a','Register now').click();
    cy.get('[data-test="email"]').type(email);
    cy.get('[data-test="fullName"]').type(nome);
    cy.get('[data-test="registerUserName"]').type(usuario);
    cy.get('[data-test="registerPassword"]').type(senha);
    cy.contains('button', 'Register').click();
})
