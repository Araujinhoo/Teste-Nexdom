describe('GitHub API Test', () => {
    //Necessário adicinar a chave token descrita no Readme
    const token = '';
    const nexDom = 'teste-cypress-api';
    const owner = 'Araujinhoo';
    const issueTitle = 'Teste de Issue';
    let issueNumber;

    const headers = {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github.v3+json'
    };

    it('Criação de um repositório no GitHub', () => {
        cy.request({
            method: 'POST',
            url: 'https://api.github.com/user/repos',
            headers,
            body: {
                name: nexDom,
                description: 'Repositório de teste Cypress',
                private: false
            }
        }).then((response) => {
            expect(response.status).to.eq(201);
        });
    });

    it('Consulta do repositório criado', () => {
        cy.request({
            method: 'GET',
            url: `https://api.github.com/repos/${owner}/${nexDom}`,
            headers
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.name).to.eq(nexDom);
        });
    });

    it('Criação de uma issue no repositório', () => {
        cy.request({
            method: 'POST',
            url: `https://api.github.com/repos/${owner}/${nexDom}/issues`,
            headers,
            body: {
                title: issueTitle,
                body: 'Criando uma issue para teste com Cypress'
            }
        }).then((response) => {
            expect(response.status).to.eq(201);
            issueNumber = response.body.number;
        });
    });

    it('Consulta da issue criada', () => {
        cy.request({
            method: 'GET',
            url: `https://api.github.com/repos/${owner}/${nexDom}/issues/${issueNumber}`,
            headers
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.title).to.eq(issueTitle);
        });
    });

    it('Exclusão do repositório', () => {
        cy.request({
            method: 'DELETE',
            url: `https://api.github.com/repos/${owner}/${nexDom}`,
            headers
        }).then((response) => {
            expect(response.status).to.eq(204);
        });
    });

    it('Verificar se o repositório foi eliminado', () => {
        cy.request({
            method: 'GET',
            url: `https://api.github.com/repos/${owner}/${nexDom}`,
            headers,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(404);
        });
    });
});
