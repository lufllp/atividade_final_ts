describe('Testes de login', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com')
  })
  it('Login com usuário bloqueado.', () => {
    cy.login('locked_out_user', 'secret_sauce')
    cy.get('[data-test="error"]').should('be.visible')
        .and('contain', 'Epic sadface: Sorry, this user has been locked out.')
  })
  it('Login com erro de usuário.', () => {
    cy.login('usuario_invalido', 'secret_sauce')
    cy.get('[data-test="error"]').should('be.visible')
        .and('contain', 'Epic sadface: Username and password do not match any user in this service')
  })
  it('Login bem sucedido.', () => {
    cy.login('standard_user', 'secret_sauce')
    cy.get('[data-test="title"]').should('be.visible').and('contain', 'Products')

  })
  it('Adição de item ao carrinho.', () => {
    cy.login('standard_user', 'secret_sauce')
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="inventory-item"]').should('be.visible')
  })
})