class WebTablesPage {
  visit() {
    cy.visit("https://demoqa.com/webtables");
  }

  addRecord() {
    cy.get("#addNewRecordButton").click();
    cy.get("#firstName").type("João");
    cy.get("#lastName").type("Silva");
    cy.get("#userEmail").type("joao.silva@example.com");
    cy.get("#age").type("30");
    cy.get("#salary").type("5000");
    cy.get("#department").type("QA");
    cy.get("#submit").click();
  }

  editRecord() {
    cy.get('[title="Edit"]').last().click();

    cy.get("#department", { timeout: 5000 })
      .should("be.visible")
      .clear()
      .type("Quality Assurance");

    cy.get("#submit").click();
  }

  deleteRecord() {
    cy.get('[title="Delete"]').last().click();
  }
}

export default new WebTablesPage();
