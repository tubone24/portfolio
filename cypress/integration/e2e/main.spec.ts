describe("UI Test", () => {
  it("should render the first page to about me", () => {
    cy.visit("/");
    cy.contains("tubone24").scrollIntoView();
    cy.title().should("include", "tubone24");
    cy.get("ul > li").should(($li) => {
      expect($li.eq(0)).to.contain("Contact");
      expect($li.eq(1)).to.contain("Experience");
      expect($li.eq(2)).to.contain("Slides");
      expect($li.eq(3)).to.contain("Blog");
      expect($li.eq(4)).to.contain("Musics");
      expect($li.eq(5)).to.contain("Photos");
      expect($li.eq(6)).to.contain("Portfolio");
      expect($li.eq(7)).to.contain("About Me");
    });
    cy.contains("About Me").click();
    cy.get("p").should(($p) => {
      expect($p.eq(0)).to.contain("I am an engineer with over");
      expect($p.eq(1)).to.contain("My technical stack is diverse");
    });
    cy.window().its("scrollY").should("not.equal", 0);
  });
  it("should render the first page to about me with button", () => {
    cy.contains("tubone24").scrollIntoView();
    cy.contains("About me").click();
    cy.get("p").should(($p) => {
      expect($p.eq(0)).to.contain("I am an engineer with over");
      expect($p.eq(1)).to.contain("My technical stack is diverse");
    });
    cy.window().its("scrollY").should("not.equal", 0);
  });
  it("should render the first page to portfolio navlink", () => {
    cy.contains("Portfolio").click();
    cy.contains("tubone24").scrollIntoView();
    cy.window().its("scrollY").should("not.equal", 0);
    cy.contains("View More").click();
    cy.contains("View More").should("not.exist");
    cy.contains("View Less").click();
    cy.contains("View Less").should("not.exist");
  });
});
