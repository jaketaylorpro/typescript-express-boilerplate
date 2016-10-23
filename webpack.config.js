module.exports = {
    target: 'web',
    entry: './bld/client/views/view.js',
    output: {
        filename: 'public/bundle.js'
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.js']
    },
    module: {
        loaders: [
            { test: /view\.js$/, loader: 'expose?View' },
            { test: /\.json$/, loader: 'json-loader' }
        ]
    }
};