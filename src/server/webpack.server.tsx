
/*
 Development Mode
 */
import chalk from 'chalk'
import React from 'react'
import { renderToString } from 'react-dom/server'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddeware from 'webpack-hot-middleware'
import * as config from '../../webpack.client.config'
import { App } from '../client/app'

const compiler: any = webpack(config.default as any)

function createDevServer(app: any) {
    console.warn(chalk.yellow('Using development files...'))

    app.use(webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
    }))

    app.use(webpackHotMiddeware(compiler))

    app.use('*', (_req: any, res: any) => {
        const html = `
            <!DOCTYPE html>
            <html lang="en" dir="ltr">
            <head>
                <script>
                    if ('serviceWorker' in navigator) {
                        window.addEventListener('load', function () {
                            navigator.serviceWorker.register('/service-worker.js');
                        });
                    }
                </script>
            </head>
            <body>
                <div id="root">${renderToString(<App />)}</div>
                <script type="text/javascript" src="${compiler.options.output.publicPath}main.js"></script>
            </body>
            </html>
        `

        res.send(html)
    })
}

module.exports = { createDevServer }
