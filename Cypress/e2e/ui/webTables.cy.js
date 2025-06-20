import webTablesPage from '../../support/pages/webTablesPage';

describe('Web Tables', () => {
  it('deve criar, editar e excluir um registro', () => {
    webTablesPage.visit();
    webTablesPage.addRecord();
    webTablesPage.editRecord();
    webTablesPage.deleteRecord();
    cy.log('✅ Teste Web Tables finalizado com sucesso!');
  });
});
