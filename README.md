# Projeto: Web API 🏳️🟨🟩
É um 'mini' gerenciador financeiro, em que é possível cadastrar uma transação do tipo crédito ou débito, também é possível listar as transações que ele fez, mas como não há uma autenticação de usuário, ela é feita de acordo com o `session_id`, além disso, há um 'resumo financeiro', que traz o valor montante do usuário com base nas operaçõe feitas.

### Linguagem: TypeScript
### Banco de dados: SQLite [desenvolvimento] || Postgress [produção] 

#### Tecnologias utilizadas no projeto: 
- **Fastify** (mirco framework para node)<br>
- **Knex** (query builder, foi utilizado para fazer as migrations também)<br>
- **Zod** (utilizado junto com o typescript, utilizado no projeto para fazer a tipagem das tabelas no banco )<br>
- **Dotenv** (cria um ambiente seguro para comunicação com as variáveis de ambiente)<br>
- **Vitest** (foi escolhido por conta da integração com Typescript, utilizado para fazer os testes)<br>
- **Pg** (driver para PostgresSQL, utilizado em produção)<br>

## Teste na sua máquina
1. excute `npm install`
2. crie os arquivos `.env` e `.env.test` como no arquivo `.env.example` e `.env.test.example`
3. execute `npm run dev`
4. você pode executar `npm test` para rodar os testes automatizados

# RF
[x] O usuário deve poder criar uma nova transação<br>
[x] O usuário deve poder obter um resumo da sua conta<br>
[x] O usuário deve poder listar todas as transações que já ocorreram<br>
[x] O usuário deve poder visualizar  uma transação única<br>

# RN
[x] A transação pode ser do tipo crédito que somará ao valor total, ou débito que subtrairá<br>
[x] Deve ser possível identificarmos o usuário entre as requisições<br>
[x] O usuário só pode visualizar transações o qual ele criou<br>

---
# Project: Web API 🏳️🟥◽🟦
This is a 'mini' financial manager where users can register transactions of type credit or debit. It is also possible to list the transactions made by the user. Since there is no user authentication, transactions are linked to the `session_id`. Additionally, there is a 'financial summary' that provides the user's total balance based on the performed transactions.

### Language: TypeScript
### Database: SQLite [development] || Postgres [production]

#### Technologies used in the project:
- **Fastify** (a micro framework for Node.js)<br>
- **Knex** (query builder, also used for database migrations)<br>
- **Zod** (used with TypeScript for schema validation and typing of database tables)<br>
- **Dotenv** (creates a secure environment for managing environment variables)<br>
- **Vitest** (chosen for its integration with TypeScript, used for automated testing)<br>
- **pg** (PostgreSQL driver, used in production)<br>

## How to test it on your machine
1. Run `npm install`
2. Create `.env` and `.env.test` files based on `.env.example` and `.env.test.example`
3. Run `npm run dev`
4. You can execute `npm test` to run automated tests

# Functional Requirements (FR)
- [x] Users must be able to create a new transaction<br>
- [x] Users must be able to obtain an account summary<br>
- [x] Users must be able to list all transactions<br>
- [x] Users must be able to view a single transaction<br>

# Business Rules (BR)
- [x] Transactions can be of type credit, which adds to the total balance, or debit, which subtracts from it<br>
- [x] The user must be identifiable across requests<br>
- [x] Users can only view transactions they created<br>
