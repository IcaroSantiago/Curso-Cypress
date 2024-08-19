describe('Página de login', () => {
  beforeEach(() => {
      cy.visit('https://adopet-frontend-cypress.vercel.app/');
      cy.get('[data-test="login-button"]').click();
  })
  it('Deve preencher os campos do login corretamente e autenticar o usuário na página', () => {   
    cy.get('.header__message').click();
    cy.login('icarosantiago52@gmail.com','Senha123')
    
  })

  it('Verifica imagens dos animais', () =>{
    cy.visit('https://adopet-frontend-cypress.vercel.app/home');
    cy.get('.cards').should('be.visible');
  
})
})