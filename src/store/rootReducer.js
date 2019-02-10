import { combineReducers } from 'redux';
import cart from './cart/reducer';
import products from './products/reducer';

const rootReducer = combineReducers({
    cart,
    products
});

export default rootReducer;