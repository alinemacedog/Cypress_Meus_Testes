describe('Pagina de Cadastro', () => {

    beforeEach(() => {
      cy.visit('https://3076-cypress-alurapic-front.vercel.app/')
  })
  
  it('Validar cadastro com dados validos', () => {
        cy.cadastro('aline_macedog@hotmail.com','Aline Macedo','alinemacedo1','alinemacedo123');
  })

})

