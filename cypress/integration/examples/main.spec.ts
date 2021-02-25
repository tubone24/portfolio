
describe("UI Test", () => {
  it('should render the first page', () => {
    cy.visit('/');
    cy.contains('tubone24');
    cy.title().should('include', 'tubone24');
    cy.contains('About Me').click();
    cy.get('p').should(($p) => {
      expect($p.eq(0)).to.contain('I\'m a Software and Infrastructure developer with over 4+ years, and I\'ve been leading some engineering teams in')
      expect($p.eq(1)).to.contain('デベロッパー')
    })
    cy.get('img').should(($img) => {
      $img.show()
    })
    cy.scrollTo('bottom')
  });
});
