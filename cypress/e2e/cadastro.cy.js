describe('Pagina de Cadastro', () => {

  beforeEach(() => {
    cy.visit('https://3076-cypress-alurapic-front.vercel.app/')
})

it('Validar cadastro com dados validos', () => {
      cy.contains('a','Register now').click();
      cy.get('[data-test="email"]').type('aline_macedog@hotmail.com')
      cy.get('[data-test="fullName"]').type('Aline Macedo')
      cy.get('[data-test="registerUserName"]').type('alinemacedo')
      cy.get('[data-test="registerPassword"]').type('alinemacedo123')
      cy.contains('button', 'Register').click();
})

it('Validar mensagens de erro dos campos', () => {
  cy.contains('a','Register now').click();
  cy.contains('button', 'Register').click();
  cy.contains('button', 'Register').click();
  cy.contains('Email is required!').should('be.visible');
  cy.contains('Full name is required!').should('be.visible');
  cy.contains('User name is required!').should('be.visible');
  cy.contains('Password is required!').should('be.visible');
})

it('Validar mensagem de email invalido', () => {
  cy.contains('a','Register now').click();
  cy.contains('button', 'Register').click();
  cy.get('[data-test="email"]').type('aline')
  cy.contains('Invalid e-mail').should('be.visible');
})

it('Validar mensagem de tamanho minimo no nome', () => {
  cy.contains('a','Register now').click();
  cy.contains('button', 'Register').click();
  cy.get('[data-test="email"]').type('aline_macedog@hotmail.com');
  cy.get('[data-test="fullName"]').type('A');
  cy.contains('button', 'Register').click();
  cy.contains('Mininum length is 2').should('be.visible');
})

it('Validar mensagem de tamanho minimo e caixa de texto baixa no usuario', () => {
  cy.contains('a','Register now').click();
  cy.contains('button', 'Register').click();
  cy.get('[data-test="email"]').type('aline_macedog@hotmail.com');
  cy.get('[data-test="fullName"]').type('Aline Macedo');
  cy.get('[data-test="registerUserName"]').type('A');
  cy.contains('button', 'Register').click();
  cy.contains('Mininum length is 2').should('be.visible');
  cy.contains('Must be lower case').should('be.visible');
})

it('Validar mensagem de usuario disponivel', () => {
  cy.contains('a','Register now').click();
  cy.contains('button', 'Register').click();
  cy.get('[data-test="email"]').type('aline_macedog@hotmail.com');
  cy.get('[data-test="fullName"]').type('Aline Macedo');
  cy.get('[data-test="registerUserName"]').type('alinemacedog');
  cy.contains('User available').should('be.visible');
})

it('Validar mensagem de usuario indisponivel', () => {
  cy.contains('a','Register now').click();
  cy.contains('button', 'Register').click();
  cy.get('[data-test="email"]').type('aline_macedog@hotmail.com');
  cy.get('[data-test="fullName"]').type('Aline Macedo');
  cy.get('[data-test="registerUserName"]').type('aline');
  cy.contains('Username already taken').should('be.visible');
})

it('Validar mensagem de minimo na senha', () => {
  cy.contains('a','Register now').click();
  cy.contains('button', 'Register').click();
  cy.get('[data-test="email"]').type('aline_macedog@hotmail.com');
  cy.get('[data-test="fullName"]').type('Aline Macedo');
  cy.get('[data-test="registerUserName"]').type('alinemacedo');
  cy.get('[data-test="registerPassword"]').type('al');
  cy.contains('button', 'Register').click();
  cy.contains('Mininum length is 8').should('be.visible');
})

it('Validar mensagem de nome de usuario e senha devem ser diferentes', () => {
  cy.contains('a','Register now').click();
  cy.contains('button', 'Register').click();
  cy.get('[data-test="email"]').type('aline_macedog@hotmail.com');
  cy.get('[data-test="fullName"]').type('Aline Macedo');
  cy.get('[data-test="registerUserName"]').type('alinemacedo123');
  cy.get('[data-test="registerPassword"]').type('alinemacedo123');
  cy.contains('button', 'Register').click();
  cy.contains('Username and password must be different').should('be.visible');
})


})