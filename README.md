# Self ORM Genérico para Bancos de Dados Relacionais e Não-Relacionais

Este é um projeto que implementa um Self ORM (Object-Relational Mapping) em TypeScript, projetado para oferecer uma solução genérica e extensível para interação com bancos de dados. No momento, oferece suporte para MongoDB e PostgreSQL, com planos de expansão para outros bancos de dados no futuro.

## Sobre o Self ORM

Este ORM permite definir modelos de dados em TypeScript que são automaticamente mapeados para documentos ou tabelas no banco de dados. Ele oferece métodos simples para realizar operações CRUD (Create, Read, Update, Delete), proporcionando uma integração flexível e robusta entre o código TypeScript e a persistência de dados.

## Funcionalidades Principais

- _Definição de Modelos_: Crie modelos de dados usando classes TypeScript que representam entidades no banco de dados.
- _Operações CRUD_: Suporte completo para operações de criação, leitura, atualização e exclusão de documentos ou registros.
- _Conexão Modular_: Conecte-se facilmente a diferentes tipos de bancos de dados, começando com suporte para MongoDB e PostgreSQL.
- _Extensibilidade_: Projetado para ser facilmente extensível para suportar outros bancos de dados relacionais e não-relacionais no futuro.

## Configuração do Ambiente de Desenvolvimento

Para executar este projeto localmente, siga os passos abaixo:

### Pré-requisitos

- Node.js e npm instalados na sua máquina.
- Banco de dados que deseja realizar a conexão. _Recomendo usar docker para realizar os testes._

### Instalação de Dependências

No diretório raiz do projeto, execute o seguinte comando para instalar as dependências necessárias:

```bash
npm install
```

### Compilação e Execução do Projeto

Para compilar o TypeScript e iniciar o servidor, execute os seguintes comandos:

```bash
npx tsc
node dist/index.js
```

O servidor será iniciado na porta 3000 por padrão.

## Endpoints da API

### Cadastro de Usuário

- _URL:_ `http://localhost:3000/register`
- _Método:_ `POST`
- _Corpo da Requisição:_

```json
{
  "username": "user",
  "password": "password"
}
```

### Autenticação de Usuário

- _URL:_ `http://localhost:3000/authenticate`
- _Método:_ `POST`
- _Corpo da Requisição:_

```json
{
  "username": "user",
  "password": "password",
  "authType": "basic"
}
```

Substitua "authType" por "jwt" se estiver usando autenticação JWT.
