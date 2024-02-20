describe('Pagina de Login', () => {

    beforeEach(() => {
      cy.visit('https://3076-cypress-alurapic-front.vercel.app/')
  })

    it('Validar login com sucesso', () => {
        cy.login('alinemacedo', 'alinemacedo123');
  })
  
})