import { foo } from './test';
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
    console.debug('Test', foo());
    console.warn('Fill in the index.js file'); // eslint-disable-line
}
