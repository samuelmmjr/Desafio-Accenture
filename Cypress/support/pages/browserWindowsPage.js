class BrowserWindowsPage {
  visit() {
    cy.visit("https://demoqa.com/browser-windows");
  }

  openNewWindow() {
    cy.window().then((win) => {
      cy.stub(win, "open").as("windowOpen");
    });
    cy.get("#windowButton").click();
    cy.get("@windowOpen").should("be.calledWith", "/sample");
  }

  validateNewWindowText() {
    cy.visit("https://demoqa.com/sample");
    cy.contains("This is a sample page").should("be.visible");
  }
}

export default new BrowserWindowsPage();
