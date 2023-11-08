## Instalação

Clonar o repositório

```bash
  git clone [https://github.com/Leokrindges/api-crud-carros.git)
```

Entrar na pasta do projeto

```bash
  cd api-crud-carros
```

Instalar as depêndencias do projeto

```bash
  yarn install | npm install
```

Iniciar o projeto

```bash
  yarn run dev | yarn dev | npm run dev
```

## Documentação da API

Esta API foi desenvolvida para gerenciar informações sobre carros. Ela oferece funcionalidades para criar, ler, atualizar e excluir informações sobre carros. 


#### Retorna uma lista de todos os carros cadastrados.

```http
  GET /veiculos
```



#### Criar um carro

```http
  POST /veiculos
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `modelo`      | `string` | **Obrigatório**. nome do carro |
| `marca`      | `string` | **Obrigatório**. marca do carro |
| `ano`      | `number` | **Obrigatório**. ano do carro |
| `cor `      | `string` | **Obrigatório**. cor do carro |
| `preco`      | `number` | **Obrigatório**. preco do carro |




#### Retorna os detalhes de um carro específico com base no ID fornecido na URL.

```http
  GET /veiculos/:id?
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `id` | `number` | **Opcional**. id do carro para filtragem





#### Atualiza os detalhes de um carro existente com base no ID fornecido na URL.

```http
  PUT /veiculos/:id
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `number` | **Obrigatório**. id do carro para saber qual deve ser atualizado |
| `modelo`      | `string` | **Opcional**. nome do carro |
| `marca`      | `string` | **Opcional**. marca do carro |
| `ano`      | `number` | **Opcional**. ano do carro |
| `cor `      | `string` | **Opcional**. cor do carro |
| `preco`      | `number` | **Opcional**. preco do carro |




### Exclui um carro com base no ID fornecido na URL.
```http
  DELETE /veiculos/id
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `number` | **Obrigatório**. id do carro |



