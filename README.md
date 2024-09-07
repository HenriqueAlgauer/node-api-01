# Projeto: Web API

### Linguagem: TypeScript
### Banco de dados: SQLite [desenvolvimento] || Postgress [produção] 

-> Tecnologias utilizadas no projeto: 
- fastify (mirco framework para node)<br>
- knex (query builder)<br>
- zod (utilizado junto com o typescript, utilizado no projeto para fazer a tipagem das tabelas no banco )<br>
- dotenv (cria um ambiente seguro para comunicação com as variáveis de ambiente)<br>
- vitest (foi escolhido por conta da integração com Typescript, utilizado para fazer os testes)<br>
- pg (driver para PostgresSQL, utilizado em produção)<br>

## Teste na sua máquina



# RF
[x] O usuário deve poder criar uma nova transação
[x] O usuário deve poder obter um resumo da sua conta
[x] O usuário deve poder listar todas as transações que já ocorreram
[x] O usuário deve poder visualizar  uma transação única

# RN
[x] A transação pode ser do tipo crédito que somará ao valor total, ou débito que subtrairá
[ ] Deve ser possível identificarmos o usuário entre as requisições
[ ] O usuário só pode visualizar transações o qual ele criou

# RNF

[ ]  