export const getProductsInCart = ({ products, cart }) => {

    const allProducts = products.items;
    const idsInCart = cart.products;
    const productsInCart = [];


    if (idsInCart.length > 0 && allProducts.length > 0) {
        idsInCart.map(id => {
            const product = allProducts.find(item => item.id === id);

            if (product) {
                return productsInCart.push({
                    id: product.id,
                    name: product.name,
                    price: product.price * cart.quantity[id],
                    quantity: cart.quantity[id]
                })
            }
        });
    }

    return productsInCart;
};


export const getTotalPrice = ({ products, cart }) => {

    const allProducts = products.items;
    const quantity = cart.quantity;
    let sum = 0;

    if (allProducts.length > 0  && Object.keys(quantity).length > 0) {
        Object.keys(quantity).map(productId => {

            const product = allProducts.find(item => item.id === parseInt(productId));

            return sum += quantity[productId] * product.price
        });
    }

    return sum;
};