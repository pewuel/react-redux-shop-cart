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
                return {
                    ...state,
                    quantity: {
                        ...state.quantity,
                        [action.payload]: state.quantity[action.payload] + 1
                    }
                }
            }

            return {
                ...state,
                products: [
                    ...state.products,
                    action.payload
                ],
                quantity: {
                    ...state.quantity,
                    [action.payload]: 1
                }
            };

        }


        case types.REMOVE_FROM_CART: {

            if (state.quantity[action.payload] === 1) {

                delete state.quantity[action.payload];

                return {
                    ...state,
                    products: state.products.filter(item => item !== action.payload),
                }
            }

            return {
                ...state,
                quantity: {
                    ...state.quantity,
                    [action.payload]: state.quantity[action.payload] - 1
                }
            }
        }


        default: {
            return state;
        }
    }
};

export default cart;