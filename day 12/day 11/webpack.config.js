const path = require('path');
module.exports= {
    mode: 'development',
    entry:path.join(__dirname,'./src/index.js'),
    module: {
        rules: [{
            test: /\.js/,
            use: [{
                loader: path.join(__dirname,'./loaders/replaceLoader.js'),
                options: {
                    name: 'beijing'
                }
            }]
        }]
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'

    }

}