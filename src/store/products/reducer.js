import * as types from './actionTypes';
import config from '../../config/config';


const initialState = {
    items: [],
    loaded: false,
    searchText: '',
    orderBy: config.products.ORDER_BY.find(item => item.default).value,
    sortBy: config.products.SORTERS.find(item => item.default).value,
    errors: null
};

const products = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_PRODUCTS:
            return {
                ...state,
                items: action.payload,
                loaded: true
            };
        case types.FETCH_PRODUCTS_ERROR:
            return {
                ...state,
                items: [],
                loaded: true,
                errors: action.error
            };
        case types.SEARCH_PRODUCTS:
            return {
                ...state,
                searchText: action.payload
            };
        case types.SORT_BY_CHANGE:
            return {
                ...state,
                sortBy: action.payload
            };
        case types.ORDER_BY_CHANGE:
            return {
                ...state,
                orderBy: action.payload
            };
        default:
            return state;
    }
};

export default products;