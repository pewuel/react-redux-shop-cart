export const getProductsInCart = ({ products, cart }) => {

    const allProducts = products.items;
    const IdsInCart = cart.products;
    const productsInCart = [];
    const filtered = allProducts.filter(item => IdsInCart.includes(item.id));

    filtered.map(item => {
        return productsInCart.push({
            id: item.id,
            name: item.name,
            price: item.price * cart.quantity[item.id],
            quantity: cart.quantity[item.id]
        })
    });

    return productsInCart;
};


export const getTotalPrice = ({ products, cart }) => {

    let sum = 0;
    const quantity = cart.quantity;

    if (Object.keys(quantity).length > 0) {
        Object.keys(quantity).map(productId => {

            const product = products.items.find(item => item.id === parseInt(productId));

            return sum += quantity[productId] * product.price
        });
    }

    return sum;
};