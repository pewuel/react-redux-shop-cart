import config from '../../config/config';
import * as types from './actionTypes';

export const fetchProducts = () => dispatch => fetch(config.products.FETCH_URL)
    .then(response => response.json())
    .then(response => dispatch({
        type: types.FETCH_PRODUCTS,
        payload: response
    }))
    .catch(err => dispatch({
        type: types.FETCH_PRODUCTS_ERROR,
        error: err.message
    }));


export const searchProducts = text => ({
   type:  types.SEARCH_PRODUCTS,
   payload: text
});


export const sortByChange = value => ({
    type: types.SORT_BY_CHANGE,
    payload: value
});

export const orderByChange = value => ({
    type: types.ORDER_BY_CHANGE,
    payload: value
});