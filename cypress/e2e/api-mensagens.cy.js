describe('Api Adopet', () => {

it('Mensagens da API', () => {
    cy.request({
        method: 'GET' ,
        url: 'https://adopet-api-i8qu.onrender.com/mensagem/85b9e343-5edd-46bb-8c8b-4317ecdc1e6f',
        headers: Cypress.env()
    }) .then((res) => {
        expect(res.status).to.be.equal(200)
        expect(res.body).is.not.empty
        expect(res.body).to.have.property('msg')
        })
})
})