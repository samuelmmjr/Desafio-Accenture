describe('Desafio API - Reserva de Livros', () => {
  let username;
  let password;
  let userId;
  let token;
  let isbnList;

  before(() => {
    username = `samuel_${Date.now()}`;
    password = 'Senha123!';
  });

  it('1️⃣ Cria um novo usuário', () => {
    cy.request('POST', '/Account/v1/User', {
      userName: username,
      password: password
    }).then((res) => {
      expect(res.status).to.eq(201);
      userId = res.body.userID;
    });
  });

  it('2️⃣ Gera um token de autenticação', () => {
    cy.request('POST', '/Account/v1/GenerateToken', {
      userName: username,
      password: password
    }).then((res) => {
      expect(res.status).to.eq(200);
      token = res.body.token;
    });
  });

  it('3️⃣ Verifica se o usuário está autorizado', () => {
    cy.request({
      method: 'POST',
      url: '/Account/v1/Authorized',
      body: { userName: username, password },
      failOnStatusCode: false
    }).then((res) => {
      expect(res.status).to.eq(200);
    });
  });

  it('4️⃣ Lista os livros disponíveis', () => {
    cy.request('GET', '/BookStore/v1/Books').then((res) => {
      expect(res.status).to.eq(200);
      const books = res.body.books.slice(0, 2);
      isbnList = books.map((book) => ({ isbn: book.isbn }));
    });
  });

  it('5️⃣ Adiciona livros ao usuário', () => {
    cy.request({
      method: 'POST',
      url: '/BookStore/v1/Books',
      headers: { Authorization: `Bearer ${token}` },
      body: {
        userId,
        collectionOfIsbns: isbnList
      }
    }).then((res) => {
      expect(res.status).to.eq(201);
    });
  });

  it('6️⃣ Valida que os livros foram adicionados ao usuário', () => {
    cy.request({
      method: 'GET',
      url: `/Account/v1/User/${userId}`,
      headers: { Authorization: `Bearer ${token}` }
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.books.length).to.eq(2);
    });
  });
});
