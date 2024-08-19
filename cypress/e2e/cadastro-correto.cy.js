describe('Página de cadastro', () => {
  it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.cadastro('Icaro','icarosantiago52@gmail.com','Senha123','Senha123')
  })
})