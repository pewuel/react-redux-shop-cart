const config = {
    products: {
        FETCH_URL: 'http://private-1c19e-reactlesson.apiary-mock.com/products',
        SEARCH_MIN_LENGTH: 3,
        SORTERS: [
            {
                name: 'Domyślnie',
                value: 'id',
                default: true
            },
            {
                name: 'Nazwa',
                value: 'name',

            },
            {
                name: 'Cena',
                value: 'price'
            }
        ],
        ORDER_BY: [
            {
                name: 'Rosnąco',
                value: 'ASC',
                default: true
            },
            {
                name: 'Malejąco',
                value: 'DESC'
            }
        ]
    },
    cookie: {
        EXPIRE_IN_DAYS: 2,
        paths: {
            'cart.products': {
                name: 'cart_products'
            },
            'cart.quantity': {
                name: 'cart_quantity'
            }
        }
    }
};


export default config;