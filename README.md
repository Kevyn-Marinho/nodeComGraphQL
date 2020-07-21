# Projeto simples para testes com graphql

## Para rodar execute os comandos abaixo
- npm i
- npm start

## Como utilizar
- O servidor está rodando na porta padrão do GraphQL http://localhost:4000/

### Para escrever sua consulta no playaground Retorna a lista com os 3 produtos

```
query {
	products { id, name price}
}
```

### Retorna o produto com o id indicado 
```
query {
  	product (id: 2) { id, name price}
}
```

### para escrever uma mutation 
```
mutation {
  createProduct(name: "papel", price: 15) {id, name, price }
}
```
ou 
```		
mutation {
  updateProduct(data: { name: "papel", price: 15, id: 1}) {id, name, price }
}
```
