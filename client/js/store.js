import batchMiddleware from 'middleware/batch';
import { createEpicMiddleware } from 'redux-observable';
import createRavenMiddleware from 'middleware/raven';
import epics from 'epics';
import loggerMiddleware from 'middleware/logger';
import reducers from 'reducers';
import { applyMiddleware, compose, createStore } from 'redux';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-underscore-dangle

const epicMiddleware = createEpicMiddleware(epics);
const ravenMiddleware = createRavenMiddleware();

const enhancer = composeEnhancers(
    applyMiddleware(
        batchMiddleware,
        ravenMiddleware,
        epicMiddleware,
        loggerMiddleware
    )
);

let store;

export function configureStore() {
    store = createStore(reducers, enhancer);
    return store;
}

export { store };

// Hot Module Replacement
if (module.hot) {
    module.hot.accept('epics', () => {
        const rootEpic = require('epics');
        epicMiddleware.replaceEpic(rootEpic);
    });
    module.hot.accept('reducers', () => {
        const rootReducer = require('reducers');
        store.replaceReducer(rootReducer);
    });
}
