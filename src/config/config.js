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
    }
};


export default config;