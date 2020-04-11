const path = require('path');

module.exports = {
    outputDir: path.resolve(__dirname, '../server/public'),
    css: {
        loaderOptions: {
            sass: {
                prependData: '@import "src/scss/_mixins.scss";'
            }
        }
    }
    // devServer: {
    //     proxy: {
    //         '/api': {
    //             target: 'http://localhost:5000'
    //         }
    //     }
    // }
};