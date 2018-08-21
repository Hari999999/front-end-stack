const path = require('path')
const fs = require('fs')
const CleanWebpackPlugin = require('clean-webpack-plugin')

/*
Config
*/
const PATHS = {
    devserver: 'http://localhost:9005/',
    devurl: 'http://localhost:3000/',
    ownPostCssConfig: path.resolve('./postcss.config.js'),
    dist: path.join(__dirname, './dist/server'),
    js: path.join(__dirname, 'src/server/'),
    root: path.resolve('./src/server/'),
}

const isDev = (process.env.NODE_ENV === 'development')

const config = {
    entry: getEntryObject(),
    target: 'node',
    output: {
        filename: '[name].js',
        path: PATHS.dist,
        publicPath: (isDev) ? PATHS.devurl : '/',
    },
    optimization: {
        minimize: false
    },
    mode: (isDev) ? 'development' : 'production',
    devtool: (isDev) ? 'eval-source-map' : 'source-map',
    serve: {
        devMiddleware: {
            publicPath: '/',
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        },
        port: 3000
    },
    plugins: getPlugins(),
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                use: [
                    'ts-loader',
                ],
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [
            '.js',
            '.ts',
            '.tsx',
            '.json',
            '.scss',
        ],
        modules: [
            'node_modules',
            PATHS.js,
        ],
    }
}

function getEntryObject() {
    const entryObject = {
        main: [
            `${path.join(__dirname, 'src/server/')}server.tsx`,
        ],
    }

    return entryObject
}

function getPlugins() {
    const plugins = [
        new CleanWebpackPlugin([PATHS.dist]),
    ]

    return plugins
}

module.exports = config
