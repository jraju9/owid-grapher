const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')
const Dotenv = require('dotenv-webpack')

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production'
    return {
        context: __dirname,
        entry: {
            charts: "./charts/client/charts.entry.ts",
            admin: "./admin/client/admin.entry.ts",
            owid: "./site/client/owid.entry.ts"
        },
        optimization: {
            splitChunks: {
                cacheGroups: {
                    commons: {
                        name: "commons",
                        chunks: "all",
                        minChunks: 2
                    }
                }
            }
        },
        output: {
            path: path.join(__dirname, "dist/webpack"),
            filename: "js/[name].js"
            //filename: (isProduction ? "js/[name].bundle.[hash].js" : "js/[name].js")
        },
        resolve: {
            extensions: [".ts", ".tsx", ".js", ".css"],
            modules: [
                path.join(__dirname, "node_modules"),
                __dirname
            ],
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: "ts-loader",
                    exclude: /serverSettings/,
                    options: {
                        transpileOnly: true,
                        configFile: path.join(__dirname, "tsconfig.client.json")
                    }
                },
                {
                    test: /\.css$/,
                    loader: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: [
                            {
                                loader: 'css-loader',
                                options: {
                                    modules: true,
                                    importLoaders: 1,
                                    localIdentName: '[local]'
                                }
                            }
                        ]
                    })
                },
                {
                    test: /\.scss$/,
                    loader: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: [
                            {
                                loader: 'css-loader',
                                options: {
                                    modules: true,
                                    importLoaders: 1,
                                    localIdentName: '[local]'
                                }
                            },
                            'sass-loader'
                        ]
                    })
                },
                {
                    test: /\.(jpe?g|gif|png|eot|woff|ttf|svg|woff2)$/,
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        useRelativePaths: true,
                        publicPath: '../'
                    }
                }
            ],
        },
        plugins: [
            // This plugin extracts css files required in the entry points
            // into a separate CSS bundle for download
            new ExtractTextPlugin('css/[name].css'),
            //new ExtractTextPlugin(isProduction ? 'css/[name].bundle.[hash].css' : 'css/[name].css'),

            // This plugin writes a hard disk cache that is reused between webpack-dev-server processes
            // so that it's a lot faster to start up
            new HardSourceWebpackPlugin(),

            // Writes manifest.json which production code reads to know paths to asset files
            new ManifestPlugin(),

            // This plugin loads settings from .env so we can import them
            // Note that this means the settings become part of the client-side JS at webpack build time, not at server run time
            new Dotenv()
        ],
        devServer: {
            host: 'localhost',
            port: 8090,
            contentBase: 'public',
            disableHostCheck: true,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
                "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
            }
        },
    }
}
