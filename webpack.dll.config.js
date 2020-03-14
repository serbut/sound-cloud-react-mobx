const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        vendor: [
            '@material-ui/core',
            '@material-ui/icons',
            'axios',
            'keymaster',
            'mobx',
            'mobx-react',
            'mobx-utils',
            'moment',
            'normalize.css',
            'react',
            'react-dom',
            'react-router-dom',
            'react-virtualized',
            'soundcloud',
            'query-string'
        ]
    },
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        library: '[name]'
    },
    plugins: [
        new webpack.DllPlugin({
            context: __dirname,
            name: '[name]',
            path: path.join(__dirname, 'dist', '[name]-manifest.json'),
        })
    ],
    module: {
        rules: [
            {
                test: /\.(css)$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            importLoaders: 1
                        }
                    }
                ]
            }
        ]
    }
};
