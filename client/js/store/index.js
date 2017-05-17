import { createEpicMiddleware } from 'redux-observable';
import epics from 'ducks/epics';
import logger from 'middleware/logger-middleware';
import reducers from 'ducks/reducer';
import { applyMiddleware, compose, createStore } from 'redux';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-underscore-dangle

const epicMiddleware = createEpicMiddleware(epics);

const enhancer = composeEnhancers(
  applyMiddleware(epicMiddleware, logger)
);

let store;

export function configureStore() {
    store = createStore(reducers, enhancer);
    return store;
}

export { store };
