describe('Tela de Carreira', () => {
    beforeEach(() => {
    cy.viewport (1366, 768)
    cy.visit('https://nexdom.tec.br')
  })

  it ('Acessando Tela de Carreiras', ( )=>  {
    cy.get('#e-n-menu-title-2394 > .e-n-menu-title-container > .e-n-menu-title-text').click();
    cy.contains('Unidos pela inovação, movidos pela excelência').should('be.visible')
})
it ('Abrindo aba de vagas da tela de carreira', () => {
    cy.get('#e-n-menu-title-2394 > .e-n-menu-title-container > .e-n-menu-title-text').click();
    cy.get('.elementor-element-0011d89 > .elementor-widget-container > .elementor-button-wrapper > .elementor-button').click();
})
})