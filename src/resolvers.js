const products = [
    {id: 1, name: 'Caderno', price: 10.0},
    {id: 2, name: 'Caneta', price: 1.3},
    {id: 3, name: 'Jarra', price: 6},
]



module.exports = {
    Query:  {
        products: () => products,
        product: () => products[0]
    },

    Mutation:  {
        createProduct: () => {}
    }
}