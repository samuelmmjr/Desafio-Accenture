import sortablePage from '../../support/pages/sortablePage';

describe('Sortable', () => {
  it('deve reordenar os itens para ordem crescente', () => {
    sortablePage.visit();
    sortablePage.sortListInAscendingOrder();
    cy.log('✅ Teste Sortable finalizado com sucesso!');
  });
});
