import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reduxCookiesMiddleware from 'redux-cookies-middleware';
import getStateFromCookies from 'redux-cookies-middleware/lib/getStateFromCookies';
import jsCookie from 'js-cookie';
import rootReducer from './rootReducer.js';
import config from '../config/config';

let initialState = {
  cart: {
      products: [],
      quantity: {}
  }
};

initialState = getStateFromCookies(initialState, config.cookie.paths);

const middlewares = applyMiddleware(
    ...[
        thunk,
        reduxCookiesMiddleware(config.cookie.paths, {
            setCookie: (name, value, expiry = config.cookie.EXPIRE_IN_DAYS, secure = false) => {
                jsCookie.set(name, value, { expires: expiry, path: '/', secure });
            }
        })
    ]
);
const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default createStore(
    rootReducer,
    initialState,
    composeEnhacers(middlewares)
);