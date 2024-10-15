# API para gestão de contatos

> Essa API disponibiliza a gestão de contatos para um usuário com associação associando-os com categorias.

## Funcionalidades

- Listar todos os contatos ou listar por ID
- Salvar um novo contato
- Atualizar um contato existente
- Deletar um contato específico
- Listar e adicionar categorias

## Tecnologias

- NodeJs
- Express
- Postgres

## Como executar

_Para seguir com a execução é necessário ter o Docker e o npm instalado._

_Todos os comando foram testados no PowerShell do windows utilizando o WLS. Se você preferir pode seguir fazendo via interface gráfica do Docker._

### Sega os próximos passos executando os comandos após sua descrição.

1. Instalar e executar a imagem do Postgres no Docker:

```bash
docker run --name pg -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -p 5432:5432 -d postgres
```

2. Abrir o bash do Postgres no terminal:

```bash
docker exec -it pg bash
```

3. Logar no Postgres com o usuário root:

```bash
psql -U root
```

4. Criar o banco de dados:

```bash
CREATE DATABASE mycontacts;
```

5. Verificar se o banco foi criado corretamente (Você deverá ver o nome "mycontacts" na listagem de banco de dados):

```bash
\l
```

_Aperte q para sair._

6. Acessar o banco:

```bash
\c mycontacts
```

7. Criar as tabelas dentro da base de dados mycontacts:

```bash
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS categories (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  name VARCHAR NOT NULL
);

CREATE TABLE IF NOT EXISTS contacts (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  name VARCHAR NOT NULL,
  email VARCHAR UNIQUE,
  phone VARCHAR,
  category_id UUID,
  FOREIGN KEY(category_id) REFERENCES categories(id)
);
```

8. Para visualizar as tabelas criadas execute o comando:

```bash
\dt
```

9. Executar a api com o comando:

```bash
npm run dev
```

## Rotas disponibilizadas

### Contatos

- Cria um novo contato: `POST /contacts`
- Obtém informações de um contato específico: `GET /contacts/:id`
- Atualiza informações de um contato existente: `PUT /contacts/:id`
- Deleta um contato específico: DELETE `/contacts/:id`

### Categorias

- Lista todas as categorias: `GET /categories`
- Cria uma nova categoria: `POST /categories`
