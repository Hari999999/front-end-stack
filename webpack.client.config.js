const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

/*
Config
*/
const PATHS = {
    devserver: 'http://localhost:9005/',
    devurl: 'http://localhost:3000/',
    ownPostCssConfig: path.resolve('./postcss.config.js'),
    dist: path.join(__dirname, './dist/client'),
    js: path.join(__dirname, 'src/client/'),
    root: path.resolve('./src/client/'),
}

const isDev = (process.env.NODE_ENV === 'development')

const config = {
    entry: getEntryObject(),
    output: {
        filename: (isDev) ? '[name].js' : '[name].[chunkhash].js',
        path: PATHS.dist,
        publicPath: (isDev) ? PATHS.devurl : '/',
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
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader',
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                ],
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
            `${path.join(__dirname, 'src/client/')}index.tsx`,
        ],
    }

    if (isDev) {
        entryObject.main.unshift('webpack-hot-middleware/client?path=/__webpack_hmr')
        entryObject.main.unshift('react-hot-loader/patch')
    }

    return entryObject
}

function getPlugins() {
    const plugins = [
        new CleanWebpackPlugin([PATHS.dist]),
        new webpack.NamedModulesPlugin(),
    ]

    if (isDev) {
        plugins.push(new webpack.HotModuleReplacementPlugin())
        plugins.push(new MiniCssExtractPlugin({ filename: 'main.css' }))

        return plugins
    }

    plugins.push(new webpack.HashedModuleIdsPlugin())
    plugins.push(new ManifestPlugin({
        fileName: 'webpack-manifest.json'
    }))
    plugins.push(new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
    }))
    plugins.push(new UglifyJsPlugin({
        sourceMap: true,
        uglifyOptions: {
            compress: {
                drop_console: true,
            },
        },
    }))

    return plugins
}

module.exports = config
