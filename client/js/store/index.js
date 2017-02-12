import { browserHistory } from 'react-router';
import logger from 'middleware/logger-middleware';
import reducers from 'reducers';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import { applyMiddleware, compose, createStore } from 'redux';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-underscore-dangle

const reduxRouterMiddleware = routerMiddleware(browserHistory);

const enhancer = composeEnhancers(
  applyMiddleware(thunk, reduxRouterMiddleware, logger)
);

let store;

export function configureStore() {
    store = createStore(reducers, enhancer);
    return store;
}

export { store };
