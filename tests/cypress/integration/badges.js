describe('Badge', () => {
  it('Examples', () => {
    cy.visit('badge.html');

    cy.get('.cypress-wrapper').each((element, index) => {
      const name = `badge-${index}`;

      cy.wrap(element).matchImageSnapshot(name);
    });
  });
});
