import React from 'react'
import { hydrate } from 'react-dom'
import 'sass/index' // Import CSS

declare global {
    interface WebpackRequire extends NodeRequire {
        ensure(
            dependencies: string[],
            callback: (require: WebpackRequire) => void,
            errorCallback?: (error: Error) => void,
            chunkName?: string
        ): void
    }

    interface Window { Promise: Promise<any> }
}

/*
    Ensure polyfills only load on older browsers
 */
// Covers all IE versions and Safari < 11
const browserSupportsAllFeatures = window.Promise && window.fetch

if (browserSupportsAllFeatures) {
    initialise()
} else {
    const require: WebpackRequire = (window as any).require

    require.ensure([], function () {
        require('./polyfills')
        initialise()
    })
}

/*
    Main function
 */
function initialise() {
    const { App } = require('./app')
    renderApp(App)

    if ((module as any).hot) {
        (module as any).hot.accept('./app', () => {
            const { App: nextApp } = require('./app')

            renderApp(nextApp)
        })
    }
}

function renderApp(App: any) {
    hydrate(
        <App />,
        document.getElementById('root')
    )
}
