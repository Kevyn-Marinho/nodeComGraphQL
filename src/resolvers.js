let products = [
    {id: 1, name: 'Caderno', price: 10.0},
    {id: 2, name: 'Caneta', price: 1.3},
    {id: 3, name: 'Jarra', price: 6},
]

module.exports = {
    Query:  {
        products: () => products.sort(e => e.id),
        product: (_, {id}) => products.find(element => element.id == id)
    },

    Mutation:  {
        createProduct: (parent, args, ctx, info) => {
            const product = { ...args, id : products.length + 1 };
         
            products.push(product);

            return product;
        },

        updateProduct: (parent, args, ctx, info) => {
            const index = products.findIndex(p => p.id === args.data.id);
            console.log(index, args.data)
            
            if(index < 0) return null;
            
            const newProd = {...args.data};

            products.splice(index, 1);
            products.push(newProd);

            return newProd;
          }
    }
}