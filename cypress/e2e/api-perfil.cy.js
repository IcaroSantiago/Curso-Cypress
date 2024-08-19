describe('Api Adopet', () => {
    const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI4NWI5ZTM0My01ZWRkLTQ2YmItOGM4Yi00MzE3ZWNkYzFlNmYiLCJhZG9wdGVyTmFtZSI6IkljYXJvIiwiaWF0IjoxNzI0MDkyODg4LCJleHAiOjE3MjQzNTIwODh9.dGG2RIVA-z0ic5meueIF_ykpE1nMAW-2iA6SO0QjzoM`

        it('Nome do perfil', () => {
            cy.request({
                method: 'GET' ,
                url: 'https://adopet-api-i8qu.onrender.com/adotante/perfil/85b9e343-5edd-46bb-8c8b-4317ecdc1e6f',
                headers: { authorization }
                
            }).then((res) => {
                expect(res.status).to.be.equal(200)
                expect(res.body).is.not.empty
                expect(res.body).to.have.property('perfil')
                expect(res.body.perfil.nome).to.be.equal('Icaro')
                                
            })
        })
    })