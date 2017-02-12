import { configureStore } from './store';
import { Provider } from 'react-redux';
import React from 'react';
import { render } from 'react-dom';
import Routes from './router';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory, Router } from 'react-router';
import 'sass/index'; // Import CSS

/*
    Ensure polyfills only load on older browsers
 */
// Covers all IE versions and Safari < 11
const browserSupportsAllFeatures = window.Promise && window.fetch;

if (browserSupportsAllFeatures) {
    initialise();
} else {
    // See 'Code Splitting' documentation for Webpack (https://webpack.js.org/guides/code-splitting-require/#dependencies)
    require.ensure([], function() {
        require('./polyfills.js');
        initialise();
    });
}

/*
    Main function
 */
function initialise() {
    const reduxStore = configureStore();
    const history = syncHistoryWithStore(browserHistory, reduxStore);

    render((
        <Provider store={reduxStore}>
            <Router history={history} routes={Routes}>
            </Router>
        </Provider>
    ), document.getElementById('root'));
}
