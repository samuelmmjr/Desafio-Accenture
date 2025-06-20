import formPage from "../../support/pages/formPage";

describe("Formulário DemoQA", () => {
  it("Preenche o formulário com dados aleatórios e envia", () => {
    cy.visit("/");
    cy.contains("Forms").click();
    cy.contains("Practice Form").click();

    formPage.fillFormWithRandomData();
    formPage.submitForm();
    formPage.validateSuccessPopup();

    cy.log("✅ Teste de formulário finalizado com sucesso!");
  });
});
