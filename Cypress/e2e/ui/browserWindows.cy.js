import browserWindowsPage from "../../support/pages/browserWindowsPage";

describe("Browser Windows", () => {
  it("deve abrir nova janela e validar o texto", () => {
    browserWindowsPage.visit();
    browserWindowsPage.openNewWindow();
    browserWindowsPage.validateNewWindowText();

    cy.log("✅ Teste de Browser Windows finalizado com sucesso!");
  });
});
