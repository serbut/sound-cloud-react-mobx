var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        vendor: [
            'react',
            'react-dom',
            'material-ui',
            'moment',
            'soundcloud',
            'mobx',
            'react-router'
        ]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'dll.[name].js',
        library: '[name]'
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, 'dist', '[name]-manifest.json'),
            name: '[name]'
        })
    ]
}
