const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        vendor: [
            'axios',
            'js-cookie',
            'keymaster',
            'material-ui',
            'mobx',
            'mobx-react',
            'mobx-react-devtools',
            'moment',
            'normalize.css',
            'react',
            'react-dom',
            'react-router',
            'react-tap-event-plugin',
            'react-virtualized',
            'soundcloud',
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
