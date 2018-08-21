/* eslint-disable key-spacing  */
import bodyParser from 'body-parser'
import chalk from 'chalk'
import express from 'express'
import fs from 'fs'
import morgan from 'morgan'
import React from 'react'
import { renderToString } from 'react-dom/server'
import winston from 'winston'
import { App } from '../client/app'

const morganLogger = morgan('common')
const app = express()

const STATUS_CODES = {
    UNAUTHORISED: 401,
    SUCCESSFUL: 200,
}

const { combine, timestamp, printf, label } = winston.format
const logger = winston.createLogger({
    format: combine(
        label({ label: 'server.js' }),
        timestamp(),
        printf((info: any) => `${info.timestamp} [${info.label}] ${info.level}: ${info.message}`)
    ),
    transports: [
        new winston.transports.Console({
            handleExceptions: true,
        }),
    ],
})

const DEFAULT_PORT = 3000
const PORT = process.env.PORT || DEFAULT_PORT

// Health check
// - Keep this above everything to make sure it doesn't log
app.get('/health-check', (_req: any, res: any) => {
    res.sendStatus(STATUS_CODES.SUCCESSFUL)
})

// Generic request logs
app.use(morganLogger)

// Make body accessible in `req`
app.use(bodyParser.json())

// Make static assets available
app.use(express.static('./public'))

/*
Web App
*/
if (process.env.NODE_ENV === 'development') {
    // Webpack Dev Server
    const { createDevServer } = require('./webpack.server')

    createDevServer(app)
} else {
    try {
        // Production
        const manifestFile = fs.readFileSync('./dist/client/webpack-manifest.json', 'utf8')
        const manifest = JSON.parse(manifestFile)

        app.use(express.static('./dist/client'))
        app.get('*', (_req: any, res: any) => {
            const html = `
                <!DOCTYPE html>
                <html lang="en" dir="ltr">
                    <head>
                        <link rel="stylesheet" href="${manifest['main.css']}" />
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
                        <script type="text/javascript" src="${manifest['main.js']}"></script>
                    </body>
                </html>
            `

            res.send(html)
        })
    } catch (error) {
        logger.error(chalk.red('Error finding build manifest'), error)
        process.exit(1)
    }
}

app.listen(PORT, () => logger.info(chalk.green(`App listening on port ${PORT}!`)))
