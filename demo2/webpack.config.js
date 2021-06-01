const path = require('path');
module.exports = {
    entry: {
        index: "./index.js",
        main: "./main.js"
    },
    output: {
        filename: "./js/[name].js",
        path: path.resolve(__dirname, 'dist')
    }
}