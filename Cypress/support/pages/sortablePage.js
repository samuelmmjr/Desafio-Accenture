class SortablePage {
  visit() {
    cy.visit('https://demoqa.com/sortable');
  }

  sortListInAscendingOrder() {
    cy.get('#demo-tab-list').click({ force: true });

    const expectedOrder = ['One', 'Two', 'Three', 'Four', 'Five', 'Six'];

    cy.get('.vertical-list-container > div:visible', { timeout: 10000 }).then(($items) => {
      const texts = [...$items].map(el => el.innerText.trim());
      expect(texts).to.deep.equal(expectedOrder);
    });
  }
}

export default new SortablePage();
