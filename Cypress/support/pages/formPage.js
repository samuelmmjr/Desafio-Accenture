import { faker } from "@faker-js/faker";

class FormPage {
  fillFormWithRandomData() {
    cy.get("#firstName").type(faker.person.firstName());
    cy.get("#lastName").type(faker.person.lastName());
    cy.get("#userEmail").type(faker.internet.email());
    cy.get('label[for="gender-radio-1"]').click();
    cy.get("#userNumber").type(faker.phone.number("##########"));
    cy.get("#dateOfBirthInput").click();
    cy.get(".react-datepicker__year-select").select("1998");
    cy.get(".react-datepicker__month-select").select("May");
    cy.get(".react-datepicker__day--015").click();
    cy.get("#subjectsInput").type("Maths{enter}");
    cy.get('label[for="hobbies-checkbox-1"]').click();
    cy.get("#uploadPicture")
      .scrollIntoView()
      .selectFile("cypress/fixtures/exemplo.txt", { force: true });
    cy.get("#currentAddress").type(faker.location.streetAddress());
    cy.get("#react-select-3-input")
      .scrollIntoView()
      .type("NCR{enter}", { force: true });
    cy.get("#react-select-4-input")
      .scrollIntoView()
      .type("Delhi{enter}", { force: true });
  }

  submitForm() {
    cy.get("#submit").click({ force: true });
  }

  validateSuccessPopup() {
    cy.get("#adplus-anchor").invoke("remove"); // remove anúncio se existir
    cy.get(".modal-content", { timeout: 10000 }).should("be.visible");
    cy.get("#example-modal-sizes-title-lg").should(
      "contain",
      "Thanks for submitting the form"
    );
    cy.get("#closeLargeModal").scrollIntoView().click({ force: true });
    cy.get(".modal-content").should("not.exist");
  }
}

export default new FormPage();
