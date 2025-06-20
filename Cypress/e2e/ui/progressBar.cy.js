import progressPage from "../../support/pages/progressBarPage";

describe("Progress Bar - DemoQA", () => {
  it("Inicia e para antes de 25%, depois completa até 100%", () => {
    cy.visit("/");
    cy.contains("Widgets").click();
    cy.contains("Progress Bar").click();

    progressPage.startProgress();
    progressPage.waitAndStopBefore25();
    progressPage.validateProgressBelow25();

    progressPage.startAndComplete();
    progressPage.resetProgress();

    cy.log("✅ Teste de progress bar finalizado com sucesso!");

  });
});
