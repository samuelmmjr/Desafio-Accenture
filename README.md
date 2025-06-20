# Desafio Accenture - Testes Automatizados com Cypress

Este projeto contém a automação de testes **E2E (end-to-end)** da plataforma [DemoQA](https://demoqa.com/) utilizando **Cypress**.

---

## 📁 Estrutura do Projeto

- `cypress/e2e/api/` – Testes relacionados à API de criação e reserva de livros.
- `cypress/e2e/ui/` – Testes da interface de usuário:
  - Formulários
  - Progress Bar
  - Browser Windows
  - Web Tables
  - Sortable

- `cypress/support/pages/` – Padrão Page Object para encapsular a lógica de interação com cada página.
- `cypress/fixtures/` – Contém o arquivo `.txt` usado para upload no formulário.

---

## ▶️ Como executar os testes

### 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/desafio-accenture.git
cd desafio-accenture
```

### 2. Instalar as dependências

```bash
npm install
```

### 3. Executar o Cypress em modo interativo (GUI)

```bash
npx cypress open
```

Ou, para rodar em modo headless (terminal):

```bash
npx cypress run
```

---

## 🧪 Executar um teste específico

```bash
npx cypress run --spec "cypress/e2e/ui/formulario.cy.js"
```

---

## ✅ Testes implementados

### API
- Criar usuário
- Gerar token
- Autorizar usuário
- Listar livros
- Reservar livros
- Consultar perfil com livros reservados

### UI
- 📋 Formulário (Forms > Practice Form)
- ⏳ Progress Bar (Widgets > Progress Bar)
- 🪟 Browser Windows (Alerts, Frame & Windows)
- 📊 Web Tables (Elements > Web Tables)
- 🔃 Sortable (Interactions > Sortable)

---

## ✨ Extras

- Projeto estruturado com Page Objects
- `cy.log(...)` ao final de cada teste para melhor rastreabilidade
- Upload de arquivo `.txt` incluído via `cypress/fixtures/exemplo.txt`

---

## 📌 Requisitos

- Node.js 18+
- npm
- Cypress ^13.1.0

---

## 🚀 Observação

O projeto foi desenvolvido sem o uso do Cucumber inicialmente, para facilitar a estrutura e execução. A integração BDD com Gherkin pode ser adicionada como melhoria.

---

## 🧑‍💻 Autor

Desenvolvido por **Samuel** como parte do desafio técnico da Accenture.


---

## ✅ Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [Git](https://git-scm.com/)

---

## 🧪 Descrição dos Testes Automatizados

### API
- **reserva-livros.cy.js**: Cria usuário, autentica, lista livros disponíveis, reserva dois e verifica os dados do usuário.

### UI
- **formulario.cy.js**: Preenche formulário com dados aleatórios e realiza upload de um `.txt`.
- **progressBar.cy.js**: Inicia e valida progresso menor que 25%, depois reinicia e confirma reset.
- **browserWindows.cy.js**: Abre nova janela e valida mensagem “This is a sample page”.
- **webTables.cy.js**: Cria, edita e remove registros da tabela.
- **sortable.cy.js**: Reordena itens da lista de forma crescente com drag-and-drop.

---

## 🖥️ Exemplo de Saída Esperada

Ao rodar os testes, você deve ver saídas como:

```
✅ Teste de formulário finalizado!
✅ Teste de progress bar finalizado!
```

---

## 🤝 Contribuição

Este projeto é parte de um desafio técnico e pode ser expandido com testes adicionais. Sugestões são bem-vindas!

