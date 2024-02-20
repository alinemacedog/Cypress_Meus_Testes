describe('Pagina de Login', () => {

    beforeEach(() => {
      cy.visit('https://3076-cypress-alurapic-front.vercel.app/')
      cy.intercept('POST', 'https://alurapic-api.onrender.com/user/login', {
        statusCode: 401
        }).as('stubPost')
  })

  it('Validar login com sucesso', () => {
    cy.get('[data-test="loginUserName"]').type('alinemacedo')
    cy.get('[data-test="loginPassword"]').type('alinemacedo123')
    cy.contains('button', 'login').click();
  })

  it('Validar mensagens de erro dos campos', () => {
    cy.contains('User name is required!').should('be.visible');
    cy.contains('Password is required!').should('be.visible');
  })

  it('Validar login com dados incorretos', () => {
    cy.get('[data-test="loginUserName"]').type('alinemacedo')
    cy.get('[data-test="loginPassword"]').type('aline123')
    cy.contains('button', 'login').click();
    cy.wait('@stubPost');
  })
  
  
})