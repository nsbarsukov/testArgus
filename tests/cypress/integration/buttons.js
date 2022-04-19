describe('Buttons', () => {
  it('Examples', () => {
    cy.visit('button.html');

    cy.get('.cypress-wrapper').each((element, index) => {
      const name = `button-${index}`;

      cy.wrap(element).matchImageSnapshot(name);
    });
  });
});

