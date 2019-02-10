import * as types from './actionTypes';


export const addToCart = productId => ({
    type:  types.ADD_TO_CART,
    payload: productId
});


export const removeFromCart = productId => ({
    type:  types.REMOVE_FROM_CART,
    payload: productId
});