import * as types from './actionTypes';


const initialState = {
    products: [],
    quantity: {}
};


const cart = (state = initialState, action) => {

    switch (action.type) {
        case types.ADD_TO_CART: {

            const index = state.products.indexOf(action.payload);

            if (index > -1) {
                return Object.assign({}, state, {
                    quantity: Object.assign({}, state.quantity,{
                        [action.payload]: state.quantity[action.payload] + 1
                    })
                })
            }

            return Object.assign({}, state, {
                products: [
                    ...state.products,
                    action.payload
                ],
                quantity: Object.assign({},{
                    ...state.quantity,
                    [action.payload]: 1
                })
            });

        }


        case types.REMOVE_FROM_CART: {

            if (state.quantity[action.payload] === 1) {
                delete state.quantity[action.payload];

                return Object.assign({}, state, {
                    products: state.products.filter(item => item !== action.payload),
                    quantity: state.quantity
                });
            }

            return Object.assign({}, state, {
                quantity: Object.assign({},{
                    ...state.quantity,
                    [action.payload]: state.quantity[action.payload] - 1
                })
            });
        }


        default: {
            return state;
        }
    }
};

export default cart;