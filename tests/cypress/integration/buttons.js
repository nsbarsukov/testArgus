describe('Buttons', () => {
  it('Examples', () => {
    cy.visit('button.html');

    cy.get('.cypress-wrapper').each((element, index) => {
      const name = `button-${index}`;

      cy.get('body').matchImageSnapshot(name);
    });
  });
});

