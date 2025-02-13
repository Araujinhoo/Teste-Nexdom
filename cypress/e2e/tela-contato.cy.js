describe('Tela de Contato', () => {
    beforeEach(() => {
    cy.viewport (1366, 768)
    cy.visit('https://nexdom.tec.br')
  })


  it( 'Cenario-Preenchendo todos os campos', () => {
    //Quando clicar no campo de Contato
    cy.contains('Contato').click();
    //E preencher o formulário
    cy.get('#form-field-name').as('nome').type('Teste');
    cy.get('#form-field-email').type('Teste@hotmail.com');
    cy.get('#form-field-message').type('Nexdom');
    cy.get('input[placeholder=Cargo]').type('QA');
    cy.get('input[placeholder=Telefone]').type('1187687628');
    cy.get('textarea[placeholder="Assunto"]').type('Teste');
    cy.get('input[class="elementor-field elementor-size-lg  elementor-acceptance-field"]').click();
    // E clicar em enviar
    cy.get('.elementor-field-type-submit > .elementor-button').click();
    //Menssagem de confirmação
    cy.get('.elementor-message').should('have.text', 'As suas respostas foram recebidas com sucesso!')
  })


it( 'Cenario- Entrando em contado sem preencher o campo de NOME', () => {
  //Quando clicar no campo de Contato
  cy.contains('Contato').click();
  //E preencher o formulário
    cy.get('#form-field-email').type('Teste@hotmail.com');
    cy.get('#form-field-message').type('Nexdom');
    cy.get('#form-field-field_67e0483').type('QA');
    cy.get('#form-field-field_5778e7b').type('1187687628');
    cy.get('#form-field-field_f77a763').type('Teste');
    cy.get('#form-field-field_7651528').click();
    // E clicar em enviar
    cy.get('.elementor-field-type-submit > .elementor-button').click();
    //Menssagem de confirmação
    cy.get('#form-field-name').should('have.attr', 'required');  
    cy.get('.elementor-field-type-submit > .elementor-button > .elementor-button-content-wrapper').click()
    cy.get('#form-field-name').then(($el) => {
     expect($el[0].validationMessage).to.eq('Preencha este campo.');
});
})


it( 'Cenario- Entrando em contado sem preencher o campo de E-MAIL', () => {
  //Quando clicar no campo de Contato
  cy.contains('Contato').click();
  //E preencher o formulário
    cy.get('#form-field-name').as('nome').type('Teste');
    cy.get('#form-field-message').type('Nexdom');
    cy.get('#form-field-field_67e0483').type('QA');
    cy.get('#form-field-field_5778e7b').type('1187687628');
    cy.get('#form-field-field_f77a763').type('Teste');
    cy.get('#form-field-field_7651528').click();
    // E clicar em enviar
    cy.get('.elementor-field-type-submit > .elementor-button').click();
    //Menssagem de confirmação
    cy.get('#form-field-email').should('have.attr', 'required');
    cy.get('.elementor-field-type-submit > .elementor-button > .elementor-button-content-wrapper').click()
    cy.get('#form-field-email').then(($el) => {
     expect($el[0].validationMessage).to.eq('Preencha este campo.');
});
})


  it('Entrando em contato preenchendo o campo de e-mail de maneira errada', () => {
  //Quando clicar em contato
  cy.get('#e-n-menu-title-2395 > .e-n-menu-title-container > .e-n-menu-title-text').click();
  //E Preencher os campos
    cy.get('#form-field-name').as('nome').type('Teste');
    cy.get('#form-field-message').type('Nexdom');
    cy.get('#form-field-field_67e0483').type('QA');
    cy.get('#form-field-field_5778e7b').type('1187687628');
    cy.get('#form-field-field_f77a763').type('Teste');
    cy.get('#form-field-field_7651528').click();
    // E clicar em enviar
    cy.get('.elementor-field-type-submit > .elementor-button').click();
    //E preencher o campo e-mail sem um "@"
    cy.get('#form-field-email').type('Teste');
    // Mensagem de confirmação
    cy.get('#form-field-email').then(($el) => {
    expect($el[0].validationMessage).to.include('@');
});
})

  
  it(' Entrando em contato preenchendo o campo de contato com caráteres que não sejam numéricos', () => {
    //Quando clicar em contato
    cy.get('#e-n-menu-title-2395 > .e-n-menu-title-container > .e-n-menu-title-text').click();
    //E Preencher os campos
    cy.get('#form-field-name').as('nome').type('Teste');
    cy.get('#form-field-email').type('Teste@hotmail.com');
    cy.get('#form-field-message').type('Nexdom');
    cy.get('#form-field-field_67e0483').type('QA');
    cy.get('#form-field-field_f77a763').type('Teste');
    cy.get('#form-field-field_7651528').click();
    //E preencher o campo de telefone com caracteres não aceitos
    cy.get('#form-field-field_5778e7b').type('1187687628"');
    // E clicar em enviar
    cy.get('.elementor-field-type-submit > .elementor-button').click();
    //As Menssagens de erro devem ser exibidas
    cy.get('.elementor-field-type-tel > .elementor-message').should('have.text', 'O Campo Aceita Apenas Números e Caracteres de Telefone (#, -, *, etc).');
    cy.get('div.elementor-message').should('have.text','Your submission failed because of an error.');
  })

it( 'Cenario- Entrando em contado sem preencher o campo de EMPRESA', () => {
  //Quando clicar no campo de Contato
  cy.contains('Contato').click();
  //E preencher o formulário
    cy.get('#form-field-name').as('nome').type('Teste');
    cy.get('#form-field-email').type('Teste@hotmail.com');
    cy.get('#form-field-field_67e0483').type('QA');
    cy.get('#form-field-field_5778e7b').type('1187687628');
    cy.get('#form-field-field_f77a763').type('Teste');
    cy.get('#form-field-field_7651528').click();
    // E clicar em enviar
    cy.get('.elementor-field-type-submit > .elementor-button').click();
    //Menssagem de confirmação
    cy.get('#form-field-message').should('have.attr', 'required');
    cy.get('.elementor-field-type-submit > .elementor-button > .elementor-button-content-wrapper').click()
    cy.get('#form-field-message').then(($el) => {
     expect($el[0].validationMessage).to.eq('Preencha este campo.');
})


})
})