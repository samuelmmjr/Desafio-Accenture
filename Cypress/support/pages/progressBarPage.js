class ProgressBarPage {
  startProgress() {
    cy.get("#startStopButton").click();
  }

  waitAndStopBefore25() {
    cy.wait(800);
    cy.get("#startStopButton").click();
  }

  validateProgressBelow25() {
    cy.get("#progressBar")
      .invoke("text")
      .then((text) => {
        const value = parseInt(text);
        expect(value).to.be.lte(25);
      });
  }

  startAndComplete() {
    cy.get("#startStopButton").click();
    cy.get("#progressBar", { timeout: 15000 }).should("have.text", "100%");
  }

  resetProgress() {
    cy.get("#resetButton", { timeout: 10000 })
      .should("have.text", "Reset")
      .click();

    cy.get("#progressBar", { timeout: 10000 })
      .should("be.visible")
      .should(($el) => {
        expect($el.text().trim()).to.eq("0%");
      });
  }
}

export default new ProgressBarPage();
