module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname,
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    mode: 'development',
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    }
}